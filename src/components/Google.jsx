import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import cubeImage from '/google.png';

export default function RotatingCube() {
  const mountRef = useRef(null);
  const isInitialized = useRef(false);
  const animationId = useRef(null);

  useEffect(() => {
    if (!mountRef.current || isInitialized.current) return;
    isInitialized.current = true;

    const getHeight = () => Math.min(window.innerHeight * 0.5, 400);
    const width = mountRef.current.clientWidth;
    const height = getHeight();

    document.title = 'Google Workspace'

    // Scene
    const scene = new THREE.Scene();

    // Camera
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    camera.position.z = 5;

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    mountRef.current.appendChild(renderer.domElement);

    // Texture
    const textureLoader = new THREE.TextureLoader();
    const texture = textureLoader.load(cubeImage);

    // Cube
    const geometry = new THREE.BoxGeometry(2.5, 2.5, 2.5);
    const material = new THREE.MeshStandardMaterial({
      map: texture,
      metalness: 0.3,
      roughness: 0.4,
    });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    // Lights
    scene.add(new THREE.AmbientLight(0xffffff, 0.6));
    const light = new THREE.DirectionalLight(0xffffff, 0.8);
    light.position.set(5, 5, 5);
    scene.add(light);

    // Animation
    const clock = new THREE.Clock();
    const animate = () => {
      animationId.current = requestAnimationFrame(animate);
      const t = clock.getElapsedTime();
      cube.rotation.x = t * 0.6;
      cube.rotation.y = t * 0.8;
      renderer.render(scene, camera);
    };
    animate();

    // Handle resize
    const handleResize = () => {
      if (!mountRef.current) return;
      const w = mountRef.current.clientWidth;
      const h = getHeight();
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      cancelAnimationFrame(animationId.current);
      window.removeEventListener('resize', handleResize);
      if (mountRef.current.contains(renderer.domElement)) {
        mountRef.current.removeChild(renderer.domElement);
      }
      geometry.dispose();
      material.dispose();
      texture.dispose();
      renderer.dispose();
      isInitialized.current = false;
    };
  }, []);

  return (

    <div className="min-h-screen bg-black">
      <div className="w-full flex justify-center items-start h-64 sm:h-80 md:h-96 mb-20">
        <div ref={mountRef} className="w-full max-w-4xl h-full" />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 sm:pb-16 md:pb-20">
        <div className="text-center space-y-6 sm:space-y-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#4285F4] leading-tight">
            Google Workspace
          </h1>
          <p className="text-base sm:text-2xl md:text-2xl text-white leading-relaxed max-w-4xl mx-auto">
            Google Workspace is a suite of cloud-based productivity and collaboration tools, including Gmail, Docs, Drive, Calendar, and Meet, designed to help teams work smarter together.
          </p>
          <a
          href="https://workspace.google.com/"
          rel="noopener noreferrer"
          className="
            inline-flex items-center justify-center
            px-8 py-4 mt-4
            text-lg font-bold
            text-black
            rounded-full
            transition duration-300
            shadow-lg
            hover:opacity-90
          "
           style={{
                background: "linear-gradient(90deg, #4285F4, #DB4437, #F4B400, #0F9D58)"
            }}
            > 
          Visit Google Workspace
        </a>
        </div>
        {/* Videos */}
        {/* Wrapper */}
        <div className="w-full flex justify-center mt-10">

          <div className="grid grid-cols-1 md:grid-cols-2
                  w-full
                  mx-auto mt-16 gap-10">

            {/* Video 1 */}
            <div className="w-full">
              <div className="relative aspect-video overflow-hidden rounded-2xl border-2 border-gray-200 shadow-xl">
                <iframe
                  className="absolute inset-0 w-full h-full"
                  src="https://www.youtube.com/embed/WE3GdR1ULOE?si=05ejGQYboZ217XJU"
                  title="Video 1"
                  frameBorder="0"
                  allowFullScreen
                />
              </div>
            </div>

            {/* Video 2 */}
            <div className="w-full">
              <div className="relative aspect-video overflow-hidden rounded-2xl border-2 border-gray-200 shadow-xl">
                <iframe
                  className="absolute inset-0 w-full h-full"
                  src="https://www.youtube.com/embed/1xKPtNy1PjM?si=vtop3dT2iop0UwvI"
                  title="Video 2"
                  frameBorder="0"
                  allowFullScreen
                />
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}
