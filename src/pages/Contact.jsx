import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faInstagram} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFloppyDisk } from '@fortawesome/free-regular-svg-icons';


export default function Contact() {
  return (
    <section id = "contact" className = "min-h-fit w-viewport bg-[url('/images/ulukai/corona_lf.png')] bg-cover bg-center pb-30 pt-30 px-20 lg:mb-5">
      <div className = "flex flex-col justify-center items-center md:flex-row">
      
        <h2 className="flex lg:hidden md:hidden text-white mb-5"> Hi, I'm Malti! </h2>
        
        <img src = "/images/Malti_Red_Portrait.jpeg" className = "rounded-full w-[90%] h-1/2 mb-10  md:mb-0 md:w-[40%] md:mr-20 lg:w-[35%] lg:mr-30" alt = "Portrait of Malti Redeker."/> 

        <div className = "flex flex-col">
          <h1 className="hidden md:flex text-white md:w-full md:mb-4" style={{ textShadow: '0 0 4px white' }}> Hi, I'm Malti! </h1>

          <p className = "text-center w-full mb-10 md:text-left md:pr-0 lg:pr-20"> I’ve always been a creative person and growing up I would be caught drawing in any given moment. 
            As I got older, I started exploring digital mediums and even went on to study computer science. 
            I’m passionate about combining design with technology - 
            although I am slowly making peace with the fact that my dream roles will likely be taken over by AI soon oof..</p>
          
          <div className = "flex flex-col w-full lg:flex-row lg:justify-between lg:items-center lg:pr-0 lg:gap-4">
               {/* Social Media Buttons */}
              <div className = "flex justify-evenly w-full mb-5 lg:mb-0 md:w-full md:gap-3 md:justify-start ">
                  <button className = "flex flex-col items-center px-3 pt-2 rounded-md hover:bg-white/50" onClick = {() => window.open("https://www.linkedin.com/in/maltiredeker", '_blank')}>
                    <FontAwesomeIcon className = "text-4xl mb-2" icon={faLinkedin} />
                    <p> Linkedin </p>
                  </button>

                  <button className = "flex flex-col items-center px-2 pt-2 rounded-md hover:bg-white/50" onClick = {() => window.open("https://www.instagram.com/malti.red", '_blank')}> 
                    <FontAwesomeIcon className = "text-4xl mb-2" icon = {faInstagram}/>
                    <p> Instagram </p>
                  </button>

                  <button className ="flex flex-col items-center px-6 pt-2 rounded-md hover:bg-white/50" onClick = {() => window.location.href = 'mailto:maltiredeker@gmail.com'}>
                    <FontAwesomeIcon className = "text-4xl mb-2" icon={faEnvelope} />
                    <p> Email </p>
                  </button>

                  <a
                    href="/src/assets/UX_Design_CV.pdf"
                    download
                    className="hidden md:flex flex-col items-center px-8 pt-2 rounded-md hover:bg-white/50"
                  >
                    <FontAwesomeIcon className="text-4xl mb-2" icon={faFloppyDisk} />
                    <p>CV</p>
                  </a>

              </div>
              {/*Download CV Button */}
              <a href = "src/assets/UX_Design_CV.pdf" download className = "flex text-center backdrop-blur bg-gradient-to-r from-white/30 justify-center items-center to-white/10 px-4 py-2 rounded-lg shadow text-white w-full md:hidden border border-white hover:bg-white/30 min-w-[200px]">Download my CV</a>
          </div>
        </div>
    </div>

    </section>
  );
}
