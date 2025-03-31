import React, { useState, useEffect } from 'react';

function TimeUtils() {
    const [currentTime, setCurrentTime] = useState('');
    const [currentUTCTime, setCurrentUTCTime] = useState('');
    const [currentEpochTime, setCurrentEpochTime] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const [epochInput, setEpochInput] = useState('');
    const [convertedTime, setConvertedTime] = useState('');

    useEffect(() => {
        const updateTimes = () => {
            if (!isPaused) {
                const now = new Date();
                const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
                setCurrentTime(`${now.toLocaleString()} (${timeZone})`);
                setCurrentUTCTime(now.toUTCString());
                setCurrentEpochTime(Math.floor(now.getTime() / 1000));
            }
        };

        updateTimes();
        const interval = setInterval(updateTimes, 1000); // Updates every second

        return () => clearInterval(interval); // Cleanup on unmount
    }, [isPaused]);

    const togglePause = () => {
        setIsPaused((prev) => !prev);
    };

    const copyToClipboard = (text) => {
        navigator.clipboard.writeText(text);
    };

    const convertEpochToLocalTime = () => {
        if (epochInput) {
            const date = new Date(Number(epochInput) * 1000);
            const formattedDate = date.toLocaleString('en-US', {
                year: 'numeric',
                month: '2-digit',
                day: '2-digit',
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit',
                hour12: false,
            }).replace(',', ''); // Remove the comma for cleaner formatting
            setConvertedTime(formattedDate);
        } else {
            setConvertedTime('');
        }
    };

    return (
        <div>
            <h1>Current Time</h1>
            <p>
                Current Time: {currentTime}{' '}
                <button onClick={() => copyToClipboard(currentTime)}>Copy</button>
            </p>
            <p>
                Current UTC Time: {currentUTCTime}{' '}
                <button onClick={() => copyToClipboard(currentUTCTime)}>Copy</button>
            </p>
            <p>
                Current Epoch Time(second): {currentEpochTime}{' '}
                <button onClick={() => copyToClipboard(currentEpochTime)}>Copy</button>
            </p>
            <button onClick={togglePause}>
                {isPaused ? 'Resume' : 'Pause'}
            </button>

            <h1>Time Converter</h1>
            <p>
                <input
                    placeholder="Enter epoch time"
                    value={epochInput}
                    onChange={(e) => setEpochInput(e.target.value)}
                />
                <button onClick={convertEpochToLocalTime}>Convert</button>
            </p>
            {convertedTime && <p>Converted Time: {convertedTime}</p>}
        </div>
    );
}

export default TimeUtils;