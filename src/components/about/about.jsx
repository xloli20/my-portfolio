import React from "react";
import { Row, Col } from "react-flexbox-grid";
import "./about.scss";
// Components
import TeamBox from './teamBox';
import TeamInfo from "./teamInfo";
import Title from "../ui-components/title/title";
// Assets
import Person01 from "../../assets/about/person01.png";
import Person02 from "../../assets/about/person02.png";

const about = () => (
  <div id="about">
    <div className="wrapper">
      <Title title="ABOUT ME." />
      <p className="font14">
      Software Developer with Computer Science background, and experience in different fields in development 
      (Android native development, Flutter, Web development), passionate about making human life easier 
      by creating creative solutions. Seeking a position where I can enhance the skills I need in software 
      development to implement solutions that meet business needs and to become a valued asset to the work-team,
      to learn, grow and develop long-term skills.<br></br>
      Here's my resume:
      </p>
      <Row>
        <Col md={12} lg={4}>
          <a href="https://drive.google.com/file/d/1GsH_29XMe6EdxEM7NWxoLusQGRYLqZPC/view?usp=sharing" target="_block">
            <TeamBox avatar={Person01} name="My Resume" job="Alaa Alzahrani" />
          </a>
        </Col>
        {/* <Col md={12} lg={4}>
          <TeamBox avatar={Person02} name="Han Solo" job="Graphic Designer" />
        </Col> */}
        <Col md={12} lg={4}>
          <TeamInfo />
        </Col>
      </Row>
    </div>
  </div>
);

export default about;
