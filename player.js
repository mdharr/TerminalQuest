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
    getName() {
        return this.name
    }
    getStats() {
        return {
            attack: this.#stats.attack,
            defense: this.#stats.defense,
            hp: this.#stats.hp
        }
    }
}

export { Player }