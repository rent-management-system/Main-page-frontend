import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();
  const [isSent, setIsSent] = useState(false);
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!email) {
      setError("enter real email");
      return;
    }

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
        <h1>{t('footer_title')}</h1>
        <p>
          {t('footer_description')}
        </p>
        <div className="info-cont">
          <i className="fa-solid fa-square-phone"></i>
          <p>+251 911 123 456</p>
        </div>
        <div className="info-cont">
          <i className="fa-regular fa-envelope"></i>
          <p>support@Bete.com</p>
        </div>

        <div className="social-cont">
          <i className="fa-brands fa-facebook"></i>
          <i className="fa-brands fa-twitter"></i>
          <i className="fa-brands fa-telegram"></i>
          <i className="fa-brands fa-youtube"></i>
        </div>
      </div>
      <div className="footer-childs">
        <h1>{t('company_title')}</h1>
        <a href="#/">{t('about_us_link')}</a>
        <a href="#/">{t('for_landlords_link')}</a>
        <a href="#/">{t('property_managers_link')}</a>
        <a href="#/">{t('reviews_link')}</a>
        <a href="#/">{t('how_it_works_link')}</a>
      </div>
      <div className="footer-childs">
        <h1>{t('working_hours_title')}</h1>
        <p>{t('working_hours_mon_fri')}</p>
        <p>{t('working_hours_sat')}</p>
        <p>{t('working_hours_sun')}</p>
      </div>
      <div className="footer-childs">
        <h1>{t('subscription_title')}</h1>
        <p>{t('subscription_description')}</p>
        <form className="footer-form" ref={form} onSubmit={sendEmail}>
          <input
            type="email"
            placeholder={t('enter_email_placeholder')}
            name="user_email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input type="submit" value={t('send_button')} />
        </form>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <div
          style={{ display: isSent ? "flex" : "none" }}
          className="confirm-cont"
        >
          <img src="check.png" alt="" />
          <p>{t('subscribed_success_message')}</p>
        </div>
      </div>
      <p className="copy">{t('copyright_text')}</p>
    </div>
  );
};

export default Footer;

