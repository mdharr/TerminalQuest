function getEnding() {
    const endingDialogue = [
        "At long last, the ancient city! Our quest reaches its end, but our legend is just beginning.",
        "Behold the fruits of our perseverance! The lost city, a testament to our unwavering resolve.",
        "We stand at the pinnacle of our journey, amidst these ancient stones, triumphant!",
        "By the gods, we've done it! Let the annals of history remember this day!",
        "This city, long hidden from the world, now witnesses the strength of our fellowship.",
        "In the shadow of these ancient ruins, we find our destiny fulfilled.",
        "The end of our quest, yet the beginning of a new chapter in the lore of this forgotten city.",
        "We entered as seekers, and now stand as finders of lost legends and keepers of ancient truths.",
        "Our journey was fraught with peril, but behold the reward of our courage and determination!",
        "Let us take a moment, under these age-old skies, to honor the path we've walked to get here."
    ]
    const endings = [
        "The Guardian's Pact: As the warrior reaches the ancient city,\nthey discover it is guarded by a timeless sentinel,\na creature of immense power. After a mighty battle,\nthe warrior proves their worth, leading to a pact with the sentinel.\nThe city is revealed to be a repository of ancient knowledge\nand powerful artifacts. The warrior becomes the new guardian,\nsworn to protect the city's secrets and use its knowledge\nto maintain balance in the world.",
        "The Lost Civilization Restored: Upon arriving at the ancient city,\nthe warrior finds it inhabited by descendants of the original builders,\nliving in secret and isolation. With the warrior's help,\nthey are able to restore the city to its former glory and rejoin\nthe outside world. The warrior is honored as a hero and\noffered a place of high standing in the revitalized city.",
        "The Awakening of the Ancients: The completion of the quest triggers\nan ancient magic, awakening the spirits of the city's original inhabitants.\nThese ancients bestow upon the warrior an understanding of\ntheir lost history and magic. Armed with this new knowledge and power,\nthe warrior is tasked with guiding the world towards a brighter future,\nusing the wisdom of the past.",
        "The Ultimate Sacrifice: The ancient city holds a powerful artifact,\nbut its removal requires a great sacrifice. The warrior must choose\nbetween personal glory and the greater good. Choosing the latter,\nthe warrior sacrifices themselves, ensuring the safety and prosperity\nof the realms. Their heroic deed becomes a tale of legend,\ninspiring future generations.",
        "The Discovery of a New Quest: The city, thought to be the end of the\nwarrior's journey, is only a stepping stone to a greater adventure.\nWithin its walls, the warrior discovers a greater threat to the world,\none that had been sealed away but is now close to awakening.\nThe warrior must now embark on a new quest to prevent this ancient evil\nfrom unleashing chaos upon the world."
    ]
    const randomLine = Math.floor(Math.random() * endingDialogue.length)
    const randomEnding = Math.floor(Math.random() * endings.length)
    return [endingDialogue[randomLine], endings[randomEnding]]
}

export { getEnding }