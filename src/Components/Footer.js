import React from "react";
import "./FooterStyle.css";
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="Footer">
      <footer className="footer bg-dark text-light text-center py-5 mt-5">
        Copyritght &copy; all reserved. Made with 💓 by me.
      </footer>
    </div>
  );
};

export default Footer;
