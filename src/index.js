import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import MetalabsARviewer from './components/Metalabs-ARviewer';

import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  // </React.StrictMode>
    <MetalabsARviewer src="https://metainvincible.s3.amazonaws.com/meta/AR-cars/demo/Webgl/1715239468771/tata_punch.glb"/>
);

reportWebVitals();
