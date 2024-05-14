import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import MetalabsARviewer from './components/Metalabs-ARviewer';

import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <MetalabsARviewer 
      src="https://metainvincible.s3.amazonaws.com/meta/AR-cars/demo/Webgl/1715239468771/tata_punch.glb"
      clientId="your-client-id"
      secretKey="your-secret-key"
      s3Url="your-s3-url"
    />
);

reportWebVitals();
