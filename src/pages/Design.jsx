import React from 'react';
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react'
import CustomGallery from "../components/CustomGallery.jsx"

export default function Design() {

  const tabLabels = ["Traditional", "Digital", "Logos", "Posters & Merch"];

  const TraditionalImages = [
  'src/images/Traditional/img1.jpg',
  'src/images/Traditional/img2.jpg',
  'src/images/Traditional/img3.JPG',
  'src/images/Traditional/img4.JPG',
  'src/images/Traditional/img5.PNG',
  'src/images/Traditional/img6.jpg',
  'src/images/Traditional/img7.jpg',
  'src/images/Traditional/img8.jpg',
  'src/images/Traditional/img9.jpeg',
  'src/images/Traditional/img10.jpeg',
  'src/images/Traditional/img11.jpeg',
  'src/images/Traditional/img12.PNG',
  'src/images/Traditional/img13.jpeg',
  'src/images/Traditional/img14.jpeg',
  'src/images/Traditional/img15.jpeg',
  'src/images/Traditional/img16.jpg',
  'src/images/Traditional/img17.jpg',
  'src/images/Traditional/img18.jpg',
  'src/images/Traditional/img19.jpg',
  'src/images/Traditional/img20.jpeg',
];


  const DigitalImages = [
  'src/images/Digital/img1.png',
  'src/images/Digital/img2.png',
  'src/images/Digital/img3.png',
  'src/images/Digital/img4.png',
  'src/images/Digital/img5.png',
  'src/images/Digital/img6.jpeg',
  'src/images/Digital/img7.jpeg',
  'src/images/Digital/img8.jpeg',
  'src/images/Digital/img9.jpeg',
  'src/images/Digital/img10.jpeg',
  'src/images/Digital/img11.jpeg',
  'src/images/Digital/img12.jpeg',
  'src/images/Digital/img13.jpeg',
  'src/images/Digital/img14.jpeg',
  'src/images/Digital/img15.jpeg',
  'src/images/Digital/img16.jpeg',
  'src/images/Digital/img17.jpeg',
  'src/images/Digital/img18.jpeg',
  'src/images/Digital/img19.jpeg',
  'src/images/Digital/img20.jpeg',
  'src/images/Digital/img21.jpeg',
];


  const LogosImages = [
  'src/images/Logos/img1.png',
  'src/images/Logos/img2.png',
  'src/images/Logos/img3.png',
  'src/images/Logos/img4.png',
  'src/images/Logos/img5.png',
  'src/images/Logos/img6.png',
  'src/images/Logos/img7.png',
  'src/images/Logos/img8.png',
  'src/images/Logos/img9.png',
  'src/images/Logos/img10.jpeg',
  'src/images/Logos/img11.jpeg',
  'src/images/Logos/img12.jpeg',
  'src/images/Logos/img13.jpeg',
  'src/images/Logos/img14.jpeg',
  'src/images/Logos/img15.jpeg',
  'src/images/Logos/img16.jpeg',
  'src/images/Logos/img17.jpeg',
  'src/images/Logos/img18.jpeg',
];

  const PostersImages = [
  'src/images/Posters/img1.png',
  'src/images/Posters/img2.png',
  'src/images/Posters/img3.png',
  'src/images/Posters/img4.png',
  'src/images/Posters/img5.png',
  'src/images/Posters/img6.png',
  'src/images/Posters/img7.png',
  'src/images/Posters/img8.png',
  'src/images/Posters/img9.jpg',
  'src/images/Posters/img10.jpg',
  'src/images/Posters/img11.jpeg',
  'src/images/Posters/img12.jpg',
  'src/images/Posters/img13.jpg',
  'src/images/Posters/img14.jpg',
  'src/images/Posters/img15.jpg',
  'src/images/Posters/img16.jpeg',
  'src/images/Posters/img17.jpg',
];



  return (
    <section className = "min-h-screen w-viewport bg-[url('/src/images/Backgrounds/space-bg.png')] bg-cover bg-center -mt-20 pt-30 px-20">
      <h1 className = "mb-5">Explore my design...</h1>
      <TabGroup>
      <TabList className = "flex flex-row flex-wrap gap-5 mb-5">
        {tabLabels.map((label) => (
          <Tab key = {label} className = "whiteGradientButton">{label}</Tab>
        ))}
      </TabList>
      <TabPanels className = "mb-20 md:mb-10">
        <TabPanel><CustomGallery images = {TraditionalImages}/></TabPanel>
        <TabPanel><CustomGallery images = {DigitalImages}/></TabPanel>
        <TabPanel><CustomGallery images = {LogosImages}/></TabPanel>
        <TabPanel><CustomGallery images = {PostersImages}/></TabPanel>
      </TabPanels>
    </TabGroup>
    </section>
  );
}
