function typewriterEffect(text) {
    return new Promise((resolve) => {
        let i = 0;
        let currentSentence = '';
        let isPeriod = false;

        function typeNextChar() {
            if (i < text.length) {
                const char = text.charAt(i);
                i++;

                if (isPeriod && char === ' ') {
                    typeNextChar();
                    return;
                }

                currentSentence += char;
                process.stdout.write('\r' + currentSentence);

                if (char === '.') {
                    isPeriod = true;
                    setTimeout(() => {
                        console.log();
                        currentSentence = '';
                        setTimeout(typeNextChar, 500);
                    }, 2000);
                } else {
                    isPeriod = false;
                    setTimeout(typeNextChar, 50);
                }
            } else {
                console.log();
                // Resolve the promise when the typewriter effect is done
                resolve();
            }
        }

        typeNextChar();
    });
}

export { typewriterEffect }