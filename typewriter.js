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

function typewriterEnding(text) {
    return new Promise((resolve) => {
        const lines = text.split('\n');
        let currentLine = 0;
        let i = 0;
        let currentSentence = '';

        function typeNextChar() {
            if (currentLine < lines.length) {
                if (i < lines[currentLine].length) {
                    const char = lines[currentLine].charAt(i);
                    i++;
                    currentSentence += char;
                    process.stdout.write('\r' + currentSentence);
                    setTimeout(typeNextChar, 40);
                } else {
                    console.log();
                    currentSentence = '';
                    i = 0;
                    currentLine++;
                    setTimeout(typeNextChar, 500);
                }
            } else {
                resolve();
            }
        }

        typeNextChar();
    });
}


export { typewriterEffect, typewriterEnding }