import React, { Component } from "react"
import styled from "styled-components"
import { styles } from "../utils"
import { FaInstagram, FaFacebook, FaWhatsapp } from "react-icons/fa"
export default class NavbarIcons extends Component {
  state = {
    icons: [
      {
        id: 1,
        icon: <FaFacebook className="icon facebook-icon" />,
        path: "https://www.facebook.com/Hema-flowers-592861454172750",
      },
      {
        id: 2,
        icon: <FaInstagram className="icon instagram-icon" />,
        path: "https://www.instagram.com/azadbagwan",
      },
      {
        id: 3,
        icon: <FaWhatsapp className="icon whatsapp-icon" />,
        path:
          "https://wa.me/919765444344?text=Im%20interested%20in%20your%20products%20for%20sale",
      },
    ],
  }
  render() {
    return (
      <IconWrapper>
        {this.state.icons.map(item => {
          return (
            <a
              href={item.path}
              key={item.id}
              target="_blank"
              rel="noopener noreferrer"
            >
              {item.icon}
            </a>
          )
        })}
      </IconWrapper>
    )
  }
}

const IconWrapper = styled.div`
  .icon {
    font-size: 1.3rem;
    cursor: pointer;
    ${styles.transitionDefault};
  }
  .icon:hover {
    color: ${styles.colors.mainYellow};
  }
  .facebook-icon {
    color: #3b579d;
  }
  .instagram-icon {
    color: #da5f53;
  }
  .whatsapp-icon {
    color: white;
    background-color: #25d366;
  }
  display: none;
  @media (min-width: 768px) {
    display: flex;
    width: 10rem;
    justify-content: space-around;
  }
`
