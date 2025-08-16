import { Link } from "react-router-dom";
import logo from "../assets/images/logo_R.M.R.jpg";
import telegram from "../assets/images/telegram.svg";
import instagram from "../assets/images/instagram.svg";
import facebook from "../assets/images/facebook.svg";
import youtube from "../assets/images/youtube.svg";
import phone from "../assets/images/phone.svg";
import gmail from "../assets/images/gmail.svg";
import whatsapp from "../assets/images/whatsapp.svg";
import hh from "../assets/images/hh.webp";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer_box">
          <div className="footer_left_box">
            <h3 className="footer_left_box_title">
              How you can contact with me :
            </h3>
            <div className="footer_left_box_contacts">
              <Link
                target="_blank"
                to="/https://t.me/General4757"
                className="contacts_img"
              >
                <img src={telegram} alt="" />
              </Link>
              <Link
                target="_blank"
                to="https://tashkent.hh.uz/profile/me?hhtmFrom=ProfileActivator"
                className="contacts_img"
              >
                <img src={hh} alt="" />
              </Link>
              <a
                target="_blank"
                href="tel:+998998335733"
                className="contacts_img"
              >
                <img src={phone} alt="" />
              </a>
              <a
                target="_blank"
                href="mailto:mahmudjon4757@gmail.com"
                className="contacts_img"
              >
                <img src={gmail} alt="" />
              </a>
              <a
                target="_blank"
                href="https://wa.me/998998335733"
                className="contacts_img"
              >
                <img src={whatsapp} alt="" />
              </a>
            </div>
            <h3 className="footer_left_box_title">Soon:</h3>
            <div className="footer_left_box_contacts">
              <Link target="_blank" to="/" className="contacts_img">
                <img src={instagram} alt="" />
              </Link>
              <Link target="_blank" to="/" className="contacts_img">
                <img src={facebook} alt="" />
              </Link>
              <Link target="_blank" to="/" className="contacts_img">
                <img src={youtube} alt="" />
              </Link>
            </div>
          </div>
          <img src={logo} alt="" className="footer_box_logo"/>
          <div className="footer_right_box">
            <h2 className="footer_right_box_title">Every journey starts with a first step — here's mine. ⬇</h2>
            <button className="footer_right_box_btn"><a  href="https://tashkent.hh.uz/resume_converter/%D0%A0%D0%B0%D1%85%D0%B8%D0%BC%D0%B6%D0%B0%D0%BD%D0%BE%D0%B2%20%D0%9C%D0%B0%D1%85%D0%BC%D1%83%D0%B4%D0%B6%D0%BE%D0%BD%20%D0%A0%D0%B0%D1%81%D1%83%D0%BB%D0%BE%D0%B2%D0%B8%D1%87.pdf?hash=7632107cff0f1665960039ed1f32456f33346a&type=pdf&hhtmFrom=resume_list&hhtmSource=resume" rel="noopener noreferrer">Download CV</a></button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
