import React, { useState,useRef, useEffect } from 'react';
import QRCode from 'qrcode.react';

const ARViewer = ({ src }) => {
  const modelViewerRef = useRef(null);
  const [Arsupported,setARsupported]= useState(null);    
  const [showQRPopup, setShowQRPopup] = useState(false);


  useEffect(() => {
    const modelViewer = modelViewerRef.current;
    if(modelViewer) {
        console.log('source url', src);
        const initAR = async () => {
          if(await modelViewer.canActivateAR) {
            // modelViewer.activateAR();   //automatically Turn on AR view
            setARsupported(modelViewer.canActivateAR);
          }
          else {
            setARsupported(false);
          }
        };
        initAR()
    } 
  }, [src]);

  const handleARButtonClick = () => {
    if (modelViewerRef.current) {
      modelViewerRef.current.activateAR();
    }
  };

  
  
  return (
    <>
      {Arsupported === null && <div>Checking for AR support...</div>}
      {Arsupported ? 
      (<>
        <button onClick={handleARButtonClick}
         style={{
          position: 'absolute',
          right: '20px',
          bottom: '120px',
          zIndex: 10,
          padding: '10px 20px',
          backgroundColor: '#fff',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          boxShadow: '0 2px 6px rgba(0,0,0,0.1)'
        }}>Open AR Viewer</button>
      </>) : 
      (<>
        <button onClick={() => setShowQRPopup(true)}
         style={{
          position: 'absolute',
          right: '20px',
          bottom: '120px',
          zIndex: 10,
          padding: '10px 20px',
          backgroundColor: '#fff',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          boxShadow: '0 2px 6px rgba(0,0,0,0.1)'
        }}>Show QR Code</button>
        {showQRPopup && (
            <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: 10, background: 'white', padding: '20px', borderRadius: '10px' }}>
              <div>AR not supported on your device. Scan this QR code:</div>
              <QRCode value={window.location.href} size={256} level={"H"} includeMargin={true} />
              <button onClick={() => setShowQRPopup(false)}>Close</button>
            </div>
          )}
      </>        
      )}
      <model-viewer
        ref={modelViewerRef}
        src={src}
        ar
        ar-modes="webxr scene-viewer quick-look"
        shadow-intensity ="2"
        style={{  width: '100vw', height: '100vh', display: Arsupported ? 'block': 'block'}}
        camera-controls
        auto-rotate        
      >       
      <button slot="ar-button" style={{display:'none'}}></button>
      </model-viewer>
    </>
  );
};

export default ARViewer;
