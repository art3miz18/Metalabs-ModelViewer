import React,{useState, useRef} from "react";
import ThreeContainer from "../three/ThreeContainer";
import ARViewer from "./ARviewer";

const MetalabsARviewer= (modelPath) =>{
    const [arSupported, setArSupported] = useState(null);
    const modelViewerRef = useRef(null);

    
    return  <ARViewer src={modelPath}/>    
};  

export default MetalabsARviewer