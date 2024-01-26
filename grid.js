import { GridObject } from "./grid-object.js"
import { ItemObject } from "./item-object.js"
import { EnemyObject } from "./enemy-object.js"
import { Player } from "./player.js"
import { promptPlayerForDirection } from "./player-prompts.js"
import { typewriterEffect } from "./typewriter.js"

import chalk from 'chalk'

class Grid {
    #currentObject
    #startJourney = true

    constructor(width, height, playerStartX = 0, playerStartY = height - 1) {
        this.width = width
        this.height = height
        this.playerX = playerStartX
        this.playerY = playerStartY
        this.player = new Player('Guts', { attack: 10, defense: 5, hp: 20 })

        this.grid = []
        for (let row = 0; row < height; row++) {
            let currentRow = []
            for (let col = 0; col < width; col++) {
                currentRow.push(new GridObject())
            }
            this.grid.push(currentRow)
        }

        this.grid[height-1][0] = new GridObject('🧝', 'player')
        this.grid[0][width-1] = new GridObject('🏰', 'win')

        this.startGame()
    }

    async startGame() {
        while(this.player.getStats().hp > 0) {
            await this.displayGrid()
            console.log()
            const response = await promptPlayerForDirection()
            
            switch (response) {
                case "Up": {
                    process.stdout.write('\x1Bc')
                    await this.movePlayerUp()
                    break
                }
                case "Down": {
                    process.stdout.write('\x1Bc')
                    await this.movePlayerDown()
                    break
                }
                case "Left": {
                    process.stdout.write('\x1Bc')
                    await this.movePlayerLeft()
                    break
                }
                case "Right": {
                    process.stdout.write('\x1Bc')
                    await this.movePlayerRight()
                    break
                }
            }

            console.log(chalk.white('-------------------------------------------------------------------------------'))
        }
    }

    async displayGrid() {
        await this.player.describe()
        console.log()
        for (let row = 0; row < this.height; row++) {
            for (let col = 0; col < this.width; col++) {
                process.stdout.write(this.grid[row][col].sprite + `\t`)
            }
            process.stdout.write(`\n`)
            console.log()
        }
        console.log()
        if(this.#startJourney) {
            await this.player.embark()
            this.#startJourney = false
        }
    }

    generateGridObject() {
        const random = Math.random()
        let object
        if (random < 0.15) {
            object = new ItemObject('🗡', {
                name: 'Sword',
                attack: 3,
                defense: 1,
                hp: 0
            })
        } else if (random < 0.35) {
            object = new EnemyObject('🕷', {
                name: "Spider",
                attack: 5,
                defense: 1,
                hp: 6
            })
        } else {
            object = new GridObject('👣', "discovered")
        }

        return object
    }

    async executeTurn() {
        if (this.grid[this.playerY][this.playerX].type === 'win') {
            // console.log(`Congrats! You win!`)
            await typewriterEffect(`Congrats! You win!`)
            process.exit()
        }

        if (this.#currentObject.type === 'discovered') {
            // this.#currentObject.describeOld()
            return
        }

        if (this.#currentObject.type === 'item') {
            await this.#currentObject.describe()
            const itemStats = this.#currentObject.getStats()
            this.player.addToStats(itemStats)
            return
        }

        await this.#currentObject.describe()

        const enemyStats = this.#currentObject.getStats()
        const enemyName = this.#currentObject.getName()
        const playerStats = this.player.getStats()

        // console.log(enemyStats)
        // console.log(playerStats)

        if (enemyStats.defense > playerStats.attack) {
            await typewriterEffect(`You lose - ${enemyName} was too powerful!`)
            process.exit()
        }

        let totalPlayerDamage = 0
        while(enemyStats.hp > 0) {
            const playerTurn = playerStats.attack - enemyStats.defense
            const enemyTurn = enemyStats.attack - playerStats.defense
            if (playerTurn > 0) {
                enemyStats.hp -= playerTurn
            }
            if (enemyTurn > 0) {
                playerStats.hp -= enemyTurn
                totalPlayerDamage += enemyTurn
            }

            if (playerStats.hp <= 0) {
                await typewriterEffect(`You lose - ${enemyName} was too powerful!`)
                process.exit()
            }

            this.player.addToStats({ hp: -totalPlayerDamage })
            await typewriterEffect(`You defeated the ${enemyName}!`)
            // await this.player.describe()
        }
    }

    async movePlayerRight() {
        if(this.playerX === this.width - 1) {
            await this.boundaryDialogue()
            return
        }

        this.grid[this.playerY][this.playerX] = new GridObject("👣", "discovered")
        this.playerX += 1

        if(this.grid[this.playerY][this.playerX].type === "discovered") {
            await this.grid[this.playerY][this.playerX].describeOld()
            this.grid[this.playerY][this.playerX] = new GridObject('🧝')
            return
        }
        if(this.grid[this.playerY][this.playerX].type === "undiscovered") {
            await this.grid[this.playerY][this.playerX].describeNew()
        }

        this.#currentObject = this.generateGridObject()
        await this.executeTurn()
        this.grid[this.playerY][this.playerX] = new GridObject('🧝')
    }

    async movePlayerLeft() {
        if(this.playerX === 0) {
            await this.boundaryDialogue()
            return
        }

        this.grid[this.playerY][this.playerX] = new GridObject("👣", "discovered")
        this.playerX -= 1

        if(this.grid[this.playerY][this.playerX].type === "discovered") {
            await this.grid[this.playerY][this.playerX].describeOld()
            this.grid[this.playerY][this.playerX] = new GridObject('🧝')
            return
        }

        if(this.grid[this.playerY][this.playerX].type === "undiscovered") {
            await this.grid[this.playerY][this.playerX].describeNew()
        }

        this.#currentObject = this.generateGridObject()
        await this.executeTurn()
        this.grid[this.playerY][this.playerX] = new GridObject('🧝')
    }

    async movePlayerUp() {
        if(this.playerY === 0) {
            await this.boundaryDialogue()
            return
        }

        this.grid[this.playerY][this.playerX] = new GridObject("👣", "discovered")
        this.playerY -= 1

        if(this.grid[this.playerY][this.playerX].type === "discovered") {
            await this.grid[this.playerY][this.playerX].describeOld()
            this.grid[this.playerY][this.playerX] = new GridObject('🧝')
            return
        }

        if(this.grid[this.playerY][this.playerX].type === "undiscovered") {
            await this.grid[this.playerY][this.playerX].describeNew()
        }

        this.#currentObject = this.generateGridObject()
        await this.executeTurn()
        this.grid[this.playerY][this.playerX] = new GridObject('🧝')
    }

    async movePlayerDown() {
        if(this.playerY === this.height - 1) {
            await this.boundaryDialogue()
            return
        }

        this.grid[this.playerY][this.playerX] = new GridObject("👣", "discovered")
        this.playerY += 1

        if(this.grid[this.playerY][this.playerX].type === "discovered") {
            await this.grid[this.playerY][this.playerX].describeOld()
            this.grid[this.playerY][this.playerX] = new GridObject('🧝')
            return
        }

        if(this.grid[this.playerY][this.playerX].type === "undiscovered") {
            await this.grid[this.playerY][this.playerX].describeNew()
        }

        this.#currentObject = this.generateGridObject()
        await this.executeTurn()
        this.grid[this.playerY][this.playerX] = new GridObject('🧝')
    }

    async boundaryDialogue() {
        const lines = [
            "Here we stand, at the world's end. No path left to tread.",
            "The edge of the world... a boundary not even we can cross.",
            "So this is it, the end of all maps. We can venture no further.",
            "Our journey halts at the world's brink. There are no roads beyond.",
            "We've reached the world's edge; our blades cannot carve a path through the void.",
            "Before us, the great unknown; a boundary we cannot breach.",
            "At the world's limit, we must pause. Our adventure finds its end.",
            "The edge of the world, a barrier unyielding. We've gone as far as fate allows.",
            "This is where our path ends, at the very edge of existence.",
            "We've reached the end of the world. Here, our footsteps must halt."
        ]
        const randomIndex = Math.floor(Math.random() * lines.length)
        // console.log(`${chalk.blue('🧝💬')}: "${lines[randomIndex]}"`)
        await typewriterEffect(`${chalk.blue('🧝💬')}: "${lines[randomIndex]}"`)
    }

}

new Grid(5, 5)


export { Grid }