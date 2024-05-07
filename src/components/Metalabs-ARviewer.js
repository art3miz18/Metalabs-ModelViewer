import React,{useState, useEffect ,useRef} from "react";
import ThreeContainer from "../three/ThreeContainer";
import ARViewer from "./ARviewer";

const MetalabsARviewer= (modelPath) =>{
    const [arSupported, setArSupported] = useState(null);
    const modelViewerRef = useRef(null);

    useEffect(()=>{
        // const checkARSupport = async() => {            
        //     if(!modelViewerRef.current){
        //         const viewer = document.createElement('model-viewer');
        //         modelViewerRef.current = viewer;
        //         document.body.appendChild(viewer);
        //         // viewer.setAttribute('ar');
        //         // viewer.setAttribute('ar-modes', 'webxr scene-viewer quick-look');

        //         viewer.addEventListener("load", async () => {
        //             console.log("model-viewer can activate AR: " + viewer.canActivateAR);
        //             // if(viewer.canActivateAR) console.log('can activate AR mod');
        //             const arSupport = await modelViewerRef.current.canActivateAR;
        //             setArSupported(arSupport);
        //             console.log('AR support: ', arSupported);
        //           });
        //             // viewer.setAttribute('src', 'http://192.168.0.124:3001/uploads/modelFile-1712394564440-436215008.glb'); //{modelPath}
        //           console.log('src', modelPath);
        //     }
            
        // };
        // checkARSupport();
        // return () => {
        //     if (modelViewerRef.current && modelViewerRef.current.parentNode) {
        //         // Ensure the element is still in the DOM
        //         document.body.removeChild(modelViewerRef.current);
        //         modelViewerRef.current = null; // Clear the ref
        //     }
        // };
    },[]);
    
    // return <div>AR Supported: {arSupported ? 'Yes' : 'No'}</div> //check for AR support 
    // return <ThreeContainer modelURL= {modelPath}/>
    // return arSupported ? <ARViewer src={modelPath}/> : <ThreeContainer modelURL= {modelPath}/>
    return  <ARViewer src={modelPath}/>
    
};  

export default MetalabsARviewer