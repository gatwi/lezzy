import React from 'react';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Hero2 from '../components/Hero2';

const Catalog = () => {
  return (
    <div>
      <Navbar />
      <Hero2 heading="Catalog." text="Queering in a city near You"/>
      <Footer />
    </div>
  )
}

export default Catalog;