<script setup>
import { ref, onMounted } from "vue";
import * as THREE from "three";
import { donut, box, plane } from "../3d-stuff/3d-objects";
import { ObjectAnimation } from "../custom-classes/animation";
import { GUI } from "dat.gui";

plane.rotation.x = 1;
plane.scale.y = 4;
plane.scale.x = 2;
plane.position.y = -3;
const canvasWrapper = ref(null);

const scene = new THREE.Scene();
scene.add(box);
scene.add(donut);
scene.add(plane);

const ambientLight = new THREE.AmbientLight(0x4040404, 3);
// scene.add(ambientLight);

const hemisphereLight = new THREE.HemisphereLight(0xfff80, 0x4040ff, 1);
// scene.add(hemisphereLight);

const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
directionalLight.position.set(1, -3, 1);
directionalLight.target.position.set(0, 0, 0);
// scene.add(directionalLight);
// scene.add(directionalLight.target);

const pointLight = new THREE.PointLight(0xffffff, 8);
pointLight.position.set(0, 5, 0);
// scene.add(pointLight);

const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
camera.position.z = 5;

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);
const renderScene = () => {
  renderer.render(scene, camera);
};

const boxAnimation = new ObjectAnimation(box, renderScene, {
  rotateX: 0.01,
  rotateY: 0.03,
  rotateZ: 0,
  positionX: [0.08, 1.5],
  positionY: [0.08, 3],
  positionZ: [0.03, 7],
});

const donutAnimation = new ObjectAnimation(donut, renderScene, {
  rotateX: 0.01,
  rotateY: 0.03,
  rotateZ: 0,
  positionX: [0.08, 1.5],
  positionY: [-0.13, 3],
  positionZ: [0.03, 7],
});

onMounted(() => {
  canvasWrapper.value.appendChild(renderer.domElement);
  // boxAnimation.animate();
  donutAnimation.animate();
});

const gui = new GUI();
// const donutControls = gui.addFolder("Donut");
// donutControls.add(donut.rotation, "x", 0, Math.PI * 2);
// donutControls.add(donut.rotation, "y", 0, Math.PI * 2);
// donutControls.add(donut.rotation, "z", 0, Math.PI * 2);

const pointLightControls = gui.addFolder("P-Light");
pointLightControls.add(pointLight.position, "x", 0, 10);
pointLightControls.add(pointLight.position, "y", 0, 10);
pointLightControls.add(pointLight.position, "z", 0, 10);

const cameraControls = gui.addFolder("Camera");
cameraControls.add(camera.position, "x", -5, 5);
cameraControls.add(camera.position, "y", -5, 5);
cameraControls.add(camera.position, "z", 0, 100);
cameraControls.add(camera.rotation, "x", 0, 1);
cameraControls.add(camera.rotation, "y", 0, 1);
cameraControls.add(camera.rotation, "z", 0, 1);
</script>

<template>
  <div ref="canvasWrapper" id="ThreeCanvas"></div>
</template>

<style scoped>
#ThreeCanvas {
  width: 100%;
  height: 100%;
}
</style>
