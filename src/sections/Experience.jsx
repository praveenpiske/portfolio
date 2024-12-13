import React from 'react'
import { workExperiences } from '../constants'
import Wireglobe from '../components/Wireglobe'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { Suspense } from 'react'
import CanvasLoader from '../components/CanvasLoader'
import { Center } from '@react-three/drei'

const Experience = () => {
  return (
    <section className='c-space my-20' id="work">
        <div className='w-full text-white-600'>
            <h3 className='head-text'> My Work Experience</h3>
            <div className='work-container'>
                <div className='work-canvas'>
                    <Canvas>
                    <ambientLight intensity={1} />
              <directionalLight position={[10, 10, 5]}  intensity={1}/>
              <Center>
                  <Suspense fallback={<CanvasLoader />}>
                  <group scale={1} position={[0, -3, 0]} rotation={[0, -0.1, 0]}>
                  <Wireglobe
                  position={[0,1,0]}
                  
                  />

                  </group>

                  </Suspense>
              </Center>
              <OrbitControls maxPolarAngle={Math.PI/2} enableZoom={false}/>
                    </Canvas>
                </div>
                <div className='work-content'>
                    <div className='sm:py-10 py-5 sm:px-5 px-2.5'>
                        {workExperiences.map(({id, name,  pos, icon, duration, title,animation},index)=>(
                            <div key={id} className='work-content_container group'>
                                <div className='flex flex-col h-full justify-start items-center py-2'>
                                    <div className='work-content_logo '>
                                        <img src={icon} alt="logo" className='w-full h-full rounded-xl' />
                                    </div>
                                <div className='work-content_bar'/>
                                </div>
                                <div className='sm:p-5 px-2.5 py-5'>
                                    <p className='font-bold text-white-800'>{name} </p>
                                    <p className='text-sm mb-5'> Intern <br /> {pos} -- {duration}</p>
                                    <p className='group-hover::text-white transition ease-in-out duration-500'>{title}</p>
                                </div>

                            </div>

                        ))}
                    </div>
                </div>
            </div>
        </div>
      
    </section>
  )
}

export default Experience
