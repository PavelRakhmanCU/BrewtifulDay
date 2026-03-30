import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { IoIosCall } from "react-icons/io";
import { FaEnvelope } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="footer">
      <div className="email-container">
        <div className="email-info footer-contact-row">
          <span className="footer-contact-icon" aria-hidden="true">
            <FaEnvelope />
          </span>
          <span className="footer-contact-text">brewtifulday@example.com</span>
        </div>
      </div>
      <div className="telephone-container">
        <div className="telephone-info footer-contact-row">
          <span className="footer-contact-icon" aria-hidden="true">
            <IoIosCall />
          </span>
          <span className="footer-contact-text">123-456-7890</span>
        </div>
      </div>
      <div className="social-media-container">
        <div className="social-media-icons">
          <span><FaFacebookF></FaFacebookF></span>
          <span><FaInstagramSquare></FaInstagramSquare></span>
          <span><FaTwitter></FaTwitter></span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
