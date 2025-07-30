import * as THREE from 'three';
// console.log(THREE)

const scene = new THREE.Scene();
const geometry = new THREE.BoxGeometry(2, 2, 2);
const material = new THREE.MeshBasicMaterial({ color: "red" });  

const box = new THREE.Mesh(geometry, material);  // geometry + material ko merge karta hai |box| hauchi one type of object
scene.add(box);  // scene re box ko add karuchi

const size ={
  width: 700,
  height: 500,
}
const camera = new THREE.PerspectiveCamera(75, size.width / size.height);
camera.position.z=4;
camera.position.x=2
scene.add(camera);  // camera ko scene re add karuchi



//rendering
const target = document.querySelector('.webgl')
const renderer = new THREE.WebGLRenderer({canvas: target})
renderer.setSize(size.width, size.height);  // ✅ Add this
renderer.render(scene, camera);     //add director // director do scence and camera