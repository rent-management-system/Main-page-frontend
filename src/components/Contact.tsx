import Header from "./Home/Header.tsx";
import Footer from "./Footer.tsx";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t } = useTranslation();
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
    <div className="contact">
      <Header />
      <img src="contact_bg.png" alt="" />
      <div className="contc-cont">
        <div className="contc-descrp">
          <h1>{t('need_additional_information')}</h1>
          <p>
            {t('contact_page_description')}
          </p>
          <div className="info-cont">
            <i className="fa-solid fa-square-phone"></i>
            <p>(+251)912131415</p>
          </div>
          <div className="info-cont">
            <i className="fa-regular fa-envelope"></i>
            <p>Bete@gmail.com</p>
          </div>
          <div className="info-cont">
            <i className="fa-solid fa-location-dot"></i>
            <p>Adama, Ethiopia</p>
          </div>
        </div>
        <form className="contc-form" ref={form} onSubmit={sendEmail}>
          <div
            style={{ display: isSent ? "flex" : "none" }}
            className="confirm-cont"
          >
            <img src="check.png" alt="" />
            <p>{t('sent_successfully')}</p>
          </div>
          <label htmlFor="name">
            {t('name')}<b>*</b>
          </label>
          <input
            type="name"
            placeholder={t('enter_your_name')}
            name="user_name"
            id="name"
          />
          <label htmlFor="email">
            {t('email')}<b>*</b>
          </label>
          <input
            type="email"
            placeholder={t('enter_email_address')}
            name="user_email"
            id="email"
          />
          <label htmlFor="textarea">
            {t('textarea')}<b>*</b>
          </label>
          <textarea
            name="message"
            id="textarea"
            cols={30}
            rows={10}
            placeholder={t('write_your_message_here')}
          ></textarea>
          <input type="submit" value={t('send')} />
        </form>
      </div>

      <Footer />
    </div>
  );
};
export default Contact;
