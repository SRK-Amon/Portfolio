import { motion } from "framer-motion";

import frontend from "../assets/images/frontend.png";
import Avo from "../assets/images/AVO.jpg";
import Dentmed from "../assets/images/Dentmed.png";
import wsa from "../assets/images/WallStreetAcademy.jpg";
import cambridge from "../assets/images/Cambridge.webp";
import proweb from "../assets/images/Proweb.jpg";

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
                <a href="#aboutme">About me</a>
              </button>
              <button className="home_mini_box_btn">
                <a href="#experience">Work expirience</a>
              </button>
              <button className="home_mini_box_btn">
                <a href="#education">Education</a>
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
              <div className="quote">
                <motion.blockquote
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1 }}
                  viewport={{ once: true }}
                >
                  <p>
                    "If your code works on the first try,
                    <span> you’ve probably forgotten something.</span>"
                  </p>
                  <footer>— Programmer's wisdom 💻</footer>
                </motion.blockquote>
              </div>
            </div>
          </div>
        </section>
        <section className="experience" id="experience">
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
              <div className="experience_work_box">
                <div className="experience_work_mini_box">
                  <img src={Dentmed} alt="" />
                  <div className="experience_info_box">
                    <h3 className="experience_info_box_title">🦷 Dentmed</h3>
                    <p className="experience_info_box_text">
                      Dentmed is a company specializing in the distribution of
                      high-quality dental materials and equipment. Its mission
                      is to provide dental professionals with reliable,
                      innovative, and effective solutions for modern dentistry.
                    </p>
                    <p className="experience_info_box_text">
                      🛒 Wide product range — everything from dental instruments
                      to consumables and care products.
                    </p>
                    <p className="experience_info_box_text">
                      🚚 Fast & reliable delivery — efficient logistics to
                      ensure clinics and professionals get what they need on
                      time.
                    </p>
                    <p className="experience_info_box_text">
                      💡 Professional support — expert guidance and product
                      recommendations for dental practices.
                    </p>
                    <p className="experience_info_box_text">
                      🔬 Quality & innovation — only trusted brands and
                      certified materials used in dentistry worldwide.
                    </p>
                  </div>
                </div>
                <div className="experience_worktime_box">
                  <h3 className="worktime_post">
                    Post : <span>call-center operator</span>
                  </h3>
                  <p className="worktime_time">
                    Date :{" "}
                    <span> October 2024 — February 2025 ,(5 months)</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="education" id="education">
          <div className="container">
            <div className="education_box">
              <h2 className="title">
                Edu<span>cation</span>
              </h2>
              <div className="education_mini_box">
                <div className="education_info_box">
                  <img src={proweb} alt="" className="education_info_box_img" />
                  <div className="education_info_mini_box">
                    <h2 className="education_info_mini_box_title">
                    💻 PROWEB Academy
                    </h2>
                    <p className="education_info_mini_box_text">
                    PROWEB Academy is a modern IT education center specializing in practical training for web development and digital technologies. Focused on real-world skills, it offers intensive programs in:
                    </p>
                    <p className="education_info_mini_box_text">
                    🧠 Frontend development — HTML, CSS, JavaScript, React, TypeScript
                    </p>
                    <p className="education_info_mini_box_text">
                    🔧 Project-based learning — build real applications from day one
                    </p>
                    <p className="education_info_mini_box_text">
                    🎓 Career-ready education — hands-on tasks, mentorship, and portfolio building
                    </p>
                    <p className="education_info_mini_box_text">
                    🚀 Fast-track growth — designed for beginners with no prior experience in tech
                    </p>
                  </div>
                </div>
                <p className="education_mini_box_text">
                  Date : <span> 2024 year — till now , (8 months)</span>
                </p>
              </div>
              <div className="education_mini_box">
                <div className="education_info_box">
                  <img src={cambridge} alt="" className="education_info_box_img" />
                  <div className="education_info_mini_box">
                    <h2 className="education_info_mini_box_title">
                    📘 Cambridge Learning Center
                    </h2>
                    <p className="education_info_mini_box_text">
                    Cambridge Learning Center is an international educational organization that provides high-quality English language and academic preparation programs. With a focus on modern teaching methods and personalized learning, it helps students build strong foundations in:
                    </p>
                    <p className="education_info_mini_box_text">
                    🗣️ English fluency — grammar, speaking, writing, and comprehension
                    </p>
                    <p className="education_info_mini_box_text">
                    🎯 Exam preparation — IELTS, TOEFL, and other global standards
                    </p>
                    <p className="education_info_mini_box_text">
                    👨‍🏫 Interactive learning — student-centered classes with certified instructors
                    </p>
                    <p className="education_info_mini_box_text">
                    🌍 Global perspective — equipping learners with skills for education and career abroad
                    </p>
                  </div>
                </div>
                <p className="education_mini_box_text">
                  Date : <span> 2023 year — 2024 year , (9 months)</span>
                </p>
              </div>
              <div className="education_mini_box">
                <div className="education_info_box">
                  <img src={wsa} alt="" className="education_info_box_img" />
                  <div className="education_info_mini_box">
                    <h2 className="education_info_mini_box_title">
                      📈 Wall Street Academy
                    </h2>
                    <p className="education_info_mini_box_text">
                    Wall Street Academy is a professional English learning center based in Uzbekistan, focused on practical language skills for real-life and career use. It offers dynamic, immersive courses that help learners gain fluency and confidence through:
                    </p>
                    <p className="education_info_mini_box_text">
                    🗣 Speaking-focused lessons — boost communication skills with native-style training
                    </p>
                    <p className="education_info_mini_box_text">
                    📚 Structured programs — from beginner to advanced levels
                    </p>
                    <p className="education_info_mini_box_text">
                    👨‍🏫 Experienced teachers — certified, supportive instructors
                    </p>
                    <p className="education_info_mini_box_text">
                    🎯 Goal-oriented learning — ideal for study abroad, work, and international exams (IELTS, TOEFL )
                    </p>
                    <p className="education_info_mini_box_text">
                    🌍 Modern approach — interactive, real-world English for global opportunities
                    </p>
                  </div>
                </div>
                <p className="education_mini_box_text">
                  Date : <span> 2022 year — 2023 year , (1 year)</span>
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
