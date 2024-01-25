class GridObject {
    #backgroundSprites = ['🌳', '🌲', '🌴', '🌵']

    constructor(sprite, type = "undiscovered") {
        if (!sprite) {
            const randomIndex = Math.floor(
                Math.random() * this.#backgroundSprites.length
            )
            this.sprite = this.#backgroundSprites[randomIndex]
        } else {
            this.sprite = sprite
        }
        this.type = type
    }

    describeNew() {
        const lines = [
            "A new land unfolds before us. Let us tread carefully, for danger often hides in beauty.",
            "By my sword, what mysteries does this place hold? Let's uncover its secrets!",
            "Behold, comrades! Our journey has led us to lands unknown and tales untold.",
            "This terrain is unfamiliar, but fear not. A true warrior finds a path where none exists.",
            "Keep your senses sharp. New lands bring new challenges and new foes.",
            "The maps do not speak of this place. We tread on uncharted ground.",
            "Eyes and ears open, friends. In unknown lands, every shadow may hide a threat.",
            "A new location... Let's explore its depths, but let wisdom guide our bravery.",
            "The gods have led us here for a purpose. Let's find out what it is.",
            "New lands, new adventures. May our swords and spirits be ready for whatever lies ahead."
        ]
        const randomIndex = Math.floor(Math.random() * lines.length)
        console.log(`🧝💬: "${lines[randomIndex]}"`)
    }

    describeOld() {
        const lines = [
            "Back to familiar grounds, yet each step reveals a new story.",
            "These walls hold memories of our past journey. Let's see what they offer this time.",
            "Once more we tread this path. May our previous trials guide us forward.",
            "The echoes of our last visit still linger here. Let's move with caution and wisdom.",
            "This place has changed, as have we. Let our renewed strength uncover its secrets.",
            "A second chance to uncover what we might have missed. Keep your eyes sharp.",
            "We return as different souls. This land may hold new truths for us now.",
            "Fate leads us back. Perhaps there's more to this place than we first knew.",
            "Our last journey here left many questions. Let's find the answers.",
            "This place feels both familiar and strange. Let's see what fate has in store for us."
        ]
        const randomIndex = Math.floor(Math.random() * lines.length)
        console.log(`🧝💬: "${lines[randomIndex]}"`)
    }

}

export { GridObject }