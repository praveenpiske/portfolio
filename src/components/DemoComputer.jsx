import React, { useRef, useEffect } from 'react';
import { useGLTF, useVideoTexture } from '@react-three/drei';
import { gsap } from 'gsap';

const DemoComputer = (props) => {
  const group = useRef();
  const { nodes, materials } = useGLTF('/models/retro_computer.glb');
  const txt = useVideoTexture(props.texture ? props.texture : '/textures/project/project1.mp4');

  useEffect(() => {
    if (group.current) {
      gsap.from(group.current.rotation, {
        x: 0,
        y: Math.PI / 2,
        z: 0,
        duration: 1,
        ease: 'power3.out',
      });
    }
  }, [txt]);

  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={0.556}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial.geometry}
            material={materials.computer}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial_1.geometry}
          >
            <meshBasicMaterial map={txt} />
          </mesh>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial_2.geometry}
            material={materials.computer}
          />
        </group>
      </group>
    </group>
  );
};

useGLTF.preload('/models/retro_computer.glb');

export default DemoComputer;
