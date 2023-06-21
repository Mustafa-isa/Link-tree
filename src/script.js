import * as THREE from "three";
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls.js'
console.log(OrbitControls)
const scene = new THREE.Scene();
const cubeTexture = new THREE.CubeTextureLoader()
const canvas = document.querySelector("canvas");
// create map module 
const environmentMap = cubeTexture.load([
  "./static/Standard-Cube-Map(1)/px.png",
  "./static/Standard-Cube-Map(1)/nx.png",
  "./static/Standard-Cube-Map(1)/py.png",
  "./static/Standard-Cube-Map(1)/ny.png",
  "./static/Standard-Cube-Map(1)/pz.png",
  "./static/Standard-Cube-Map(1)/nz.png"
])

scene.environment =environmentMap
scene.background =environmentMap

const sizes = {
  width: window.innerWidth,
  height: window.innerHeight
};
const camera = new THREE.PerspectiveCamera(
  75,
  sizes.width / sizes.height,
  0.1,
  100
);
camera.position.z=20
scene.add(camera)
const constols  = new OrbitControls(camera,canvas)
const rendrere = new THREE.WebGLRenderer({
  canvas
})
rendrere.setSize(sizes.width ,sizes.height)
rendrere.render(scene ,camera)
window.addEventListener('resize', () =>{
  sizes.width = window.innerWidth ,
  sizes.height = window.innerHeight
  camera.aspect = window.innerWidth / innerHeight
  rendrere.setSize(sizes.width ,sizes.height)
  rendrere.setPixelRatio(Math.min(window.devicePixelRatio,2))
  camera.updateProjectionMatrix()
})


const tick =() =>{
  rendrere.render(scene ,camera)

window.requestAnimationFrame(tick)

}
tick()


