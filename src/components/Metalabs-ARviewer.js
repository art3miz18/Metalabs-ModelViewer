import React,{useState, useEffect} from "react";
import ThreeContainer from "../three/ThreeContainer";
import ARViewer from "./ARviewer";

const MetalabsARviewer= (modelPath) =>{
    const [arSupported, setArSupported] = useState(null);

    useEffect(()=>{
        const checkARSupport = async() => {
            const viewer = document.createElement('model-viewer');
            if(viewer){
                setArSupported(await viewer.canActivateAR);
                console.log('AR support: ',arSupported);
            }
        }
        checkARSupport();
    },[arSupported]);

    if(arSupported === null){
        return <div>Maybe AR not supported</div>
    }
    // return <ThreeContainer modelURL= {modelPath}/>
    return arSupported ? <ARViewer src={modelPath}/> : <ThreeContainer modelURL= {modelPath}/>
    // return  <ARViewer src={modelPath}/>
    
};

export default MetalabsARviewer