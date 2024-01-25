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
    describe() {
        const swordDiscoveryLines = [
            "Behold, the gleam of enchanted steel! This blade has tales yet untold.",
            "By my ancestors, this sword hums with ancient power. It shall be a worthy companion.",
            "A magic sword! Destiny has indeed smiled upon our quest this day.",
            "This is no ordinary blade; it whispers of battles past and glories yet to come.",
            "In my hand, this enchanted weapon shall carve a path to victory!",
            "The gods have blessed us. With this sword, our foes shall tremble.",
            "This is the work of masterful magic. I can feel its strength coursing through me.",
            "Such craftsmanship! This blade is more than steel; it's a piece of legend.",
            "With this magic sword at my side, no darkness shall stand in our way.",
            "This is a sign, comrades. Our journey is righteous, and our cause just."
        ]
        const randomIndex = Math.floor(Math.random() * swordDiscoveryLines.length)
        const stats = this.#stats
        console.log(`${this.sprite} You found a ${stats.name}!`)
        console.log(`🧝💬: "${swordDiscoveryLines[randomIndex]}"`)
        console.log(`${stats.name}'s Stats -> HP: ${stats.hp} ATK: ${stats.attack} DEF: ${stats.defense}`)
    }
}

export { ItemObject }