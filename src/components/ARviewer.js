import React, { useState,useRef, useEffect } from 'react';
// import '@google/model-viewer';

const ARViewer = ({ src }) => {
  const modelViewerRef = useRef(null);
    const [Arsupported,setARsupported]= useState(null);
    
    const modelUrl ="http://192.168.0.124:3001/uploads/modelFile-1711522835230-619341671.glb";


  useEffect(() => {
    const modelViewer = modelViewerRef.current;

    if (modelViewer) {
        const openAR = async () => {
            console.log('Model Viewer block',src);
          if (await modelViewer.canActivateAR) {
            console.log('can activate AR');
            modelViewer.activateAR();
          } else {
            console.log('AR not supported');
            // Fallback to 3D viewer
          }
        };
    
        openAR();
    }
  }, [src]);

  return (
    // <div>AR supporteds</div>


    <model-viewer
      ref={modelViewerRef}
      src={modelUrl}
      ar
      ar-modes="webxr scene-viewer quick-look"
      style={{  display :'none'}}
      camera-controls
      auto-rotate
    ></model-viewer>
  );
};

export default ARViewer;
