import React, { useState } from 'react'
import { LoremIpsum } from "lorem-ipsum";
import './StringUtils.modules.css'
import RandomTextGenerator from './RandomTextGenerator';


function StringUtils() {
    const [stringInput, setStringInput] = useState('');
    const [showCharCodes, setShowCharCodes] = useState(false)
    const [stringCharCodes, setStringCharCodes] = useState([]);
    const [loremParagraphs, setLoremParagraphs] = useState(1);
    const [loremText, setLoremText] = useState('');


    const checkASCIIString = (str) => {
        if (str.length === 0) return '';
        if (/^[\x00-\x7F]*$/.test(str))
            return 'true';
        else
            return 'false';
    }

    const getStringCharCodes = (str) => {
        let result = [];
        for (let i = 0; i < str.length; i++) {
            result.push(str.charCodeAt(i));
        }
        return result;
    }

    const clearInput = () => {
        setStringInput('');
        setStringCharCodes([]);
        setShowCharCodes(false);
    }


    function countWords(str) {
        return str.trim().length == 0 ? 0 : str.trim().split(/\s+/).length;
    }

    const generateLorem = (nParagraphs) => {
        const lorem = new LoremIpsum({
            sentencesPerParagraph: {
                min: 3,
                max: 7
            },
            wordsPerSentence: {
                min: 5,
                max: 15
            },
            format: "plain",
            suffix: "\n\n"
        });

        return lorem.generateParagraphs(Number.parseInt(nParagraphs));
    }

    return (
        <div className='stringUtils'>
            <h1>String Stats</h1>
            <textarea className='stringUtilsTextArea' rows="10" placeholder="Enter your string here..."
                value={stringInput}
                onChange={e => setStringInput(e.target.value)}></textarea>
            <div>
                <p>character count: {stringInput.length}</p>
                <p>word count: {countWords(stringInput)} </p>
                <p>is ASCII: {checkASCIIString(stringInput)}</p>
            </div>
            <button className="pure-button pure-button-primary clearBtn" onClick={clearInput}>Clear</button>
            <br></br>
            <button className="pure-button pure-button-primary getCharCodesBtn" onClick={() => {
                setStringCharCodes(getStringCharCodes(stringInput));
                setShowCharCodes(true);
            }}>Get Char Codes</button>
            <textarea readOnly hidden={!showCharCodes} value={stringCharCodes.join(' ')} className='stringUtilsTextArea' rows="10" cols="100%"
                placeholder="Char codes will be displayed here..." />


            <br />
            <h1>Lorem Ipsum</h1>
            Paragraphs: <input type="number" min="1" max="30" value={loremParagraphs} onChange={e => setLoremParagraphs(e.target.value)} />
            <button className="pure-button pure-button-primary" onClick={() => {
                var text = generateLorem(loremParagraphs);
                setLoremText(text);
                navigator.clipboard.writeText(text).then(() => {
                    console.log('Lorem Ipsum copied to clipboard');
                }).catch(err => {
                    console.error('Failed to copy: ', err);
                });
            }}>Generate & Copy</button>
            <div>
                <textarea readOnly value={loremText} className='stringUtilsTextArea' rows="10" cols="100%" placeholder="Lorem Ipsum will be generated here..." />
            </div>


            <br />
            <RandomTextGenerator />
        </div>
    )
}

export default StringUtils