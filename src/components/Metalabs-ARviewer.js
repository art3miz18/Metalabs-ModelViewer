import React,{useState, useRef} from "react";
import ARViewer from "./ARviewer";
// import ImageSlider from "./ImageSlider";

const MetalabsARviewer= (modelURL, clientId, secretKey, s3Url) =>{    
    const [s3URL, setS3url] = useState(null);
    //add logic to handle props
    

    return (
        <div>
            <ARViewer src={modelURL} clientId={clientId} secretKey={secretKey} s3Url={s3Url} />
        </div>
    );     
};  

export default MetalabsARviewer