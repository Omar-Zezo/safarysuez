import { useState } from "react";

import Logo from "../../imgs/logo.webp";

export default function Navbar() {
  const [nav, setNav] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setNav(true);
    } else {
      setNav(false);
    }
  };

  const handleMenu = () => {
    document.querySelector(".nav-list").classList.toggle("show");
  };

  // nav On Scroll Effect
  window.addEventListener("scroll", handleScroll);
  return (
    <div className="navigation">
      <nav className={nav ? "nav fixed" : "nav"}>
        <div className="container">
          <div className="logo">
            <img src={Logo} alt="logo" />
            <a href="/">سـفـارى suez</a>
          </div>
          <ul className="nav-list">
            <li>
              <a href="/">الرئيسية</a>
            </li>
            <li>
              <a href="#about">من نحن</a>
            </li>
            <li>
              <a href="#one-day">رحلات اليوم الواحد</a>
            </li>
            <li>
              <a href="#summer-offers">عروض الصيف</a>
            </li>
            <li>
              <a href="#teamwork">أسرة سفارى</a>
            </li>
            <li>
              <a href="#footer">إتصل بنا</a>
            </li>
          </ul>
          <span className="toggle-menu" onClick={handleMenu}>
            <i className="fas fa-bars"></i>
          </span>
        </div>
      </nav>
    </div>
  );
}
