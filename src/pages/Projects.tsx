import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import { Products } from "../informations";
const Projects = () => {
  return (
    <div className="projects">
      <div className="container">
        <Swiper
          navigation={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Navigation, Autoplay]}
          className="projects_box"
        >
          {Products.map((product) => (
            <SwiperSlide className="card_box" key={product.id}>
              <img src={product.img} alt="" className="card_box_img" />
              <div className="card_mini_box">
                <h3 className="title card_mini_box_title">{product.title}</h3>
                <p className="card_mini_box_text">{product.text}</p>
                <div className="card_btn_box">
                  <button className="card_btn">
                    <Link
                      target="_blank"
                      to={product.siteBtn}
                      className="card_btn_link"
                    >
                      Visit site
                    </Link>
                  </button>
                  <button className="card_btn">
                    <Link
                      target="_blank"
                      to={product.gitHubBtn}
                      className="card_btn_link"
                    >
                      Visit GitHub
                    </Link>
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Projects;
