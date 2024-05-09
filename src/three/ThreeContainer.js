import React, { useEffect, useRef , useState} from 'react';
import { setupScene } from './setupScene';
import { loadModel } from './loadModel';
import { fetchModel } from '../services/fetchData'


const ThreeContainer = ({ modelUrl }) => {
    const mountRef = useRef(null);
    const [threeObjects, setThreeObjects] = useState({ scene: null, camera: null, renderer: null, controls: null });
    const [initialized, setInitialized] = useState(false);
    
    
    useEffect(() => {
        if(modelUrl){
            
            const { scene, camera, renderer ,controls} = setupScene();
        
            setThreeObjects({ scene, camera, renderer, controls });
            console.log("Model File path", modelUrl);
            mountRef.current.appendChild(renderer.domElement);
            if (modelUrl) {    
                loadModel(scene, modelUrl, camera,  controls, (onModelLoaded)=>{
                    
                    // console.log('model loaded!', onModelLoaded);            
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
        }
    }, []);

    

 
  return <div ref={mountRef} style={{ width: '100vw', height: '100vh' }}>
    {/* { initialized && (
        <>
           
        </>
      )} */}
  </div>;
}

export default ThreeContainer;