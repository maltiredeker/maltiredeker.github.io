import React from 'react';
import Contact from './Contact';
import MyUniverse from '../planets/myUniverse';

export default function Home() {
  return (
    <div>
      <section className = "min-h-screen w-viewport bg-[url('/src/images/Backgrounds/space-bg.png')] bg-cover bg-center -mt-20">
        <MyUniverse />
      </section>

      
       <Contact />
      
      
    </div>
  );
}
