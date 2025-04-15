import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import { Button, Center, Flex, Icon, IconButton, Text } from '@chakra-ui/react';
import { MdOutlineContentCopy } from "react-icons/md";
import { Toaster, toaster } from "@/components/ui/toaster"

function UUIDGenerator() {
    const [uuidValue, setUuidValue] = useState('00000000-0000-0000-0000-000000000000');

    const generateUUID = () => {
        const newUUID = uuidv4();
        setUuidValue(newUUID);
        copyUuidToClipboard()

    }

    const copyUuidToClipboard = () => {
        navigator.clipboard.writeText(uuidValue).then(() => {
            console.log('UUID copied to clipboard');
            toaster.create({
                title: "UUID Copied",
                type: "success"
            })
        }).catch(err => {
            console.error('Failed to copy: ', err);
        });
    }

    return (
        <Center flexDir="column" gap="1">
            <div>
                <Button onClick={generateUUID} colorPalette="blue" size="md" variant="surface">
                    Generate & Copy
                </Button>
            </div>
            <Flex align-items="baseline">
                <Text fontSize={{ base: '1em', md: "2em" }} fontFamily={['Courier New', 'Courier', 'monospace',]}>{uuidValue}
                    <IconButton size='sm' variant="surface" onClick={copyUuidToClipboard}><MdOutlineContentCopy fill='#333' /></IconButton>
                </Text>
            </Flex>
            <Toaster />
        </Center>
    )
}

export default UUIDGenerator