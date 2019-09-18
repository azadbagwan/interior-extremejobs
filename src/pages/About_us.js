import React from "react";
import Hero from "../components/Hero"

export default function About_us() {
  return (
    <Hero hero="defaultHero" >
    <Banner title="the best there is for your flooring needs." subtitle="description of the service">
      {/* <Link to="/services" className=" btn-primary">
        Our services
        </Link> */}
      </Banner>
  </Hero>

    <div style={{ paddingTop: 50 }}>
    
About us

Pune's most trusted name

Sathe and Company was established in 1919 and today the 4th generation of the family continues to build on that trust and history.

We began as a trading house for natural stones and plumbing products and grew to become one of the most recognised names in the industry. In 1981, we opened a first-of-its-kind showroom in Pune selling sanitary ware, bath fittings and tiles. Our Pune showroom is conveniently located in Camp and is open Monday to Saturday from 10 a.m. to 7.30 p.m.

Today, our award winning company is one of the largest retailers of its kind in India and we offer a wide range of Wall & Floor Tiles, Bath products and Modular Bedrooms and Kitchens.

Due to our sizeable operations, extensive infrastructure and our experience, we also supply to large scale residential and commercial projects. Over the years we have proudly supplied some of the most iconic homes, prestigious buildings and noteable townships in and around Pune.


   
  </div>
  );
}
