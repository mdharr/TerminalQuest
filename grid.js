import { GridObject } from "./grid-object.js"

class Grid {
    constructor(width, height) {
        this.width = width
        this.height = height

        this.grid = []
        for (let row = 0; row < height; row++) {
            let currentRow = []
            for (let col = 0; col < width; col++) {
                currentRow.push(new GridObject('🌳'))
            }
            this.grid.push(currentRow)
        }

        this.grid[height-1][0] = new GridObject('🧝')
        this.grid[0][width-1] = new GridObject('🏰')

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
}

new Grid(15, 15)


export { Grid }