import * as THREE from "three";

const planeGeometry = new THREE.PlaneGeometry(1, 1);
const planeMaterial = new THREE.MeshBasicMaterial({
  color: 0xffff00,
  side: THREE.DoubleSide,
});
const plane = new THREE.Mesh(planeGeometry, planeMaterial);

const donutGeometry = new THREE.TorusGeometry(1, 0.3, 16, 100);
const donutMaterial = new THREE.MeshBasicMaterial({ color: 0x8e44ad });
const donut = new THREE.Mesh(donutGeometry, donutMaterial);

const boxGeometry = new THREE.BoxGeometry(1, 1, 1);
const boxMaterial = new THREE.MeshBasicMaterial({
  color: 0x8e44ad,
  transparent: true,
  opacity: 0.4,
  reflectivity: 0.5,
  wireframe: true,
});
const box = new THREE.Mesh(boxGeometry, boxMaterial);

export { donut, box, plane };
