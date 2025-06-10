import * as THREE from "three";

// Configure global Three.js settings
THREE.ColorManagement.enabled = true;

// For texture.colorSpace
export const LINEAR = THREE.LinearSRGBColorSpace;
export const SRGB = THREE.SRGBColorSpace;

// Additional helper for WebGLRenderer
export const initRenderer = (renderer: THREE.WebGLRenderer) => {
  renderer.outputColorSpace = THREE.SRGBColorSpace;
};
