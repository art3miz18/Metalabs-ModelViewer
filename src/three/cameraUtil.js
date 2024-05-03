import * as THREE from 'three';

export const adjustCameraToFitObject = (scene, camera, object, controls) => {
    
    const {center, size, boundingBox } = createBoundingBox(object, scene);
    model = object;
    const maxDim = Math.max(size.x, size.y, size.z);
    const fov = camera.fov * (Math.PI / 180); 
    let cameraZ = Math.abs(maxDim / 2 * Math.tan(fov * 2));

    const cameraToCenterDistance = cameraZ * 2;
    cameraZ += center.z;

    
    camera.position.z = cameraZ; 
    const minZ = boundingBox.min.z;
    const cameraToFarEdgeDistance = (minZ < 0) ? -minZ + cameraToCenterDistance : cameraToCenterDistance - minZ;

    camera.far = cameraToFarEdgeDistance * 3;
    camera.near = camera.far / 100;
    camera.updateProjectionMatrix();

    if (controls) {
        controls.target.set(center.x, center.y, center.z);
        controls.update();
    }
    camera.lookAt(center);
};


export const createBoundingBox = (object, scene) => {
    const boundingBox = new THREE.Box3().setFromObject(object);
    const center = boundingBox.getCenter(new THREE.Vector3());
    const size = boundingBox.getSize(new THREE.Vector3());
    
    const boxHelper = new THREE.BoxHelper(object, 0xffff00); 
    boxHelper.layers.set(1);
    scene.add(boxHelper);
    boxHelper.update();
    return {center, size, boundingBox};
};

let model = null;


  