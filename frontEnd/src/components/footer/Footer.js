import { FaFacebookF } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import { IoLogoTwitter } from "react-icons/io";

import "./footer.css";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="website-author">
        @This website was made by Benjamin Harris
      </div>
      <div className="social-media-icons">
        <FaFacebookF size={23} />
        <GrInstagram size={23} />
        <IoLogoTwitter size={23} />
      </div>
    </div>
  );
};

export default Footer;
