import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { PerspectiveCamera } from "@react-three/drei";
import HackerRoom from "../components/HackerRoom";
import CanvasLoader from "../components/CanvasLoader";
import { useMediaQuery } from "react-responsive";
import { calculateSizes } from "../constants/index";
import Target  from "../components/Target";
import ReactLogo  from "../components/ReactLogo";
import Cube  from "../components/Cube";
import Rings from "../components/Rings";
import HeroCamera from "../components/HeroCamera";
import Button from "../components/Button";



const Hero = () => {
  const isSmall = useMediaQuery({ query: "(max-width: 3500px)" });
  const isMobile = useMediaQuery({ query: "(max-width: 400px)" });
  const isTablet = useMediaQuery({ query: "(max-width: 1024px)" });

  const sizes = calculateSizes(isSmall, isMobile, isTablet);
  console.log(sizes.reactLogoPosition);
  return (
    <section className="min-h-screen w-full flex flex-col relative">
      <div className="w-full mx-auto flex flex-col sm:mt-20 mt-20 c-space gap-3">
        <p className="sm:text-3xl text-2xl font-medium text-white text-center font-generalsans">
          Hi I am Praveen <span className="waving-hand">👋</span>
        </p>
        <p className="hero_tag text-gray_gradient text-center">a React.js developer</p>
      </div>
      <div className="w-full h-full absolute inset-0">
        <Canvas className="w-full h-full">
          <Suspense fallback={<CanvasLoader />}>
            <PerspectiveCamera makeDefault position={[0, 0, 30]} />

            <HeroCamera isMobile={isMobile}>
            <HackerRoom position={sizes.deskPosition} rotation={[0.1, 0, 0]} scale={sizes.deskScale} />
            </HeroCamera>

            {/* Ambient Light for general illumination */}
            <ambientLight intensity={4} />

            {/* Directional Light scoped away from Target */}
            

            {/* Target without Directional Light */}
            <group>
              <Target position={sizes.targetPosition} />
              <ReactLogo position={sizes.reactLogoPosition} />
              <Cube position={sizes.cubePosition}/>
              <Rings position={sizes.ringPosition} />
            </group>
          </Suspense>
        </Canvas>
      </div>
      <div className="absolute bottom-7 left-0 right-0 w-full z-10 c-space">
        <a href="#about" className="w-fit">
          <Button name="Let's work together" isBean={true} containerClass="sm-w-fit w-full sm:min-w-96" />
        </a>
      </div>
    </section>
  );
};

export default Hero;