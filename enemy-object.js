import { GridObject } from "./grid-object.js";

class EnemyObject extends GridObject {
    constructor(sprite, stats) {
        super(sprite)
        this.type = "enemy"
        this.#stats = stats
    }
}

export { EnemyObject }