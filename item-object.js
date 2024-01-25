import { GridObject } from "./grid-object.js"

class ItemObject extends GridObject {
    #stats = {
        name: null,
        attack: 0,
        defense: 0,
        hp: 0
    }
    constructor(sprite, stats) {
        super(sprite)
        this.type = 'item',
        this.#stats = stats
    }
    getName() {
        return this.#stats.name
    }
    getStats() {
        return {
            attack: this.#stats.attack,
            defense: this.#stats.defense,
            hp: this.#stats.hp
        }
    }
}

export { ItemObject }