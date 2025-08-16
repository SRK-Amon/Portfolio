import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";


import "swiper/css";
import "swiper/css/navigation";
 import { skills } from "../informations";
const Skills = () => {
  return (
    <div className="skills">
      <div className="container">
        <Swiper
          navigation={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Navigation, Autoplay]}
          className="skills_box"
        >
          {skills.map((skills) => (
            <SwiperSlide className="skills_mini_box" key={skills.id}>
              <img src={skills.img} alt="" className="skills_mini_box_img"/>
              <p className="skills_mini_box_text">{skills.text}</p>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Skills;
