import '../App.css';
// import ThreeContainer  from '../three/ThreeContainer'
import MetalabsARviewer from './Metalabs-ARviewer';
function App() {
  const modelfile = "https://meta-3d-new.s3.ap-south-1.amazonaws.com/3dModel.glb";
  return (

    
      <MetalabsARviewer modelPath ={modelfile}/>
      // <ThreeContainer modelURL= "https://meta-3d-new.s3.ap-south-1.amazonaws.com/3dModel.glb"/>
    
  );
}

export default App;
