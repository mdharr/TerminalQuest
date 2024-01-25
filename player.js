class Player {
    #stats = {
        attack: 0,
        defense: 0,
        hp: 0
    }
    constructor(name, stats) {
        this.name = name
        this.stats = stats
    }
}

export { Player }