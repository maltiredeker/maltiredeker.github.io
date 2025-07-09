import React from 'react';
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react'
import CustomGallery from "../components/CustomGallery.jsx"
import { useState, useEffect } from 'react';
import {Menu, MenuButton, MenuItems, MenuItem} from '@headlessui/react'


export default function Design() {

  const tabLabels = ["Traditional", "Digital", "Logos", "Posters & Merch"];

  const TraditionalImages = [
  '/images/Traditional/img1.jpg',
  '/images/Traditional/img2.jpg',
  '/images/Traditional/img3.jpg',
  '/images/Traditional/img4.JPG',
  '/images/Traditional/img5.PNG',
  '/images/Traditional/img6.jpg',
  '/images/Traditional/img7.jpg',
  '/images/Traditional/img8.jpg',
  '/images/Traditional/img9.jpeg',
  '/images/Traditional/img10.jpeg',
  '/images/Traditional/img11.jpeg',
  '/images/Traditional/img12.PNG',
  '/images/Traditional/img13.jpeg',
  '/images/Traditional/img14.jpeg',
  '/images/Traditional/img15.jpeg',
  '/images/Traditional/img16.jpg',
  '/images/Traditional/img17.jpg',
  '/images/Traditional/img18.jpg',
  '/images/Traditional/img19.jpg',
  '/images/Traditional/img20.jpeg',
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
  '/images/Logos/img12.jpeg',
  '/images/Logos/img13.jpeg',
  '/images/Logos/img14.jpeg',
  '/images/Logos/img15.jpeg',
  '/images/Logos/img16.jpeg',
  '/images/Logos/img17.jpeg',
  '/images/Logos/img18.jpeg',
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
