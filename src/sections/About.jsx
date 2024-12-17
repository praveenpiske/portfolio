import { useState } from 'react';
import Globe from 'react-globe.gl';
import Button from '../components/Button.jsx';
import { useEffect } from 'react';


const About = () => {

    const [rotation, setRotation] = useState(0);
  
    useEffect(() => {
      const handleScroll = () => {
        const scrollPosition = window.scrollY;
        setRotation(-scrollPosition * 0.1); // Adjust the factor (0.1) to control rotation speed
      };
  
      window.addEventListener("scroll", handleScroll);
  
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);
  
  const [hasCopied, setHasCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText('piskepraveen@gmail.com');
    setHasCopied(true);

    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
  };

  return (
    <section className="c-space my-20" id="about">
      <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
        {/* Section 1 */}
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img src="assets/grid1.png" alt="grid-1" className="w-full sm:h-[276px] h-fit object-contain" />

            

            <div className='mt-12'> 
              <p className="grid-headtext">Hi, I'm Praveen</p>
              <p className="grid-subtext">
                Crafting seamless user experiences through intuitive design and robust code. Passionate about turning
                ideas into impactful projects.
              </p>
            </div>
          </div>
        </div>

        {/* Section 2 */}
        <div className="col-span-1 xl:row-span-3">
      <div className="grid-container">
        <img
          src="assets/grid2.png"
          alt="grid-2"
          className="m-auto transform scale-125 sm:w-[150px] sm:h-[150px] xl:w-[250px] xl:h-[250px] object-cover "
          style={{
            transform: `rotate(${rotation}deg) scale(1.25)`, // Rotate based on scroll
          }}
        />
        <div>
          <p className="grid-headtext">Tech Stack</p>
          <p className="grid-subtext">
            Proficient in React.js, Three.js, and MongoDB, I build responsive, dynamic web applications tailored to user
            needs.
          </p>
        </div>

      </div>
    </div>

        {/* Section 3 */}
        <div className="col-span-1 xl:row-span-4">
          <div className="grid-container ">
            <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
              <Globe
                height={300}
                width={300}
                backgroundColor="rgba(0, 0, 0, 0)"
                backgroundImageOpacity={0.5}
                showAtmosphere
                showGraticules
                globeImageUrl="//unpkg.com/three-globe/example/img/earth-day.jpg"
                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                labelsData={[{ lat: 19.2751, lng: 73.0554, text: 'Thane, India', color: 'white', size: 15 }]}
              />
            </div>
            <div>
              <p className="grid-headtext">Open to Remote Work</p>
              <p className="grid-subtext">Based in Thane, India, I am flexible with time zones and open to remote opportunities worldwide.</p>
              <div className="mt-4">
                <Button className="w-full" name="Contact me" isBean={true} containerClass="sm:w-fit w-full sm:min-w-96 "  />
              </div><br />

              
            
              

            </div>
          </div>
        </div>
        {/* Section 4 */}
        <div className="xl:col-span-2 xl:row-span-3">
          <div className="grid-container">
            <img src="assets/grid3.png" alt="grid-3" className="w-full sm:h-[266px] h-fit object-contain " />

            <div>
              <p className="grid-headtext">My Passion for Coding</p>
              <p className="grid-subtext">
                I thrive on solving problems and building solutions that make a difference. Always eager to explore
                new technologies and innovate.
              </p>
            </div>
          </div>
        </div>

        {/* Section 5 */}
        <div className="xl:col-span-1 xl:row-span-2">
          <div className="grid-container">
            <img
              src="assets/grid4.png"
              alt="grid-4"
              className="w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top"
            />

            <div className="space-y-2">
              <p className="grid-subtext text-center">Contact Me</p>
              <div className="copy-container" onClick={handleCopy}>
                <img src={hasCopied ? 'assets/tick.svg' : 'assets/copy.svg'} alt="copy" />
                <p className="lg:text-2xl md:text-xl font-medium text-gray_gradient text-white">piskepraveen@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
