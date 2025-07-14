import { Link } from "react-router-dom";
import silver from "../assets/images/silver_house.png";

const Projects = () => {
  return (
    <div className="projects">
      <div className="container">
        <div className="projects_box">
          <div className="project_box">
            <Link
              target="_blank"
              to="https://srk-amon.github.io/Silver-House/"
              className="project_box_img"
            >
              <img src={silver} alt="" />
            </Link>
            <div className="project_mini_box">
              <h3 className="project_mini_box_title">
                Silver <span>House</span>
              </h3>
              <p className="project_mini_box_text"></p>
              <div className="project_btn_box">
              <button className="project_btn">
                <Link
                  target="_blank"
                  to="https://srk-amon.github.io/Silver-House/"
                >
                  Visit site
                </Link>
              </button>
              <button className="project_btn">
                <Link
                  target="_blank"
                  to="https://github.com/SRK-Amon/Silver-House"
                >
                  Visit GitHub
                </Link>
              </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
