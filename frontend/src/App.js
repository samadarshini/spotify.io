import React, { useState } from 'react';
import './App.css';  // Importing CSS

const App = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const [isSignUp, setIsSignUp] = useState(true); // State to toggle between Sign In and Sign Up

    const handleSignUp = () => {
        // Handle sign up logic
        setMessage('Sign up successful!');
    };

    const handleSignIn = () => {
        // Handle sign in logic
        setMessage('Sign in successful!');
    };

    return (
        <div className="container">
            {/* Spotify Logo */}
            <div className="logo">
                <img src="/Spotify logo.jpg" alt="Spotify Logo" width="70" height="60" />
            </div>

            <h1>{isSignUp ? 'Sign Up' : 'Sign In'}</h1> {/* Toggle the header based on state */}

            <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            {/* Show the appropriate button based on the 'isSignUp' state */}
            {isSignUp ? (
                <button className="button" onClick={handleSignUp}>Sign Up</button>
            ) : (
                <button className="button" onClick={handleSignIn}>Sign In</button>
            )}

            <p>{message}</p>

            {/* Toggle between Sign In and Sign Up */}
            <p>
                {isSignUp ? 'Already have an account? ' : 'Don\'t have an account? '}
                <button onClick={() => setIsSignUp(!isSignUp)}>
                    {isSignUp ? 'Sign In' : 'Sign Up'}
                </button>
            </p>
        </div>
    );
};

export default App;

