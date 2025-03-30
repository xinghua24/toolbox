import React, { useState } from 'react'
import './UUIDGenerator.modules.css'
import { v4 as uuidv4 } from 'uuid';

function UUIDGenerator() {
    const [uuidValue, setUuidValue] = useState('00000000-0000-0000-0000-000000000000');

    const generateUUID = () => {
        const newUUID = uuidv4();
        setUuidValue(newUUID);
        navigator.clipboard.writeText(newUUID).then(() => {
            console.log('UUID copied to clipboard');
        }).catch(err => {
            console.error('Failed to copy: ', err);
        });
    }

    return (
        <div className='uuidGenerator'>
            <div>
                <button className="pure-button  pure-button-primary" onClick={generateUUID}>Generate & Copy</button>
            </div>
            <div><span className='uuidValue'>{uuidValue}</span></div>
        </div>
    )
}

export default UUIDGenerator