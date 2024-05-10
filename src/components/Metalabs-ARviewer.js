import React,{useState, useRef} from "react";
import ThreeContainer from "../three/ThreeContainer";
import ARViewer from "./ARviewer";
import ImageSlider from "./ImageSlider";

const MetalabsARviewer= (modelURL) =>{    
    
    const imageItems = [
        {
            imgSrc: 'https://metainvincible.s3.amazonaws.com/meta/AR-cars/demo/Webgl/1715239619059/tataPunch.png',
            actionUrl: 'https://metainvincible.s3.amazonaws.com/meta/AR-cars/demo/Webgl/1715239468771/tata_punch.glb',
        },
        {
            imgSrc: 'https://metainvincible.s3.amazonaws.com/meta/AR-cars/demo/Webgl/1715240945338/maruti-suzuki-xl6.png',
            actionUrl: 'https://metainvincible.s3.amazonaws.com/meta/AR-cars/demo/Webgl/1715240788307/maruti_suzuki_xl6.glb',
        },
        {
            actionUrl: 'https://metainvincible.s3.amazonaws.com/meta/AR-cars/demo/Webgl/1715240984954/suzuki_ertiga.glb',
            imgSrc: 'https://metainvincible.s3.amazonaws.com/meta/AR-cars/demo/Webgl/1715241080818/suzuki_ertiga.png'
        },
        {
            imgSrc: 'https://metainvincible.s3.amazonaws.com/meta/AR-cars/demo/Webgl/1715241180042/mahindra_scorpio.png',
            actionUrl: 'https://metainvincible.s3.amazonaws.com/meta/AR-cars/demo/Webgl/1715241235634/mahindra_scorpio.glb',
        },
        {
            imgSrc: 'https://metainvincible.s3.amazonaws.com/meta/AR-cars/demo/Webgl/1715241371074/suzuki_ciaz.png',
            actionUrl: 'https://metainvincible.s3.amazonaws.com/meta/AR-cars/demo/Webgl/1715241289785/suzuki_ciaz.glb',
        }
        // Add more objects as needed
    ];

    const hdri =[
        'https://metainvincible.s3.amazonaws.com/meta/AR-cars/demo/hdr/Webgl/1715320263226/empty_warehouse_01_1k.hdr',
        'https://metainvincible.s3.amazonaws.com/meta/AR-cars/demo/hdr/Webgl/1715320331617/parking_garage_1k.hdr',
        'https://metainvincible.s3.amazonaws.com/meta/AR-cars/demo/hdr/Webgl/1715320356071/rotes_rathaus_1k.hdr',
        'https://metainvincible.s3.amazonaws.com/meta/AR-cars/demo/hdr/Webgl/1715320405079/tief_etz_1k.hdr',
        'https://metainvincible.s3.amazonaws.com/meta/AR-cars/demo/hdr/Webgl/1715320442151/ulmer_muenster_1k.hdr'
    ];

    const [modelPath, setModelPath] = useState(imageItems[0].actionUrl);
    
      const handleItemSelect = (actionUrl) => {
        console.log("Selected action URL:", actionUrl);
        setModelPath(actionUrl);
        // You can update another component or state here based on the action URL
      };

    return (
        <div>
            <ARViewer src={modelPath} />
            <ImageSlider images={imageItems} onImageSelect={handleItemSelect}/>
        </div>
    );     
};  

export default MetalabsARviewer