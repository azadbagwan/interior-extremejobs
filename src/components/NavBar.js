import React, { Component } from "react"
import NavbarHeader from "./NavbarHeader"
import NavbarLinks from "./NavbarLinks"
import NavbarIcons from "./NavbarIcons"
import styled from "styled-components"
// import { styles } from "../../../utils"
export default class NavBar extends Component {
  state = {
    navbarOpen: false,
  }
  handleNavbar = () => {
console.log("settig navbar state")
    this.setState(() => {
      return { navbarOpen: !this.state.navbarOpen }
    })
  }
  render() {
    return (
      <div className="navbar-main">
        <NavWrapper>
          <NavbarHeader handleNavbar={this.handleNavbar} />

          <NavbarLinks navbarOpen={this.state.navbarOpen} />
          <NavbarIcons />
        </NavWrapper>
      </div>
    )
  }
}

const NavWrapper = styled.nav`
  overflow: hidden;
  position: fixed;
  top: 0;
  width: 100%;

  z-index: 1000;
  paddin: 0.5rem 1rem 0.5rem 1rem;
  background: rgba(255, 255, 255, 0.8);

  @media (min-width: 768px) {
    display: flex;
    align-items: center;
  }
  @media (max-width: 768px) {
    align-items: center;
    padding-bottom: 0px;
  }
`
