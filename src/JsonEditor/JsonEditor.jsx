import React, { useEffect, useRef } from 'react';
import { createJSONEditor } from 'vanilla-jsoneditor';

function JsonEditor() {
    const editorContainerRef = useRef(null);
    const editorRef = useRef(null);

    useEffect(() => {
        if (editorContainerRef.current) {
            editorRef.current = createJSONEditor({
                target: editorContainerRef.current,
                props: {
                    mode: 'text',
                    content: { json: {} }, // Initial empty JSON
                    onChange: (updatedContent) => {
                        // do nothing
                    },
                },
            });
        }

        return () => {
            if (editorRef.current) {
                editorRef.current.destroy();
            }
        };
    }, []);

    const copyToClipboard = () => {
        if (editorRef.current) {
            const content = editorRef.current.get();
            const jsonString = JSON.stringify(content.json, null, 2);
            navigator.clipboard.writeText(jsonString).then(() => {
                console.log('JSON content copied to clipboard!');
            }).catch((err) => {
                console.error('Failed to copy JSON content: ', err);
            });
        }
    };

    return (
        <div>
            <h1>JSON Editor</h1>
            <div id="jsoneditor" ref={editorContainerRef} style={{ height: '400px', border: '1px solid #ccc' }}></div>
            <button onClick={copyToClipboard} style={{ marginTop: '10px' }}>
                Copy JSON to Clipboard
            </button>
        </div>
    );
}

export default JsonEditor;