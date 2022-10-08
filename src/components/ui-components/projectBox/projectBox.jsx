import React from "react";
import Example from "./Modal";
// Scss
import "./projectBox.scss";

class projectBox extends React.Component {
    
      render() {
        return(
          <div className="portfolio__box">
          <img src={this.props.preview} alt="project" />
          <div className="portfolio__hover-info flex-center">
            <div className="text-center">
              <p className="font30 weight800"><a href={this.props.link} target="_block">{this.props.title}</a></p>
              <p className="font12 weight500">{this.props.tag}</p>
              <Example props={this.props}></Example>
            </div>
          </div>
        </div>
      
        );
      }

    
    }
// const projectBox = (props) => (
//   <div className="portfolio__box">
//     <img src={props.preview} alt="project" />
//     <div className="portfolio__hover-info flex-center">
//       <div className="text-center">
//         <p className="font30 weight800"><a href={props.link} target="_block">{props.title}</a></p>
//         <p className="font12 weight500">{props.tag}</p>
//         <Example propss={this.props}></Example>
//       </div>
//     </div>
//   </div>
  
// );

 export default projectBox;
