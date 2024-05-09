import React, { useState,useRef, useEffect } from 'react';
import ThreeContainer from "../three/ThreeContainer";
import QRCode from 'qrcode.react';
// import '@google/model-viewer';

const ARViewer = ({ src }) => {
  const modelViewerRef = useRef(null);
    const [Arsupported,setARsupported]= useState(false);
    
    

  useEffect(() => {
    const modelViewer = modelViewerRef.current;    

    if(!modelViewer) {
      return;
    }

    const initAR = async () => {
      console.log('src', src.modelPath);
      if(await modelViewer.canActivateAR) {
        console.log('Activating AR');
        modelViewer.activateAR();
        setARsupported(modelViewer.canActivateAR);
      }
      else {
        console.log('AR not supported on device');
        setARsupported(false);
      }
      return () => {
          if (modelViewerRef.current && modelViewerRef.current.parentNode && !Arsupported) {
              // Ensure the element is still in the DOM
              document.body.removeChild(modelViewerRef.current);
              modelViewerRef.current = null; // Clear the ref
              console.log('removing modelViewer Ref');
          }
          else {
            console.log('not yet received modelViewer Ref');
          }
      };
    };

    initAR()

    // setARsupported(checkARSupport());
  }, [src]);

  return (
    <>
      {Arsupported === null && <div>Checking for AR support...</div>}
      {Arsupported ? 
      (<div>AR is supported on your device. Opening AR module</div>) : 
      (
        <div style= {{position :'relative'}}>
          <div>AR not supported on your device. Scan this QR code:</div>
          <QRCode value={window.location.href} size={512} level={"H"} includeMargin={true} />
          <ThreeContainer modelUrl={src.modelPath} />
        </div>
      )}
      <model-viewer
        ref={modelViewerRef}
        src={src.modelPath}
        ar
        ar-modes="webxr scene-viewer quick-look"
        style={{  width: '100%', height: '100%', display: 'block'}}
        camera-controls
        auto-rotate
      ></model-viewer>
    </>
  );
};

export default ARViewer;
