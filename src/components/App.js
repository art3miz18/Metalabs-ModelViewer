import '../App.css';
// import ThreeContainer  from '../three/ThreeContainer'
import MetalabsARviewer from './Metalabs-ARviewer';
function App() {
  // const modelfile = "https://meta-3d-new.s3.ap-south-1.amazonaws.com/3dModel.glb";
  // const modelfile = "http://192.168.0.124:3001/uploads/modelFile-1711522835230-619341671.glb"; //supra
  //const modelfile = "http://192.168.0.124:3001/uploads/modelFile-1712394564440-436215008.glb"; //supra
  const modelfile = "https://metainvincible.s3.amazonaws.com/meta/AR-cars/demo/Webgl/1715239468771/tata_punch.glb"; //supra
  return (
      <MetalabsARviewer modelPath ={modelfile}/>    
  );
}

export default App;
