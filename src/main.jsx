import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import detectMobileBrowser from 'detect-mobile-browser';

const isMobile = detectMobileBrowser();

// if (!isMobile) {
//   ReactDOM.createRoot(document.getElementById('root')).render(
//     <React.StrictMode>
//       <App />
//     </React.StrictMode>
//   );
// } else {
//   ReactDOM.createRoot(document.getElementById('root')).render(
//     <div>
//       <h1>Access Denied</h1>
//       <p>This site is only accessible on mobile devices.</p>
//     </div>
//   );
// }
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
