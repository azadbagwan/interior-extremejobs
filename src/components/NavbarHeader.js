import React, { Component } from "react"
import { Link } from "react-router-dom";
import styled from "styled-components"
import logo from "../images/eomkar-logo1.png"
import { FaAlignRight } from "react-icons/fa"
import { styles } from "../utils"
export default class NavbarHeader extends Component {
  render() {
    const { handleNavbar } = this.props
    return (
      <HeaderWrapper>
        <Link to="/">
          <img src={logo} alt="Hema flowers" className="logo" />
        </Link>

        <FaAlignRight
          className="toggle-icon"
          onClick={() => {
            handleNavbar()
          }}
        />
      </HeaderWrapper>
    )
  }
}
const HeaderWrapper = styled.div`
  padding: 0.4rem 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .toggle-icon {
    font-size: 1.75rem;
    color: ${styles.colors.mainPurple};
    cursor: pointer;
  }
  .logo {
    width: 300px;
    height: 100px;
  }

  @media (min-width: 768px) {
    .toggle-icon {
      display: none;
    }
    .logo {
      width: 400px;
      height: 120px;
    }
  }
`
