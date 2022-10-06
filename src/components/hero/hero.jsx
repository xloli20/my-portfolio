import React from "react";
import { Row, Col } from "react-flexbox-grid";
// SCSS
import "./hero.scss";
//Assets
import HeroImage from '../../assets/hero/logo512.png';
//Components
import Button from '../ui-components/button/button';

const hero = () => (
  <div className="hero" id="hero">
    <div className="wrapper">
      <Row>
        <Col md={12} lg={6}>
          <div className="hero-info">
            <h1 className="weight800 font60">Hello!!!</h1>
            <h1 className="weight800 font60">
              My name is Alaa Alzahrani.
            </h1>
            <p className="font12">
            Software Developer with Computer Science background, and experience in different fields in development, such as, Android, Flutter, and Web. passionate also about 3D modeling and 3D Art in general.
            </p>
            <Button label="SEND MESSAGE" target={"contact"} />
          </div>
        </Col>
        <Col md={12} lg={6}>
          <div className="hero-image">
            <img src={HeroImage} alt="hero" />
          </div>
        </Col>
      </Row>
    </div>
  </div>
);

export default hero;
