import { Link } from "react-router-dom";
import logo from "../assets/images/logo.jpg";
import telegram from "../assets/images/telegram.svg";
import instagram from "../assets/images/instagram.svg";
import facebook from "../assets/images/facebook.svg";
import youtube from "../assets/images/youtube.svg";
// import phone from "../assets/images/phone.svg"
const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer_box">
          <div className="footer_left_box">
            <h3 className="footer_left_box_title">Contacts</h3>
            <div className="footer_left_box_contacts">
                    <Link target="_blank" to="/" className="contacts_img"><img src={telegram} alt="" /></Link>
                    <Link target="_blank" to="/" className="contacts_img"><img src={instagram} alt="" /></Link>
                    <Link target="_blank" to="/" className="contacts_img"><img src={facebook} alt="" /></Link>
                    <Link target="_blank" to="/" className="contacts_img"><img src={youtube} alt="" /></Link>
                </div>
          </div>
          <img src={logo} alt="" />
          <div className="footer_right_box"></div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
