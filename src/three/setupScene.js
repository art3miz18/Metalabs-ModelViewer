import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';


let controls;

export const setupScene = () => {
  const scene = new THREE.Scene();
  scene.background = new THREE.Color().setHSL( 0.6, 0, 0.6 );
  
  const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);

  const renderer = new THREE.WebGLRenderer({ antialias: true });  
  renderer.domElement.style.position = 'absolute';
  renderer.domElement.style.zIndex = "1";
  renderer.setSize(window.innerWidth, window.innerHeight);
  controls = new OrbitControls( camera, renderer.domElement );
  setupLights(scene);
 
  return { scene, camera, renderer, controls};
};

const setupLights = (scene) => {
  const ambientLight = new THREE.AmbientLight(0x404040); 
  ambientLight.intensity = 25;
  scene.add(ambientLight);
  
  const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
  directionalLight.position.set(0, 1, 0);
  directionalLight.intensity = 10;
  scene.add(directionalLight);   
};
