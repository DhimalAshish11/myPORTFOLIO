import React from "react";
import "./FooterStyle.css";
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="Footer">
      <div className="social">
        <FaFacebook
          size={20}
          style={{ color: "white", marginRight: "1.5rem" }}
        />
        <FaLinkedin
          size={20}
          style={{ color: "white", marginRight: "1.5rem" }}
        />
        <FaInstagram
          size={20}
          style={{ color: "white", marginRight: "1.5rem" }}
        />
        <FaGithub size={20} style={{ color: "white", marginRight: "1.5rem" }} />
      </div>

      <footer class="footer bg-dark text-light text-center py-5 mt-5">
        Copyritght &copy; all reserved. Made with 💓 by me.
      </footer>
    </div>
  );
};

export default Footer;
