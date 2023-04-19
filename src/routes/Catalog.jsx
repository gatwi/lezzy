import React from 'react';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Hero2 from '../components/Hero2';
import Events from '../components/Events';

const Catalog = () => {
  return (
    <div>
      <Navbar />
      <Hero2 heading="Catalog." text="Queering in a city near You"/>
      <Events />
      <Footer />
    </div>
  )
}

export default Catalog;