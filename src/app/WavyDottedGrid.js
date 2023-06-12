"use client";
import { useRef, useEffect } from 'react';
import * as THREE from 'three';

const WavyDottedGrid = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    // Create the scene
    const scene = new THREE.Scene();

    // Create the camera
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.set(0, 0, 5); // Adjust camera position (X, Y, Z)
    camera.lookAt(0, 0, 20); // Adjust the point at which the camera is looking

    // Create the renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0xF2F1EF); // Set white background color
    containerRef.current.appendChild(renderer.domElement);

    // Create the material for the dots
    const material = new THREE.PointsMaterial({ color: 0x777777, size: 0.1 });

    // Create the geometry for the dots
    const geometry = new THREE.BufferGeometry();

    const positions = [];
    const count = 20; // Number of dots per row/column
    const spacing = 1; // Spacing between dots
    const size = count * spacing;

    const clock = new THREE.Clock();

    // Function to update dot positions on each frame
    const updateDotPositions = () => {
      const time = clock.getElapsedTime();

      for (let i = -size / 2; i <= size / 2; i += spacing) {
        for (let j = -size / 2; j <= size / 2; j += spacing) {
          const x = i;
          const y = Math.sin((i + time) * 0.5) + Math.sin((j + time) * 0.5);
          const z = j;
          positions.push(x, y, z);
        }
      }

      geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
    };

    // Handle mouse movement
    const handleMouseMove = (event) => {
      const { clientX, clientY } = event;

      // Calculate the normalized mouse position (-1 to 1)
      const mouseX = (clientX / window.innerWidth) * 2 - 1;
      const mouseY = (clientY / window.innerHeight) * 2 - 1;

      // Adjust camera rotation based on mouse movement
      camera.rotation.x = 0 + (mouseY * 0.2);
      camera.rotation.y = 10 + (mouseX * 0.4);

    };

    function onWindowResize(){

      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
  
      renderer.setSize( window.innerWidth, window.innerHeight );
  
  }


    // Add event listener for mouse movement
    window.addEventListener('mousemove', handleMouseMove);

    // add event listener for reziging the window
    window.addEventListener( 'resize', onWindowResize, false );
    

    // Create the dots
    const dots = new THREE.Points(geometry, material);
    scene.add(dots);

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);

      updateDotPositions();
      positions.length = 0; // Clear the positions array for the next frame

      renderer.render(scene, camera);
    };

    animate();

    // Clean up
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener( 'resize', onWindowResize, false );
      containerRef.current.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={containerRef} className='fixed top-0 left-0 w-full h-full -z-1'></div>;
};

export default WavyDottedGrid;
