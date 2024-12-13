import { useFrame } from '@react-three/fiber';
import React, { useRef } from 'react';
import { easing } from 'maath';

const HeroCamera = ({ children, isMobile }) => {
  const groupRef = useRef();

  useFrame((state, delta) => {
    // Smoothly adjust camera position
    easing.damp3(state.camera.position, [0, 0, 30], 0.25, delta);

    // Add interactive rotation if not on mobile
    if (!isMobile && groupRef.current) {
      easing.dampE(
        groupRef.current.rotation,
        [-state.pointer.y / 3, -state.pointer.x / 5, 0],
        0.25,
        delta
      );
    }
  });

  return (
    <group ref={groupRef}>
      {children}
    </group>
  );
};

export default HeroCamera;
