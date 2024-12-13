import React, { Suspense, useState } from "react";
import { myProjects } from "../constants/index";
import {Canvas} from "@react-three/fiber";
import {Center, OrbitControls} from "@react-three/drei";
import DemoComputer from "../components/DemoComputer";
import CanvasLoader from "../components/CanvasLoader";

const projectCount = myProjects.length;
const Projects = () => {
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(0);
  const currentProject = myProjects[selectedProjectIndex];
  const handleNavigation = (direction) => {
    setSelectedProjectIndex((prevIndex) => {
      if (direction === "previous") {
        return prevIndex === 0 ? projectCount - 1 : prevIndex - 1;
      } else {
        return prevIndex === projectCount - 1 ? 0 : prevIndex + 1;
      }
    });
  };
  return (
    <section className="c-space my-20">
      <p className="head-text">My Projects</p>
      <div className="grid lg:grid-cols-2 grid-cols-1 mt-12 gap-5 w-full">
        <div className="flex flex-col gap-5 relative sm:p-10 py-10 px-5 shadow-2xl shadow-black-200 bg-black-200">
          <div className="absolute top-0 right-0">
            <img
              src={currentProject.spotlight}
              alt="spotlight"
              className="w-full h-96 object-cove rounded-xl"
            />
          </div>
          <div
            className=" backdrop-filter backdrop-blur-sm-3xl w-fit rounded-lg"
            style={myProjects[0].logoStyle}
          >
            <img
              src={currentProject.logo}
              alt="logo"
              className="w-10 h-10 shadow-sm object-cover"
            />
          </div>

          <div className="flex flex-col gap-5 text-white-600 my-5">
            <p className="text-white text-2xl font-semibold animatedText ">
              {currentProject.title}
            </p>
            <p className="animatedText">{currentProject.desc}</p>
            <p className="animatedText">{currentProject.subdesc}</p>
          </div>
          <div className=" mt-7flex items-center justify-between flex-wrap gap-5">
            <div className="flex items-center gap-3">
              {currentProject.tags.map((tag, index) => (
                <div key={index} className="tech-logo">
                  <img src={tag.path} alt={tag.name} />{" "}
                </div>
              ))}
            </div>
            <div className="flex justify-between items-center mt-7">
              <button
                className="arrow-button"
                onClick={() => handleNavigation("previous")}
              >
                <img
                  src="assets/left-arrow.png"
                  alt="left arrow"
                  className="w-4 h-4"
                />
              </button>

              <button
                className="arrow-button"
                onClick={() => handleNavigation("next")}
              >
                <img
                  src="assets/right-arrow.png"
                  alt="right arrow"
                  className="w-4 h-4"
                />
              </button>
            </div>
          </div>
        </div>
        <div className="border-none bg-black-200 rounded-lg h-96 md:h-full">
        <Canvas  >
              <ambientLight intensity={1} />
              <directionalLight position={[10, 10, 5]}  intensity={1}/>
              <Center>
                  <Suspense fallback={<CanvasLoader />}>
                  <group scale={3.5} position={[0, -3, 0]} rotation={[0, -0.1, 0]}>
                  <DemoComputer 
                  texture={currentProject.texture}
                  position={[0,1,0]}
                  
                  />

                  </group>

                  </Suspense>
              </Center>
              <OrbitControls maxPolarAngle={Math.PI/2} enableZoom={false}/>

        </Canvas>
        </div>
      </div>
    </section>
  );
};

export default Projects;
