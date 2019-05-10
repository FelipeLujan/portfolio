import React, { Component } from "react";
import PropTypes from "prop-types";
import { ParallaxProvider, Parallax } from "react-scroll-parallax";
import Typography from "@material-ui/core/Typography";

class MyComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      size: {
        title: { top: "0px", bottom: "0px" },
        layer1: { top: "0px", bottom: "0px" },
        layer2: { top: "0px", bottom: "0px" },
        layer3: { top: "0px", bottom: "0px" },
        layer4: { top: "0px", bottom: "0px" },
        layer5: { top: "12px", bottom: "32px" }
      }
    };
  }

  componentDidMount() {
    window.addEventListener("resize", this.resize.bind(this));
    this.resize();
  }

  resize() {
    let width = window.innerWidth;
    console.log(737 < width && width < 980);
    switch (true) {
      case width < 480:
        this.setState({
          size: {
            title: { top: "-200px", bottom: "200px" },
            layer1: { top: "-50px", bottom: "80px" },
            layer2: { top: "0px", bottom: "80px" },
            layer3: { top: "0px", bottom: "20px" },
            layer4: { top: "0px", bottom: "0px" },
            layer5: { top: "0px", bottom: "0px" }
          }
        });
        break;
      case 481 < width && width < 736:
        this.setState({
          size: {
            title: { top: "-400px", bottom: "300px" },
            layer1: { top: "0px", bottom: "100px" },
            layer2: { top: "0px", bottom: "70px" },
            layer3: { top: "0px", bottom: "50px" },
            layer4: { top: "0px", bottom: "0px" },
            layer5: { top: "0px", bottom: "0px" }
          }
        });
        break;
      case 737 < width && width < 980:
        this.setState({
          size: {
            title: { top: "-400px", bottom: "400px" },
            layer1: { top: "0px", bottom: "100px" },
            layer2: { top: "0px", bottom: "80px" },
            layer3: { top: "0px", bottom: "50px" },
            layer4: { top: "10px", bottom: "0px" },
            layer5: { top: "0px", bottom: "0px" }
          }
        });
        break;
      case 981 < width:
        this.setState({
          size: {
            title: { top: "-500px", bottom: "300px" },
            layer1: { top: "-100px", bottom: "300px" },
            layer2: { top: "-50px", bottom: "100px" },
            layer3: { top: "-50px", bottom: "50px" },
            layer4: { top: "0px", bottom: "0px" },
            layer5: { top: "0px", bottom: "-20px" }
          }
        });
        break;
      default:
        this.setState({
          size: {
            title: { top: "0px", bottom: "0px" },
            layer1: { top: "0px", bottom: "0px" },
            layer2: { top: "0px", bottom: "0px" },
            layer3: { top: "0px", bottom: "0px" },
            layer4: { top: "0px", bottom: "0px" },
            layer5: { top: "0px", bottom: "0px" }
          }
        });
    }
  }

  render() {
    let { size } = this.state;
    return (
      <ParallaxProvider>
        <div className="mountains-container">
          <Parallax className="title" y={[size.title.top, size.title.bottom]}>
            <Typography variant="h1" component="h1">
              Felipe Luján
            </Typography>
          </Parallax>
          <div className="mountains">
            <Parallax className="m1" y={[size.layer1.top, size.layer1.bottom]}>
              <img src="https://res.cloudinary.com/felipelujan/image/upload/v1556387890/layer1.png" />
            </Parallax>
            <Parallax className="m2" y={[size.layer2.top, size.layer2.bottom]}>
              <img src="https://res.cloudinary.com/felipelujan/image/upload/v1556567632/layer2.png" />
            </Parallax>
            <Parallax className="m3" y={[size.layer3.top, size.layer3.bottom]}>
              <img src="https://res.cloudinary.com/felipelujan/image/upload/v1556387887/layer3.png" />
            </Parallax>
            <Parallax className="m4" y={[size.layer4.top, size.layer4.bottom]}>
              <img src="https://res.cloudinary.com/felipelujan/image/upload/v1556387887/layer4.png" />
            </Parallax>
            <Parallax className="m5" y={[size.layer5.top, size.layer5.bottom]}>
              <img src="https://res.cloudinary.com/felipelujan/image/upload/v1556387887/layer5.png" />
            </Parallax>

            {/*<div className="bg6" />*/}
          </div>
        </div>
      </ParallaxProvider>
    );
  }
}

MyComponent.propTypes = {};

export default MyComponent;
