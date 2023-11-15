 import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css'; // Import your CSS file here
import App from './App';

const root = document.getElementById('root');
const rootContainer = createRoot(root);

rootContainer.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
