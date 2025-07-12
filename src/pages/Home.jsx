import React from 'react';
import { useRef, useState, useEffect} from 'react';
import Contact from './Contact';
import MyUniverse from '../planets/myUniverse';
import { faCaretDown, faCircle, faMoon, faCircleInfo} from '@fortawesome/free-solid-svg-icons';
import {faCircle as faCircleReg} from '@fortawesome/free-regular-svg-icons'
;import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import GlassCard from '../components/GlassCard';
import CustomSlider from '../components/CustomSlider';

export default function Home() {

  const [speed, setSpeed] = useState(50);
  const [showPhone, setShowPhone] = useState(getShow());
  const [hideTooltip, setHideTooltip] = useState(false);
  const [screenHeight, setScreenHeight] = useState(getHeight());

  function getHeight(){
    const height = window.innerHeight;
    if (height < 650) return true;
    return false;
  }

  function getShow() {
    const width = window.innerWidth;
    if (width < 800) return true;
    return false;
  }
   useEffect(() => {
      const handleResize = () => {
        setShowPhone(getShow());
        setScreenHeight(getHeight());
      };
  
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, []);


    const contactRef = useRef(null);

    const scrollToSection = () => {
      contactRef.current.scrollIntoView({ behavior: "smooth" });

    };

    const [isAtTop, setIsAtTop] = useState(true);

    useEffect(() => {
      const handleScroll = () => {
        setIsAtTop(window.scrollY < 50);
      };

      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);


  return (
    <div>
      <section className = "flex flex-col min-h-fit md:min-h-screen w-viewport bg-[url('/images/ulukai/corona_rt.png')] bg-cover bg-center -mt-20">
       
        {!screenHeight && <h1 className = "!text-[30px] leading-[35px] w-50 top-[340px] left-5 absolute md:!text-[80px] md:w-[300px] md:top-auto md:bottom-1/3 md:left-20 md:leading-[80px]"><b>WELCOME TO MY WORLD.</b></h1>
          }

        {screenHeight && 
           <h1 className = "!text-[30px] leading-[35px] w-50 top-[340px] left-5 absolute md:!text-[60px] md:w-[200px] md:top-auto md:bottom-1/3 md:left-20 md:leading-[60px]"><b>WELCOME TO MY WORLD.</b></h1>
        }
        {/*<GlassCard Title = "Title" Alt_Title = "Title" Text = "This is some sample text for yall."/>*/}
        <MyUniverse speed = {speed} setHideTT = {setHideTooltip}/>

       {isAtTop && <button onClick = {scrollToSection} 
          className = "flex justify-center content-center bg-none border-2 border-white fixed top-[420px] right-5 rounded-md text-[50px] w-15 h-15 hover:bg-white/50 z-20 backdrop-blur-xl md:bottom-20 md:top-auto md:right-15">
          <FontAwesomeIcon icon={faCaretDown} />       
        </button>}

        {/*Tooltip*/}
        {!showPhone && hideTooltip && 
         <div className = "absolute top-22 right-1/2 translate-x-1/2  glassCard flex gap-5 px-5 !py-4 justify-between !items-center w-[300px] opacity-50">
             <FontAwesomeIcon className = "text-[28px]"icon={faCircleInfo} />
              <p className = "!text-[12px]">Click on the planet, ring and moon to find out more about me.</p>
          </div>
          }

        <div className = "flex flex-col px-5 md:px-0 gap-4">
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
               <div className = "flex p-10 w-[30%] self-stretch rounded-lg border border-white bg-white/20 justify-center items-center "><FontAwesomeIcon className = "text-[40px]" icon={faCircle} /></div>

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
