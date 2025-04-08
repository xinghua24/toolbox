import React, { useState } from 'react'
import './UUIDGenerator.modules.css'
import { v4 as uuidv4 } from 'uuid';
import { Button, Icon, IconButton, Text } from '@chakra-ui/react';
import { MdContentCopy, MdOutlineContentCopy } from "react-icons/md";
import { Toaster, toaster } from "@/components/ui/toaster"

function UUIDGenerator() {
    const [uuidValue, setUuidValue] = useState('00000000-0000-0000-0000-000000000000');

    const generateUUID = () => {
        const newUUID = uuidv4();
        setUuidValue(newUUID);
        navigator.clipboard.writeText(newUUID).then(() => {
            console.log('UUID copied to clipboard');
            toaster.create({
                title: "UUID Copied",
                type: "success"
            });
        }).catch(err => {
            console.error('Failed to copy: ', err);
        });
    }

    return (
        <div className='uuidGenerator'>
            <div>
                <Button onClick={generateUUID} colorPalette="blue" size="md" variant="surface">
                    Generate & Copy
                </Button>
            </div>
            <div>
                <Text fontSize="2em">{uuidValue}
                    <IconButton size='md' variant="ghost" onClick={() => navigator.clipboard.writeText(uuidValue)}><MdOutlineContentCopy fill='#333' /></IconButton>
                </Text>
            </div>
            <Toaster />
        </div>
    )
}

export default UUIDGenerator