import React from "react";
import { useGLTF } from "@react-three/drei";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Target = (props) => {
  const targetRef = useRef();
  const { scene } = useGLTF(
    "https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/target-stand/model.gltf"
  );

  useGSAP(
    () => {
      gsap.to(targetRef.current.position, {
        y: targetRef.current.position.y + 1,
        duration: 1.5,
        repeat: -1,
        yoyo: true,
    });   
  })
  return (
    
      <mesh {...props} ref={targetRef} rotation={[0, Math.PI / 4, 0.05]} scale={2.5} >
        <primitive object={scene} />
      </mesh>
    
  );
};

export default Target;