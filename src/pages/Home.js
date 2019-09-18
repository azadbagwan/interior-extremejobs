import React from "react";
import Hero from "../components/Hero";
import Herodynamic from "../components/Herodynamic"
import Banner from "../components/Banner";

import {Link} from "react-router-dom";
import ServicesHome from "../components/ServicesHome"
import FeaturedRooms from "../components/FeaturedRooms"

export default function Home() {
  return (
  <>
        <div className="main-content">

  {/* <Hero hero="defaultHero" >
    <Banner title="Chose the best flooring for you" subtitle="description of the service">
      <Link to="/services" className=" btn-primary">
        Our services
        </Link>
      </Banner>
  </Hero> */}
  <Herodynamic></Herodynamic>
  <ServicesHome></ServicesHome>
  <FeaturedRooms></FeaturedRooms>
</div>
  </>);
}
