import React, { useRef, Suspense } from 'react';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { Sphere } from '@react-three/drei';
import * as THREE from 'three';

const RotatingSphere = ({ mouseX }) => {
  const earthRef = useRef();
  const cloudsRef = useRef();
  
  // Load textures using useLoader
  const [dayMap, cloudsMap] = useLoader(
    THREE.TextureLoader,
    [
      process.env.PUBLIC_URL + '/textures/earth_daymap.png',
      process.env.PUBLIC_URL + '/textures/earth_clouds.png',
    ],
    undefined,
    (error) => {
      console.error('Error loading textures:', error);
    }
  );

  // Use useFrame to animate the spheres
  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime();
    if (earthRef.current) {
      // Rotate Earth continuously based on time
      earthRef.current.rotation.y = elapsedTime * 0.1; // Adjust speed here
      
      // Rotate additionally based on mouseX movement
      earthRef.current.rotation.y += mouseX.current * Math.PI * 0.5;
      
    }
    
    if (cloudsRef.current) {
      // Offset clouds position slightly above Earth
      cloudsRef.current.position.y = 0.1; // Adjust height to separate from Earth
      
      // Rotate clouds layer independently for effect
      cloudsRef.current.rotation.y = elapsedTime * 0.1;
      
      // Rotate additionally based on mouseX movement
      cloudsRef.current.rotation.y += mouseX.current * Math.PI * 0.5;
    }
  });

  // Check if textures are loaded successfully
  if (!dayMap || !cloudsMap) {
    console.error('One or more textures failed to load.');
    return null;
  }

  // Render the spheres with loaded textures
  return (
    <>
      {/* Earth Sphere */}
      <mesh ref={earthRef}>
        <Sphere args={[2.4, 100, 100]}>
          <meshStandardMaterial
            attach="material"
            map={dayMap}
          />
        </Sphere>
      </mesh>

      {/* Clouds Sphere */}
      <mesh ref={cloudsRef}>
        <Sphere args={[2.50, 100, 100]}>
          <meshStandardMaterial
            attach="material"
            transparent
            alphaMap={cloudsMap}
            opacity={5} // Increase opacity for denser clouds
            depthWrite={false} // Prevents z-fighting issues with the Earth sphere
          />
        </Sphere>
      </mesh>
    </>
  );
};

const Planet = () => {
  const mouseX = useRef(0);

  // Handle mouse movement to rotate the spheres
  const handleMouseMove = (event) => {
    mouseX.current = (event.clientX / window.innerWidth) * 2 - 1;
  };

  // Render the canvas with lights and the rotating spheres
  return (
    <div onMouseMove={handleMouseMove} style={{ height: '100vh', width: '100%' }}>
      <Canvas>
        <ambientLight intensity={1} />
        <directionalLight position={[-2, 5, 2]} intensity={1} />
        <Suspense fallback={null}>
          <RotatingSphere mouseX={mouseX} />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default Planet;
