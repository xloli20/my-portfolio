import React from "react";
import { Row, Col } from "react-flexbox-grid";
import "./contactSocial.scss";


import TwitterIcons from "../../../assets/contact/twitter.svg";
import LinkedinIcon from "../../../assets/contact/linkedin.svg";
import GithubIcon from "../../../assets/contact/github.svg";


const contactSocial = () => (
    <Row>
    <Col xs={12}>
      <Row center="xs">
        <Col xs={12} lg={1} className="contact__social">
          <a href="https://linkedin.com/in/alaa-alz" target="_blank">
          <img src={LinkedinIcon} alt="linkedin" />
          </a>
        </Col>
        <Col xs={12} lg={1} className="contact__social">
          <a href="https://twitter.com/AAMZ1996" target="_blank">
          <img src={TwitterIcons} alt="Twitter" />
          </a>
        </Col>
        <Col xs={12} lg={1} className="contact__social">
        <a href="https://github.com/xloli20" target="_blank">

          <img src={GithubIcon} alt="github" />
          </a>
        </Col>
      </Row>
    </Col>
  </Row>

);

export default contactSocial;
