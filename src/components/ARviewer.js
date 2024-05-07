import React, { useState,useRef, useEffect } from 'react';
import ThreeContainer from "../three/ThreeContainer";
// import '@google/model-viewer';

const ARViewer = ({ src }) => {
  const modelViewerRef = useRef(null);
    const [Arsupported,setARsupported]= useState(null);
    
    const modelUrl ="https://meta-3d-new.s3.ap-south-1.amazonaws.com/3dModel.glb";


  useEffect(() => {
    const modelViewer = modelViewerRef.current;

    // if (modelViewer) {
    //     const openAR = async () => {
    //         console.log('Model Viewer block',src);
    //       if (await modelViewer.canActivateAR) {
    //         console.log('can activate AR');
    //         modelViewer.activateAR();
    //         setARsupported(modelViewer.canActivateAR);
    //       } else {
    //         console.log('AR not supported');
    //         setARsupported(false);
    //         // Fallback to 3D viewer
    //       }
    //     };
    
    //     openAR();
    // }

    if(!modelViewer) {
      return;
    }

    const initAR = async () => {
      if(await modelViewer.canActivateAR) {
        console.log('Activating AR');
        modelViewer.activateAR();
        setARsupported(modelViewer.canActivateAR);
      }
      else {
        console.log('AR not supported on device');
        setARsupported(false);
      }
    };

    initAR()
  }, [src]);

  return (
    <>
      <div>AR supported {Arsupported ? 'yes' : 'no'}</div>
      <model-viewer
        ref={modelViewerRef}
        src={modelUrl}
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
