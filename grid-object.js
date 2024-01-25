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

    describe() {
        const discovered = [
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
        const randomIndex = Math.floor(Math.random() * discovered.length)
        console.log(discovered[randomIndex])
    }

}

export { GridObject }