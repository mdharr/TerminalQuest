function typewriterEffect(text) {
    return new Promise((resolve) => {
        let i = 0
        let currentSentence = ''

        function typeNextChar() {
            if (i < text.length) {
                const char = text.charAt(i)
                i++
                currentSentence += char
                process.stdout.write('\r' + currentSentence)
                setTimeout(typeNextChar, 40)
            } else {
                console.log()
                resolve()
            }
        }

        typeNextChar()
    })
}

export { typewriterEffect }