/**
 * App.js
 * Main React component for the ATOM platform.
 */

import React, { useState } from 'react';

function App() {
    const [message, setMessage] = useState("");

    // Fetch data from the Flask backend
    const fetchMessage = async () => {
        const response = await fetch('http://127.0.0.1:5000/');
        const data = await response.json();
        setMessage(`${data.message} - ${data.description}`);
    };

    return (
        <div>
            <header>
                <h1>ATOM Dashboard</h1>
            </header>
            <main>
                <button onClick={fetchMessage}>Fetch API Message</button>
                <p>{message}</p>
            </main>
        </div>
    );
}

export default App;
