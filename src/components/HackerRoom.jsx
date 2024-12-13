import React from 'react';
import { useGLTF, useTexture } from '@react-three/drei';
import { MeshBasicMaterial, Vector2 } from 'three';

const HackerRoom = (props) => {
  // Load the GLTF model
  const { nodes, materials } = useGLTF('/models/old_computer.glb');

  // Load the screen texture
  const screenTexture = useTexture('/textures/desk/screen.png');

  // Adjust texture scaling
  screenTexture.center = new Vector2(0.5, 0.5); // Center the texture
  screenTexture.repeat.set(1, screenTexture.image.height / screenTexture.image.width); // Adjust aspect ratio

  // Create a material with the corrected texture
  const screenMaterial = new MeshBasicMaterial({ map: screenTexture });

  return (
    <group {...props} dispose={null}>
      <group scale={0.01}>
        <group position={[0, 5, 175]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube003_Keyboard_0.geometry}
            material={materials.Keyboard}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube003_Mouse_0.geometry}
            material={materials.Mouse}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube003_Tower_0.geometry}
            material={materials.Tower}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube003_Monitor_0.geometry}
            material={materials.Monitor}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube003_Screen_0.geometry}
            material={screenMaterial} // Use the updated material
          />
        </group>
      </group>
    </group>
  );
};

// Preload the GLTF model
useGLTF.preload('/models/old_computer.glb');

export default HackerRoom;
