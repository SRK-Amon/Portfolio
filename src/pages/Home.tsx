import frontend from "../assets/images/frontend.png";
import Avo from "../assets/images/AVO.jpg";
import Dentmed from "../assets/images/Dentmed.png";

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
              <button className="home_mini_box_btn">
                <a href="#aboutme">Abot me</a>
              </button>
              <button className="home_mini_box_btn">
                <a href="#aboutme">Work expirience</a>
              </button>
              <button className="home_mini_box_btn">
                <a href="#aboutme">Education</a>
              </button>
            </div>
          </div>
        </div>
        <section className="aboutme" id="aboutme">
          <div className="container">
            <div className="aboutme_box">
              <h1 className="title">
                About <span>Me</span>
              </h1>
              <div className="aboutme_mini_box">
                <div className="aboutme_info_box">
                  <h3 className="aboutme_info_box_title"></h3>
                  <p className="aboutme_info_box_text">
                    I am Junior frontend developer which started his journey at{" "}
                    <span> Proweb </span>Academy in 28th November 2024 year ,
                    with none skills or information about IT. After 8 months (
                    persistent \ swift \ difficult and demanding patience road )
                    he graduated with a certificate and diploma of completion of
                    training, but even after that he did not stop on the way and
                    began a deep study of this wonderful IT sphere (Frontend).{" "}
                  </p>
                </div>
                <img className="aboutme_mini_box_img" src={frontend} alt="" />
              </div>
            </div>
          </div>
        </section>
        <section className="experience">
          <div className="container">
            <div className="experience_box">
              <h2 className="title">
                Work <span>Experiense</span>
              </h2>
              <div className="experience_work_box">
                <div className="experience_work_mini_box">
                  <img src={Avo} alt="" />
                  <div className="experience_info_box">
                    <h3 className="experience_info_box_title">🏦 AVO Bank</h3>
                    <p className="experience_info_box_text">
                      AVO Bank is a next-generation digital bank offering modern
                      financial services through mobile and web applications. It
                      was founded with the goal of making banking as simple,
                      fast, and accessible as possible.
                    </p>
                    <p className="experience_info_box_text">
                      📱 Mobile-first approach — all services are available
                      online without visiting a branch.
                    </p>
                    <p className="experience_info_box_text">
                      💳 Cards, transfers, payments — manage your finances
                      easily in one app.
                    </p>
                    <p className="experience_info_box_text">
                      🔒 Security & technology — advanced data protection and
                      user-friendly interface.
                    </p>
                    <p className="experience_info_box_text">
                      🌍 Innovation & support — 24/7 customer service, regular
                      updates, and modern features.
                    </p>
                  </div>
                </div>
                <div className="experience_worktime_box">
                  <h3 className="worktime_post">
                    Post : <span>call-center operator</span>
                  </h3>
                  <p className="worktime_time">
                    Date : <span> March 2025 — till now ,(5 months)</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
