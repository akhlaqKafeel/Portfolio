"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

/** Subtle ambient orb lighting for the hero — Three.js, lightweight. */
export function AmbientLight() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const width = mount.clientWidth;
    const height = mount.clientHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.z = 4.2;

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: "high-performance",
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    renderer.setSize(width, height);
    renderer.setClearColor(0x000000, 0);
    mount.appendChild(renderer.domElement);

    const geometry = new THREE.SphereGeometry(1.1, 48, 48);
    const material = new THREE.MeshBasicMaterial({
      color: new THREE.Color("#C9A227"),
      transparent: true,
      opacity: 0.12,
    });
    const sphere = new THREE.Mesh(geometry, material);
    sphere.position.set(1.2, 0.2, -1);
    scene.add(sphere);

    const soft = new THREE.Mesh(
      new THREE.SphereGeometry(1.8, 32, 32),
      new THREE.MeshBasicMaterial({
        color: new THREE.Color("#8C734A"),
        transparent: true,
        opacity: 0.08,
      })
    );
    soft.position.set(-1.4, -0.4, -2);
    scene.add(soft);

    let frame = 0;
    const start = performance.now();

    const animate = () => {
      frame = requestAnimationFrame(animate);
      if (!prefersReduced) {
        const t = (performance.now() - start) * 0.00035;
        sphere.position.x = 1.2 + Math.sin(t) * 0.35;
        sphere.position.y = 0.2 + Math.cos(t * 0.8) * 0.25;
        soft.position.x = -1.4 + Math.cos(t * 0.6) * 0.3;
      }
      renderer.render(scene, camera);
    };
    animate();

    const onResize = () => {
      if (!mount) return;
      const w = mount.clientWidth;
      const h = mount.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", onResize);
      geometry.dispose();
      material.dispose();
      soft.geometry.dispose();
      (soft.material as THREE.Material).dispose();
      renderer.dispose();
      if (renderer.domElement.parentNode === mount) {
        mount.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="pointer-events-none absolute inset-0 -z-10 opacity-80"
      aria-hidden
    />
  );
}
