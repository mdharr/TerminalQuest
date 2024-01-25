function typewriterEffect(text) {
    return new Promise((resolve) => {
        let i = 0
        let currentSentence = ''
        let isPeriod = false

        function typeNextChar() {
            if (i < text.length) {
                const char = text.charAt(i)
                i++

                if (isPeriod && char === ' ') {
                    typeNextChar()
                    return
                }

                currentSentence += char
                process.stdout.write('\r' + currentSentence)
                setTimeout(typeNextChar, 25)
            } else {
                console.log()
                resolve()
            }
        }

        typeNextChar()
    })
}

export { typewriterEffect }