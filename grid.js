import { GridObject } from "./grid-object.js"
import { ItemObject } from "./item-object.js"
import { EnemyObject } from "./enemy-object.js"
import { Player } from "./player.js"

class Grid {
    #currentObject

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

        this.displayGrid()
        this.movePlayerRight()
        console.log('------------------')
        this.displayGrid()
    }

    displayGrid() {
        for (let row = 0; row < this.height; row++) {
            for (let col = 0; col < this.width; col++) {
                process.stdout.write(this.grid[row][col].sprite + " ")
            }
            process.stdout.write(`\n`)
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

    executeTurn() {
        if (this.grid[this.playerY][this.playerX].type === 'win') {
            console.log(`Congrats! You win!`)
            process.exit()
        }

        if (this.#currentObject.type === 'discovered') {
            this.#currentObject.describe()
            return
        }

        if (this.#currentObject.type === 'item') {
            this.#currentObject.describe()
            const itemStats = this.#currentObject.getStats()
            this.player.addToStats(itemStats)
            return
        }

        this.#currentObject.describe()

        const enemyStats = this.#currentObject.getStats()
        const enemyName = this.#currentObject.getName()
        const playerStats = this.player.getStats()

        if (enemyStats.defense > playerStats.attack) {
            console.log(`You lose - ${enemyName} was too powerful!`)
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
                console.log(`You lose - ${enemyName} was too powerful!`)
                process.exit()
            }

            this.player.addToStats({ hp: -totalPlayerDamage })
            console.log(`You defeated the ${enemyName}! Your updated stats:`)
            this.player.describe()
        }
    }

    movePlayerRight() {
        if(this.playerX === this.width - 1) {
            console.log('Cannot move right')
            return
        }

        this.grid[this.playerY][this.playerX] = new GridObject("👣", "discovered")
        this.playerX += 1

        if(this.grid[this.playerY][this.playerX].type === "discovered") {
            this.grid[this.playerY][this.playerX].describe()
            this.grid[this.playerY][this.playerX] = new GridObject('🧝')
            return
        }

        this.#currentObject = this.generateGridObject()
        this.executeTurn()
        this.grid[this.playerY][this.playerX] = new GridObject('🧝')
    }

    movePlayerLeft() {
        if(this.playerX === 0) {
            console.log('Cannot move left')
            return
        }

        this.grid[this.playerY][this.playerX] = new GridObject("👣", "discovered")
        this.playerX -= 1

        if(this.grid[this.playerY][this.playerX].type === "discovered") {
            this.grid[this.playerY][this.playerX].describe()

            this.grid[this.playerY][this.playerX] = new GridObject('🧝')
            return
        }

        this.#currentObject = this.generateGridObject() // generation
        this.executeTurn()
        this.grid[this.playerY][this.playerX] = new GridObject('🧝')
    }

    movePlayerUp() {
        if(this.playerY === 0) {
            console.log('Cannot move up')
            return
        }

        this.grid[this.playerY][this.playerX] = new GridObject("👣", "discovered")
        this.playerY -= 1

        if(this.grid[this.playerY][this.playerX].type === "discovered") {
            this.grid[this.playerY][this.playerX].describe()
            this.grid[this.playerY][this.playerX] = new GridObject('🧝')
            return
        }

        this.#currentObject = this.generateGridObject() // generation
        this.executeTurn()
        this.grid[this.playerY][this.playerX] = new GridObject('🧝')
    }

    movePlayerDown() {
        if(this.playerX === this.height - 1) {
            console.log('Cannot move down')
            return
        }

        this.grid[this.playerY][this.playerX] = new GridObject("👣", "discovered")
        this.playerY += 1

        if(this.grid[this.playerY][this.playerX].type === "discovered") {
            this.grid[this.playerY][this.playerX].describe()
            this.grid[this.playerY][this.playerX] = new GridObject('🧝')
            return
        }

        this.#currentObject = this.generateGridObject() // generation
        this.executeTurn()
        this.grid[this.playerY][this.playerX] = new GridObject('🧝')
    }

}

new Grid(5, 5)


export { Grid }