import frontend from "../assets/images/frontend.png"

const Home = () => {
  return (
    <div>
      <div className="home">
        <div className="container">
          <div className="home_box">
            <h2 className="home_box_title">Hi! My name's </h2>
            <h1 className="home_box_name">Mahmudjon</h1>
            <h3 className="home_box_job">Front-end Developer</h3>
            <div className="home_mini_box">
              <button className="home_mini_box_btn"><a href="#aboutme">Abot me</a></button>
              <button className="home_mini_box_btn"><a href="#aboutme">Work expiriense</a></button>
              <button className="home_mini_box_btn"><a href="#aboutme">Education</a></button>
            </div>
          </div>
        </div>
        <div className="aboutme" id="aboutme">
          <div className="container">
            <div className="aboutme_box">
              <h1 className="aboutme_box_title"><span>About <span>Me</span> </span></h1>
              <div className="aboutme_mini_box">
                <div className="aboutme_info_box">
                  <h3 className="aboutme_info_box_title"></h3>
                <p className="aboutme_info_box_text">I am Junior frontend developer which started his journey at <span> Proweb </span>Academy  in 28th November 2024 year , with none skills or information about IT. After 8 months ( persistent \ swift \ difficult and demanding patience road) he graduated with a certificate and diploma of completion of training.but even after that he did not stop on the way and began a deep study of this wonderful IT sphere (Frontend). </p>
                </div>
                <img className="aboutme_mini_box_img" src={frontend} alt="" />
              </div>  
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
