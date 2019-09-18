// import React from "react";
import ReactDOM from "react-dom";
import img1 from "../images/tile-blue1.jpeg"
import img2 from "../images/tile-white2.jpeg"
import img3 from "../images/tile-brown1.jpeg"
import React, { Component } from "react";

export default class Herodynamic extends Component {
    constructor(props) {
        super(props);
        this.state = {
          images: [
            img1,
            img2,
            img3
          ],
          selectedImage: img2
        };
      }
    
      componentDidMount() {
        setInterval(() => {
          this.setState(prevState => {
            if (prevState.selectedImage === this.state.images[0]) {
              return {
                selectedImage: this.state.images[1]
              };
            } else if (prevState.selectedImage === this.state.images[1]) {
              return {
                selectedImage: this.state.images[2]
              };
            }
            else{
              return {
                selectedImage: this.state.images[0]
              };
            }
          });
        }, 2500);
      }
    
      render() {
        return (
          <div className="dynamic-hero">
            <img style={{height: 700, width: 1700,}} src={this.state.selectedImage} />
          </div>
        );
}
}
