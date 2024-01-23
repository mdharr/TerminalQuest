class Grid {
    constructor(width, height) {
        this.width = width
        this.height = height

        this.grid = []
        for (let row = 0; row < height; row++) {
            let thisRow = []
            for (let col = 0; col < width; col++) {
                thisRow.push('🌳')
            }
            this.grid.push(thisRow)
        }

        this.grid[height-1][0] = '🧝'
        this.grid[0][width-1] = '🏰'

        this.displayGrid()
    }

    displayGrid() {
        for (let row = 0; row < this.height; row++) {
            for (let col = 0; col < this.width; col++) {
                process.stdout.write(`${this.grid[row][col]} `)
            }
            process.stdout.write(`\n`)
        }
    }
}

new Grid(15, 15)



export { Grid }