import '../App.css';
// import ThreeContainer  from '../three/ThreeContainer'
import MetalabsARviewer from './Metalabs-ARviewer';
function App() {
  // const modelfile = "https://meta-3d-new.s3.ap-south-1.amazonaws.com/3dModel.glb";
  // const modelfile = "http://192.168.0.124:3001/uploads/modelFile-1711522835230-619341671.glb"; //supra
  const modelfile = "http://192.168.0.124:3001/uploads/modelFile-1712394564440-436215008.glb"; //supra
  return (

    
      <MetalabsARviewer modelPath ={modelfile}/>
      // <ThreeContainer modelURL= "https://meta-3d-new.s3.ap-south-1.amazonaws.com/3dModel.glb"/>
    
  );
}

export default App;
