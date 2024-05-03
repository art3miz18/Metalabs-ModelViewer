import React, { useEffect, useRef , useState} from 'react';
import { setupScene } from './setupScene';
import { loadModel } from './loadModel';
import { fetchModel } from '../services/fetchData'


const ThreeContainer = ({ modelUrl1 }) => {
    const mountRef = useRef(null);
    const [threeObjects, setThreeObjects] = useState({ scene: null, camera: null, renderer: null, controls: null });
    const [initialized, setInitialized] = useState(false);
    // const modelUrl ="https://meta-3d-new.s3.ap-south-1.amazonaws.com/3dModel.glb";
    const modelUrl ="http://192.168.0.124:3001/uploads/modelFile-1711522835230-619341671.glb";
    
    useEffect(() => {
        
        const { scene, camera, renderer ,controls} = setupScene();
    
        setThreeObjects({ scene, camera, renderer, controls });
        console.log("Model File path", modelUrl);
        mountRef.current.appendChild(renderer.domElement);
        if (modelUrl) {    
            loadModel(scene, modelUrl, camera,  controls, (onModelLoaded)=>{
                // interactionHandlerRef.current = new InteractionHandler(scene,
                //                                                         camera, 
                //                                                         renderer, 
                //                                                         onModelLoaded, 
                //                                                         handlePointClick,
                //                                                         historyManager,
                //                                                         UpdateUndoRedoAvailability,
                //                                                         setAnnotations);
                                                                        
                //   getAnnotationData(productId, interactionHandlerRef.current);
                console.log('model loaded!', onModelLoaded);            
                                                          });
                        }
        setInitialized(true);

        //render loop
        const animate = () => {
        requestAnimationFrame(animate);
        renderer.render(scene, camera);
        };
        animate(); 

        const onWindowResize = () => {
        const width = mountRef.current.clientWidth;
        const height = mountRef.current.clientHeight;

        renderer.setSize(width, height);

        camera.aspect = width / height;
        camera.updateProjectionMatrix();

        controls.update();
        };


        window.addEventListener('resize', onWindowResize, false);

        // Cleanup function to remove the renderer from the DOM and clear event listeners
    return () => {   
            if(mountRef.current){
                mountRef.current.removeChild(renderer.domElement);
            }        
        };
    }, []);

    

 
  return <div ref={mountRef} style={{ width: '100vw', height: '100vh' }}>
    {/* { initialized && (
        <>
           
        </>
      )} */}
  </div>;
}

export default ThreeContainer;