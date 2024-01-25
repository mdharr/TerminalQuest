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

        // discovering a new place
        this.#currentObject = this.generateGridObject() // generation
        this.#currentObject.describe()
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

        // discovering a new place
        this.#currentObject = this.generateGridObject() // generation
        this.#currentObject.describe()
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

        // discovering a new place
        this.#currentObject = this.generateGridObject() // generation
        this.#currentObject.describe()
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

        // discovering a new place
        this.#currentObject = this.generateGridObject() // generation
        this.#currentObject.describe()
        this.grid[this.playerY][this.playerX] = new GridObject('🧝')
    }

}

new Grid(5, 5)


export { Grid }