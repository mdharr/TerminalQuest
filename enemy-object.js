import { GridObject } from "./grid-object.js";

class EnemyObject extends GridObject {
    #stats = {
        name: null,
        attack: 0,
        defense: 0,
        hp: 0
    }
    constructor(sprite, stats) {
        super(sprite)
        this.type = "enemy"
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
        const spiderEncounterLines = [
            "Halt, eight-legged fiend! Your web of deceit ends here!",
            "By my sword, I shall ensure this is your final hunt, creature of darkness!",
            "Your venomous fangs shall not pierce the hearts of the innocent this day!",
            "In the light of the gods, I stand against you, spawn of the abyss!",
            "Let your many eyes bear witness to the strength of a true warrior!",
            "Your silk traps hold no fear for me, beast of the shadows!",
            "This cavern shall be your tomb, spider, as I cleanse it with steel and fire!",
            "I have faced demons and dragons; a mere spider shall not make me waver!",
            "Beware, for my blade cuts as swiftly as your webs ensnare!",
            "Today, I shall avenge those fallen to your venomous treachery!"
        ]
        const randomIndex = Math.floor(Math.random() * spiderEncounterLines.length)
        const stats = this.#stats
        console.log(`${this.sprite} You encountered a ${stats.name}!`)
        console.log(`🧝💬: "${spiderEncounterLines[randomIndex]}"`)
        console.log(`${stats.name}'s Stats -> HP: ${stats.hp} ATK: ${stats.attack} DEF: ${stats.defense}`)
    }
}

export { EnemyObject }