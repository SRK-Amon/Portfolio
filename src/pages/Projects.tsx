import { Link } from "react-router-dom";
import silver from "../assets/images/silver_house.png";
import Nike from "../assets/images/Nike.png";

const Projects = () => {
  return (
    <div className="projects">
      <div className="container">
        <div className="projects_box">
          <div className="project_box">
            <img src={silver} alt="" className="project_box_img" />
            <div className="project_mini_box">
              <h3 className="title project_mini_box_title">
                Silver <span>House</span>
              </h3>
              <p className="project_mini_box_text">Silver House Website Overview
                A clean and elegant landing page, likely designed for a real estate or luxury brand.
                It features a bold hero section, service highlights, gallery, and contact form.
                Smooth scrolling and a dark theme give it a premium, modern feel.
                Silver House Website Overview
                A clean and elegant landing page, likely designed for a real estate or luxury brand.
                It features a bold hero section, service highlights, gallery, and contact form.
                Smooth scrolling and a dark theme give it a premium, modern feel.
                Perfect as a template for showcasing high-end services or properties.Perfect as a template for showcasing high-end services or properties.</p>
              <div className="project_btn_box">
                <button className="project_btn">
                  <Link
                    target="_blank"
                    to="https://srk-amon.github.io/Silver-House/"
                    className="project_btn_link"
                  >
                    Visit site
                  </Link>
                </button>
                <button className="project_btn">
                  <Link
                    target="_blank"
                    to="https://github.com/SRK-Amon/Silver-House"
                    className="project_btn_link"
                  >
                    Visit GitHub
                  </Link>
                </button>
              </div>
            </div>
          </div>
          <div className="project_box">
            <img src={Nike} alt="" className="project_box_img" />
            <div className="project_mini_box">
              <h3 className="title project_mini_box_title">
                Ni<span>ke</span>
              </h3>
              <p className="project_mini_box_text">Nike Product Showcase
                A modern, responsive landing page for promoting Nike footwear and clothing.
                Features a bold hero section with eye-catching visuals and strong branding.
                Includes product cards with placeholder text, ready for dynamic content integration.
                Smooth navigation menu links to categories like sneakers, t-shirts, and more.
                Basic form section at the bottom adds structure for future user interaction.
                Built using clean HTML and CSS, fully deployed via GitHub Pages.</p>
              <div className="project_btn_box">
                <button className="project_btn">
                  <Link
                    target="_blank"
                    to="https://srk-amon.github.io/Nike/"
                    className="project_btn_link"
                  >
                    Visit site
                  </Link>
                </button>
                <button className="project_btn">
                  <Link
                    target="_blank"
                    to="https://github.com/SRK-Amon/Nike"
                    className="project_btn_link"
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
