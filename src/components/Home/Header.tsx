import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import { useTranslation } from "react-i18next";

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const { t, i18n } = useTranslation();

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  return (
    <nav className="navbar navbar-expand-sm fixed-top">
      <div className="container-fluid nav-cont">
        <div className="nav-child1">
          <Link className="navbar-brand" to="/">
             <img className="logo logo1" src="Black.png" alt="" />
            {/* <img className="logo logo2" src="Black.png" alt="" />  */}
          </Link>
        </div>

        <div className="nav-child2a">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#/navbarNavDropdown"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link active" to="/#">
                  {t('home')}
                </Link>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/#about">
                  {t('about')}
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/#product"> {/* Changed to a tag with href */}
                  {t('Properties')}
                </a>
              </li>
              
              <li className="nav-item">
                <a className="nav-link" href="#testimonials">
                  {t('testimonials')}
                </a>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">
                  {t('contact')}
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="nav-child2b">
          <div
            className={`hamburger-icon ${isNavOpen && "gap"}`}
            id="icon"
            onClick={toggleNav}
          >
            <div className={`icon-1 ${isNavOpen && "a"}`} id="a"></div>
            <div className={`icon-2 ${isNavOpen && "c"}`} id="b"></div>
            <div className={`icon-3 ${isNavOpen && "b"}`} id="c"></div>
          </div>

          <div id="nav" className={isNavOpen ? "show" : ""}>
            <ul className="ul">
              <li className="li li1">
                <Link to="/">{t('home')}</Link>
              </li>
              <li className="li li3">
                <a href="/#about">{t('about')}</a>
              </li>
              <li className="li li2">
                <Link to="/vehicles">{t('Properties')}</Link>
              </li>
              
              <li className="li li4">
                <a href="#testimonials">{t('testimonials')}</a>
              </li>
              <li className="li li5">
                <Link to="/contact">{t('contact')}</Link>
              </li>
              <li className="li">
  <select
    className="sign"
    onChange={(e) => changeLanguage(e.target.value)}
    value={i18n.language}
  >
    <option value="" disabled>
      {t('select_language')}
    </option>
    <option value="am">{t('amharic_option')}</option>
    <option value="en">{t('english_option')}</option>
    <option value="om">{t('afan_oromo_option')}</option>
  </select>
</li>


            </ul>
          </div>
        </div>

        <div className="nav-child3">
  <Button
  variant="outlined"
  sx={{
    width: "100%",
    padding: "5px 1rem",
    maxWidth: "120px",
    fontSize: "14px",
    textTransform: "capitalize",
    color: "#000000",
    border: "2px solid #222a2f",
    "&:hover": {
      backgroundColor: "#222a2f",
      color: "white",
      border: "2px solid #222a2f",
    },
  }}
  // Remove onClick since we now use onChange of <select>
>
  <select
    style={{
      width: "100%",
      border: "none",
      background: "transparent",
      fontSize: "14px",
      textTransform: "capitalize",
      cursor: "pointer",
      outline: "none",
      color: "#000000",
    }}
    value={i18n.language}
    onChange={(e) => changeLanguage(e.target.value)}
  >
    <option value="" disabled>
      {t('language')}
    </option>
    <option value="am">{t('amharic_option')}</option>
    <option value="en">{t('english_option')}</option>
    <option value="om">{t('afan_oromo_option')}</option>
  </select>
</Button>

  <div>
    {/* <i className="fa-regular fa-circle-user account"></i>
    <i className="fa-solid fa-angle-up"></i> */}
  </div>
</div>

      </div>
    </nav>
  );
};

export default Header;