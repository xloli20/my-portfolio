import React from "react";
import { Row, Col } from "react-flexbox-grid";
import Masonry from "react-masonry-css";
//Scss
import "./portfolio.scss";
//Assets
import Arrow from "../../assets/portfolio/arrow.svg";
import Preview1 from "../../assets/portfolio/project01/preview.png";
import Preview2 from "../../assets/portfolio/project02/preview.png";
import Preview3 from "../../assets/portfolio/project03/preview.png";
import Preview4 from "../../assets/portfolio/project04/preview.png";
import Preview5 from "../../assets/portfolio/project05/preview.png";
import Preview6 from "../../assets/portfolio/project06/preview.png";
//Components
import Button from "../ui-components/button/button";
import Title from "../ui-components/title/title";
import ProjectBox from "../ui-components/projectBox/projectBox";

class Portfolio extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // PORTFOLIO PROJECTS
      projects: [
        {
          id: "1",
          preview: Preview1,
          title: "Melodies Web App",
          tag: "web",
          link: "https://github.com/xloli20/MelodiesAppFrontEnd",
          des: "A Music App Allows Users To Listen, Explore And Search For Their Music ! " 
          + <a href="https://github.com/xloli20/MelodiesAppFrontEnd">to find out more</a>,
          duration: "4 weeks",
          skills: "React,JS, Axios, React Bootstrap, Material UI, HTML, CSS, SCSS, JSS"
        },
        {
          id: "2",
          preview: Preview2,
          title: "AR View App",
          tag: "android",
          link: "https://github.com/xloli20/ARViewApp",
          des: "ARView App is an android entertainment app that stands on Augmented Reality technology, and is dedicated towards new things for creativity and imagination."
          + <a href="https://github.com/xloli20/ARViewApp">to find out more</a>,
          duration: "6 months",
          skills: "Firbase, Google ARCore, Google Maps."
        },
        {
          id: "3",
          preview: Preview3,
          title: "3D Guitar",
          tag: "3d",
          link: "https://www.artstation.com/artwork/ELNw42",
          des: "Guitar Model: Yamaha C40. Modeled in Maya and textured in Substance Painter."
          + <a href="https://www.artstation.com/artwork/ELNw42">to find out more</a>,
          duration: "3 months",
          skills: "Maya, Substance Painter."
        },
        {
          id: "4",
          preview: Preview4,
          title: "Movies App",
          tag: "android",
          link: "https://github.com/xloli20/popularMovies",
          des: "an app to help users discover popular and recent movies. Movies data are fetched from the Internet with theMovieDB API. The app allows the user to change sort order by the most popular or by most rating. View and play trailers, read reviews of a selected movie, allow users to mark a movie as a favorite and store it locally. The app uses Android's modern toolkit Jetpack Compose."
          + <a href="https://github.com/xloli20/popularMovies">to find out more</a>,
          duration: "2 weeks",
          skills: "Java, Room Database, Android Architecture Components (Room, LiveData, ViewModel and Lifecycle), Responsive Design."
        },
        {
          id: "5",
          preview: Preview5,
          title: "Old Cathedral Street Lamp",
          tag: "3d",
          link: "https://www.artstation.com/artwork/0nr69Y",
          des: "This Old Cathedral Street Lamp is part of project has been done by a group of seven. Project Wild is a code name for an environment design study based on Bloodborne game from FromSoftware, Inc."
          + <a href="https://www.artstation.com/artwork/0nr69Y">to find out more</a>,
          duration: "2 weeks",
          skills: "Maya."
        },
        {
          id: "6",
          preview: Preview6,
          title: "Baking App",
          tag: "android",
          link: "https://github.com/xloli20/BakingApp",
          des: "an app to help users baking Recipes with the ingreiidient and steps with a video with each steps. Recipies data are fetched from the Internet with a Rest API. "
          + <a href="https://github.com/xloli20/BakingApp">to find out more</a>,
          duration: "2-3 weeks",
          skills: "Espresso UI test, ExoPlayer, Widgets, RestAPI."
        },
      ],
      // PORTFOLIO GALLERY WILL LOAD THIS AFTER FUNCTION "filterGallery" FINISH FILTERING
      filterResult: null,
      pickedFilter: "all",
      filterMenuActive: false,
      pickedFilterDropdown: "NEWEST"
    };
  }

  // FIRST LOAD
  componentDidMount() {
    this.filterGallery("all");
  }

  //FILTER PORTFOLIO FUNCTION
  filterGallery = (target) => {
    let projectsArr = [...this.state.projects];
    let result;

    if (target !== "all") {
      result = projectsArr.filter((project) => project.tag === target);
    } else {
      result = projectsArr;
    }

    this.setState({ filterResult: result, pickedFilter: target, pickedFilterDropdown: "NEWEST" });
  };

  // FILTER DROP DOWN HOVER MENU FUNCTION
  filterMenuHover = (event) => {
    if(event) {
      this.setState({ filterMenuActive: true });
    }else {
      this.setState({ filterMenuActive: false });
    }
  }

  // FILTER DROP DOWN HANDLER
  filterDropDownHandler = (filter) => {
    this.setState({ pickedFilterDropdown: filter, filterMenuActive: false });

    let projectsArr = [...this.state.filterResult];
    let result;

    if (filter === "NEWEST") {
      result = projectsArr.sort((a, b) => (a.id > b.id ? 1 : -1));
    }else if (filter === "OLDEST") {
      result = projectsArr.sort((a, b) => (a.id > b.id ? 1 : -1)).reverse();
    }

    this.setState({ filterResult: result});
  }

  // RENDER
  render() {
    // PORTFOLIO GALLERY RENDER
    let projectsRender = null;
    if (this.state.filterResult) {
      projectsRender = this.state.filterResult.map((project) => (
        <ProjectBox preview={project.preview} key={project.id} title={project.title} tag={project.tag} link={project.link} des={project.des} skills={project.skills} duration={project.duration} />
      ));
    }
    // PORTFOLIO GALLERY BREAKPOINTS
    const portfolioBreakpoints = {
      default: 3,
      1100: 3,
      700: 2,
      500: 1,
    };
    // PORTFOLIO FILTER DROPDOWN MENY RENDER
    let filterDroppDown = null;
    if(this.state.filterMenuActive) {
      filterDroppDown = (
        <div className="portfolio__filter-menu shadow">
          <p className="font12" onClick={() => this.filterDropDownHandler("NEWEST")}>
            NEWEST
          </p>
          <p className="font12" onClick={() => this.filterDropDownHandler("OLDEST")}>
            OLDEST
          </p>
        </div>
      );
    }

    return (
      <div id="portfolio">
        <div className="wrapper">
          <Title title="WORK SHOWCASE." />
          <Row>
            <Col xs={12} sm={12} md={8} lg={9}>
              <div className="portfolio__nav">
                <ul>
                  <li className={this.state.pickedFilter === "all" ? "portfolio__nav-active font12" : "font12"} onClick={() => this.filterGallery("all")}>
                    ALL
                  </li>
                  <li
                    className={this.state.pickedFilter === "android" ? "portfolio__nav-active font12" : "font12"}
                    onClick={() => this.filterGallery("android")}
                  >
                    ANDROID
                  </li>
                  <li
                    className={this.state.pickedFilter === "web" ? "portfolio__nav-active font12" : "font12"}
                    onClick={() => this.filterGallery("web")}
                  >
                    WEB
                  </li>
                  <li className={this.state.pickedFilter === "3d" ? "portfolio__nav-active font12" : "font12"} 
                  onClick={() => this.filterGallery("3d")}
                  >
                    3D ART
                  </li>
                </ul>
              </div>
            </Col>
            <Col xs={12} sm={12} md={4} lg={3}>
              <div className="portfolio__filter" onMouseEnter={() => this.filterMenuHover(true)} onMouseLeave={() => this.filterMenuHover(false)}>
                <p className="font12">{this.state.pickedFilterDropdown} FIRST</p>
                <img src={Arrow} alt="arrow" />
                {filterDroppDown}
              </div>
            </Col>
          </Row>
          <Masonry breakpointCols={portfolioBreakpoints} className="my-masonry-grid" columnClassName="mint__gallery">
            {projectsRender}
          </Masonry>
          <Row className="flex-center padding40">
            <Button label="HAVE WORK FOR US?" target={"contact"} />
          </Row>
        </div>
      </div>
    );
  }
}

export default Portfolio;
