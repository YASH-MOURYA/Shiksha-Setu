// src/Components/ThreeAnimation.jsx
import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

const ThreeAnimation = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    mountRef.current.appendChild(renderer.domElement);

    // Orbit Controls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;

    // Spheres
    const sphereGeometry = new THREE.SphereGeometry(0.5, 32, 32);
    const colors = [0xff0051, 0x00ffea, 0xffe600, 0x00ff00, 0x0055ff];
    const spheres = [];

    for (let i = 0; i < 5; i++) {
      const material = new THREE.MeshStandardMaterial({
        color: colors[i],
        roughness: 0.3,
        metalness: 0.7,
        emissive: colors[i],
        emissiveIntensity: 0.5,
      });
      const sphere = new THREE.Mesh(sphereGeometry, material);
      sphere.position.set(Math.random() * 6 - 3, Math.random() * 4 - 2, Math.random() * 6 - 3);
      scene.add(sphere);
      spheres.push(sphere);
    }

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0xffffff, 1);
    pointLight.position.set(10, 10, 10);
    scene.add(pointLight);

    camera.position.z = 8;

    // Animate
    const animate = () => {
      requestAnimationFrame(animate);
      spheres.forEach((sphere, idx) => {
        sphere.rotation.x += 0.005 + idx * 0.001;
        sphere.rotation.y += 0.01 + idx * 0.001;
        sphere.position.y += Math.sin(Date.now() * 0.001 + idx) * 0.002;
      });
      controls.update();
      renderer.render(scene, camera);
    };

    animate();

    // Handle resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      mountRef.current.removeChild(renderer.domElement);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return <div ref={mountRef} style={{ width: "100%", height: "100vh" }} />;
};

export default ThreeAnimation;
