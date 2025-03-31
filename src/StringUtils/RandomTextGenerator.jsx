import React, { useState } from 'react';
import './StringUtils.modules.css';

function RandomTextGenerator() {
    const [textLength, setTextLength] = useState(10);
    const [useUpperCase, setUseUpperCase] = useState(false);
    const [includePunctuation, setIncludePunctuation] = useState(false);
    const [randomText, setRandomText] = useState('');

    const generateRandomText = () => {
        const lowerCaseChars = 'abcdefghijklmnopqrstuvwxyz';
        const upperCaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        const punctuationChars = '.,!?;:';
        let charPool = lowerCaseChars;

        if (useUpperCase) charPool += upperCaseChars;
        if (includePunctuation) charPool += punctuationChars;

        let result = '';
        for (let i = 0; i < textLength; i++) {
            const randomIndex = Math.floor(Math.random() * charPool.length);
            result += charPool[randomIndex];
        }

        setRandomText(result);
    };

    return (
        <div className='randomTextGenerator'>
            <h1>Random Text Generator</h1>
            <div>
                <label>
                    Length:
                    <input
                        type="number"
                        min="1"
                        value={textLength}
                        onChange={(e) => setTextLength(Number(e.target.value))}
                    />
                </label>
                <br />
                <label>
                    <input
                        type="checkbox"
                        checked={useUpperCase}
                        onChange={(e) => setUseUpperCase(e.target.checked)}
                    />
                    Include Uppercase
                </label>
                <br />
                <label>
                    <input
                        type="checkbox"
                        checked={includePunctuation}
                        onChange={(e) => setIncludePunctuation(e.target.checked)}
                    />
                    Include Punctuation
                </label>
                <br />
                <button className="pure-button pure-button-primary" onClick={generateRandomText}>
                    Generate
                </button>
                {randomText && (
                    <div>
                        <textarea
                            readOnly
                            value={randomText}
                            className='stringUtilsTextArea'
                            rows="5"
                            cols="100%"
                            placeholder="Generated text will appear here..."
                        />
                    </div>
                )}
            </div>
        </div>
    );
}

export default RandomTextGenerator;
