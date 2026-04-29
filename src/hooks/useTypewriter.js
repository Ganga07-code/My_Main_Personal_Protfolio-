import { useState, useEffect } from 'react';

export const useTypewriter = (phrases, speed = 80, pause = 2000) => {
    const [text, setText] = useState('');
    const [phraseIndex, setPhraseIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const currentPhrase = phrases[phraseIndex];
        
        const timeout = setTimeout(() => {
            if (!isDeleting) {
                setText(currentPhrase.substring(0, charIndex + 1));
                setCharIndex(prev => prev + 1);
                if (charIndex + 1 === currentPhrase.length) {
                    setIsDeleting(true);
                }
            } else {
                setText(currentPhrase.substring(0, charIndex - 1));
                setCharIndex(prev => prev - 1);
                if (charIndex === 0) {
                    setIsDeleting(false);
                    setPhraseIndex((prev) => (prev + 1) % phrases.length);
                }
            }
        }, isDeleting ? speed / 2 : speed);

        if (isDeleting && charIndex === currentPhrase.length) {
            clearTimeout(timeout);
            setTimeout(() => setIsDeleting(true), pause);
        }

        return () => clearTimeout(timeout);
    }, [charIndex, isDeleting, phraseIndex, phrases, speed, pause]);

    return text;
};
