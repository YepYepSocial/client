import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

document.body.classList.toggle('dark', true);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
