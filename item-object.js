import { GridObject } from "./grid-object.js"

class ItemObject extends GridObject {
    constructor(sprite, stats) {
        super(sprite)
        this.type = 'item',
        this.#stats = stats
    }
}

export { ItemObject }