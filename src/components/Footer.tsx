import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";

const Footer = () => {
  const [isSent, setIsSent] = useState(false);
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (form.current) {
      emailjs
        .sendForm(
          "service_mrs2gmr",
          "template_1atvw44",
          form.current,
          "2vAafyWokU5vCYmE9"
        )
        .then(
          (result: any) => {
            console.log(result.text);
            setIsSent(!isSent);
            setTimeout(() => {
              if (result.status === 200) {
                setIsSent(false);
              }
            }, 3000);
          },
          (error: any) => {
            console.log(error.text);
          }
        );
    }
  };
  return (
    <div className="footer">
      <div className="footer-childs">
        <h1>bate Properties</h1>
        <p>
          A trusted platform connecting landlords and tenants across Ethiopia.
          List properties with an affordable pay-per-post model or find verified
          apartments, condominiums and private houses near you.
        </p>
        <div className="info-cont">
          <i className="fa-solid fa-square-phone"></i>
          <p>+251 911 123 456</p>
        </div>
        <div className="info-cont">
          <i className="fa-regular fa-envelope"></i>
          <p>support@bate.com</p>
        </div>

        <div className="social-cont">
          <i className="fa-brands fa-facebook"></i>
          <i className="fa-brands fa-twitter"></i>
          <i className="fa-brands fa-telegram"></i>
          <i className="fa-brands fa-youtube"></i>
        </div>
      </div>
      <div className="footer-childs">
        <h1>COMPANY</h1>
        <a href="#/">About Us</a>
        <a href="#/">For Landlords</a>
        <a href="#/">Property Managers</a>
        <a href="#/">Reviews</a>
        <a href="#/">How It Works</a>
      </div>
      <div className="footer-childs">
        <h1>WORKING HOURS</h1>
        <p>Mon - Fri: 9:00 AM - 6:00 PM</p>
        <p>Sat: 10:00 AM - 4:00 PM</p>
        <p>Sun: Closed</p>
      </div>
      <div className="footer-childs">
        <h1>SUBSCRIPTION</h1>
        <p>Subscribe with your email to receive new listings and platform updates.</p>
        <form className="footer-form" ref={form} onSubmit={sendEmail}>
          <input
            type="email"
            placeholder="Enter Email Address"
            name="user_email"
          />
          <input type="submit" value="Send" />
        </form>
        <div
          style={{ display: isSent ? "flex" : "none" }}
          className="confirm-cont"
        >
          <img src="check.png" alt="" />
          <p>Subscribed successfully!</p>
        </div>
      </div>
      <p className="copy">©2025, bate Properties. All rights reserved.</p>
    </div>
  );
};

export default Footer;
