import chalk from 'chalk'
import { typewriterEffect } from './typewriter.js'

class Player {
    #stats = {
        attack: 0,
        defense: 0,
        hp: 0
    }
    constructor(name, stats) {
        this.name = name
        this.#stats = stats
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
    addToStats(statsObject) {
        if(statsObject.attack) {
            this.#stats.attack += statsObject.attack
        }
        if(statsObject.defense) {
            this.#stats.defense += statsObject.defense
        }
        if(statsObject.hp) {
            this.#stats.hp += statsObject.hp
        }
    }
    async describe() {
        const stats = this.#stats
        console.log(`${chalk.blue('Player Stats')} -> ${chalk.green('HP')}: ${stats.hp} ${chalk.red('ATK')}: ${stats.attack} ${chalk.yellow('DEF')}: ${stats.defense}`)
        // await typewriterEffect(`${chalk.blue('Player Stats')} -> ${chalk.green('HP')}: ${stats.hp} ${chalk.red('ATK')}: ${stats.attack} ${chalk.yellow('DEF')}: ${stats.defense}`)
    }
    async embark() {
        const lines = [
            "To new horizons we march, blades in hand and courage in heart!",
            "Let this adventure forge us anew, stronger and braver than ever before.",
            "By steel and valor, we shall overcome whatever trials await us on this path.",
            "To adventure! May our deeds be sung in halls and remembered through ages.",
            "The unknown calls, and we answer with unwavering spirit and unyielding swords!",
            "In the face of danger and uncertainty, we stand united, ready for glory.",
            "Let's step into the unknown. Every legend starts with a brave first step.",
            "Forward, companions! Destiny awaits us with open arms and hidden challenges.",
            "This journey may test our mettle, but in each other, we find our strength.",
            "Onwards! Let the tales of our bravery inspire generations to come."
        ]
        const randomIndex = Math.floor(Math.random() * lines.length)
        // console.log(`🧝💬: "${lines[randomIndex]}"`)
        await typewriterEffect(`🧝💬: "${lines[randomIndex]}"`)
    }
    async newLocation() {
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
        // console.log(`🧝💬: "${lines[randomIndex]}"`)
        await typewriterEffect(`🧝💬: "${lines[randomIndex]}"`)
    }
}

export { Player }