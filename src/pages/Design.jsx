import React from 'react';
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react'
import CustomGallery from "../components/CustomGallery.jsx"
import { useState, useEffect } from 'react';
import {Menu, MenuButton, MenuItems, MenuItem} from '@headlessui/react'


export default function Design() {

  const tabLabels = ["Traditional", "Digital", "Logos", "Posters"];

  const TraditionalImages = [
  '/images/Traditional/img1.jpg',
  '/images/Traditional/img2.jpg',
  '/images/Traditional/img3.jpeg',
  '/images/Traditional/img4.jpeg',
  '/images/Traditional/img5.jpg',
  '/images/Traditional/img6.jpeg',
  '/images/Traditional/img7.jpeg',
  '/images/Traditional/img8.jpeg',
  '/images/Traditional/img9.jpg',
  '/images/Traditional/img10.jpg',
  '/images/Traditional/img11.jpg',
  '/images/Traditional/img12.jpg',
  '/images/Traditional/img13.jpg',
  '/images/Traditional/img14.jpeg',
  '/images/Traditional/img15.jpg',
  '/images/Traditional/img16.jpg',
  '/images/Traditional/img17.jpg',
  '/images/Traditional/img18.jpg',
  '/images/Traditional/img19.jpg',
  '/images/Traditional/img20.jpg',
  '/images/Traditional/img21.jpg',

];


  const DigitalImages = [
  '/images/Digital/img1.png',
  '/images/Digital/img2.png',
  '/images/Digital/img3.png',
  '/images/Digital/img4.png',
  '/images/Digital/img5.png',
  '/images/Digital/img6.jpeg',
  '/images/Digital/img7.jpeg',
  '/images/Digital/img8.jpeg',
  '/images/Digital/img9.jpeg',
  '/images/Digital/img10.jpeg',
  '/images/Digital/img11.jpeg',
  '/images/Digital/img12.jpeg',
  '/images/Digital/img13.jpeg',
  '/images/Digital/img14.jpeg',
  '/images/Digital/img15.jpeg',
  '/images/Digital/img16.jpeg',
  '/images/Digital/img17.jpeg',
  '/images/Digital/img18.jpeg',
  '/images/Digital/img19.jpeg',
  '/images/Digital/img20.jpeg',
  '/images/Digital/img21.jpeg',
  '/images/Digital/img22.png',
  '/images/Digital/img23.png',
  '/images/Digital/img24.png',
  '/images/Digital/img25.png',
  '/images/Digital/img26.png',
  '/images/Digital/img27.png',
  '/images/Digital/img28.png',
  '/images/Digital/img29.png',
  '/images/Digital/img30.png',

];


  const LogosImages = [
  '/images/Logos/img1.png',
  '/images/Logos/img2.png',
  '/images/Logos/img3.png',
  '/images/Logos/img4.png',
  '/images/Logos/img5.png',
  '/images/Logos/img6.png',
  '/images/Logos/img7.png',
  '/images/Logos/img8.png',
  '/images/Logos/img9.png',
  '/images/Logos/img10.jpeg',
  '/images/Logos/img11.jpeg',
  '/images/Logos/img12.png',
  '/images/Logos/img13.png',
  '/images/Logos/img14.png',
  '/images/Logos/img15.png',
  '/images/Logos/img16.png',
  '/images/Logos/img17.png',
  '/images/Logos/img18.png',
  '/images/Logos/img19.png',
  '/images/Logos/img20.png',
  '/images/Logos/img21.png'

];

  const PostersImages = [
  '/images/Posters/img1.png',
  '/images/Posters/img2.png',
  '/images/Posters/img3.png',
  '/images/Posters/img4.png',
  '/images/Posters/img5.png',
  '/images/Posters/img6.png',
  '/images/Posters/img7.png',
  '/images/Posters/img8.png',
  '/images/Posters/img9.jpg',
  '/images/Posters/img10.jpg',
  '/images/Posters/img11.jpeg',
  '/images/Posters/img12.jpg',
  '/images/Posters/img13.jpg',
  '/images/Posters/img14.jpg',
  '/images/Posters/img15.jpg',
  '/images/Posters/img16.jpeg',
  '/images/Posters/img17.jpg',
  '/images/Posters/img18.png',
  '/images/Posters/img19.png',
  '/images/Posters/img20.png',
  '/images/Posters/img21.png',


];

  const [phone, setPhone] = useState(getPhone());

  function getPhone() {
      const width = window.innerWidth;
      if (width < 800) return true;
      return false;
    }

    useEffect(() => 
      {
        const handleResize = () => {
          setPhone(getPhone());
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
      }, []);

    

  return (
    <section className = "min-h-screen w-screen bg-cover bg-center -mt-20 pt-30 px-5 md:px-30">
      <h1 className = "hidden md:flex mb-5">Explore my design...</h1>
      <h2 className = "flex md:hidden mb-5">My Design </h2>
    

      <TabGroup>
      <TabList className = "flex flex-row flex-wrap gap-2 md:gap-5 mb-5 w-full">
        {tabLabels.map((label) => (
          <Tab key = {label} className = "whiteGradientButton !px-2 text-[15px] md:text-[1rem] md:!px-5 data-selected:bg-white/30">{label}</Tab>
        ))}
      </TabList>
      
      <TabPanels className = "pb-10 mb-20 md:pb-20 md:mb-10">
        <TabPanel><CustomGallery images = {TraditionalImages}/></TabPanel>
        <TabPanel><CustomGallery images = {DigitalImages}/></TabPanel>
        <TabPanel><CustomGallery images = {LogosImages}/></TabPanel>
        <TabPanel><CustomGallery images = {PostersImages}/></TabPanel>
      </TabPanels>
    </TabGroup>
    
    </section>
  );
}
