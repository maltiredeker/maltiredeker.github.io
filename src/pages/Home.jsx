import React from 'react';
import { useRef, useState, useEffect} from 'react';
import Contact from './Contact';
import MyUniverse from '../planets/myUniverse';
import { faCaretDown, faCircle, faMoon} from '@fortawesome/free-solid-svg-icons';
import {faCircle as faCircleReg} from '@fortawesome/free-regular-svg-icons'
;import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import GlassCard from '../components/GlassCard';
import CustomSlider from '../components/CustomSlider';

export default function Home() {

  const [speed, setSpeed] = useState(50);
  const [showPhone, setShowPhone] = useState(getShow());

  function getShow() {
    const width = window.innerWidth;
    if (width < 600) return true;
    return false;
  }
   useEffect(() => {
      const handleResize = () => {
        setShowPhone(getShow());
      };
  
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, []);


    const contactRef = useRef(null);

    const scrollToSection = () => {
      contactRef.current.scrollIntoView({ behavior: "smooth" });
    };


  return (
    <div>
      <section className = "min-h-screen w-viewport bg-[url('/images/Backgrounds/space-bg.png')] bg-cover bg-center -mt-20">
       
        <h1 className = "hidden !text-[80px] w-0.5 md:absolute md:flex md:bottom-45 md:left-20 leading-[80px]"><b>WELCOME TO MY WORLD...</b></h1>

        {/*<GlassCard Title = "Title" Alt_Title = "Title" Text = "This is some sample text for yall."/>*/}
        <MyUniverse speed = {speed}/>

        <button onClick = {scrollToSection} 
              className = "flex justify-center content-center bg-none border-2 border-white fixed bottom-10 right-10 rounded-md text-[50px] w-15 h-15 hover:bg-white/50 z-20 backdrop-blur-xl">
          <FontAwesomeIcon icon={faCaretDown} />       
        </button>

        <div className = "flex flex-col px-10 md:px-0 gap-2 mt-[-30px]">
         <CustomSlider speed = {speed} setSpeed = {setSpeed}/>

          
          {showPhone && 
                    
                    <div className = "flex justify-betweeen gap-2 items-stretch">
                        <div className = "flex p-10 w-[30%] self-stretch rounded-lg border border-white bg-white/20 justify-center items-center"><FontAwesomeIcon className = "text-[30px]" icon={faMoon} /></div>

                        <GlassCard Title="Malti" 
                                    Alt_Title="(मालती)" 
                                    Text="The name Malti is a name of Indian origin that means small, fragrant flower. It could also mean Moonlight."  
                                    pos={['auto', 'auto', 'auto', 'auto']}/>
                    </div>
          }

          {showPhone && 
          
         <div className = "flex justify-betweeen gap-2 items-stretch">
               <div className = "flex p-10  w-[30%] self-stretch rounded-lg border border-white bg-white/20 justify-center items-center "><FontAwesomeIcon className = "text-[40px]" icon={faCircle} /></div>

               <GlassCard Title="Marcia" 
                          Alt_Title="(Mārcia)" 
                          Text="Marcia is the Latin equivalent to the title Marcus, which means “dedicated to Mars”, the god of war in Roman mythology."  
                          pos={['auto', 'auto', 'auto', 'auto']}/>
          </div>
          }


          {showPhone && 
              <div className = "flex justify-betweeen gap-2 items-stretch">
                <div className = "flex p-10  w-[30%] self-stretch rounded-lg border border-white bg-white/20 justify-center items-center"><FontAwesomeIcon className = "text-[35px]" icon={faCircleReg} /></div>
                <GlassCard Title="Redeker" 
                            Alt_Title="(Redeker)" 
                            Text="The Redeker surname is a North German (Westphalia) variant of Rademaker or “wheel maker”."   
                            pos={['auto', 'auto', 'auto', 'auto']}/>
              </div>
          }

          
       </div>

      </section>

      <div ref={contactRef} />
      <Contact/>
      
      
    </div>
  );
}
