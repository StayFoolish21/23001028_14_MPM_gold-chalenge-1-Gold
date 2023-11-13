import React from "react";
import "./style.css";

const Footer = () => {
  return (
    <div>
      <div className="footer-container">
        <div className="footer-detail">
          <p>Jalan Suroyo No. 161 Mayangan Kota Probolinggo, 67213</p>
          <p>binarcarrental@gmail.com</p>
          <p>081-233-334-808</p>
        </div>
        <div className="footer-list">
          <ul className="menu-list">
            <li>
              <a href="#services">Our Services</a>
            </li>
            <li>
              <a href="#products">Why Us</a>
            </li>
            <li>
              <a href="#testi">Testimonial</a>
            </li>
            <li>
              <a href="#faq">FAQ</a>
            </li>
          </ul>
        </div>
        <div className="footer-connect">
          <p>Connect with us</p>
          <div className="icon-footer">
            <i class="bi bi-facebook"></i>
            <i class="bi bi-instagram"></i>
            <i class="bi bi-twitter"></i>
            <i class="bi bi-envelope"></i>
            <i class="bi bi-twitch"></i>
          </div>
        </div>
        <div className="footer-copyright">
          <p>Copyright &copy; 2022 Binar Car Rental</p>
          <div className="logo-square"></div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
