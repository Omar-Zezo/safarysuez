import React from "react";

import BlogImg from "../../imgs/trip.webp";

export default function Footer() {
  return (
    <div id="footer" className="footer">
      <div className="container">
        <div className="footer-content">
          <section className="section-two">
            <div className="adresses">
              <div>
                <i className="fas fa-map-marker-alt"></i>
                <h6>
                  شارع باراديس برج شنتكلير بجوار البنك الأهلي (بداخل الممر)
                </h6>
              </div>
              <div>
                <i className="fas fa-envelope"></i>
                <h6>info@safarysuez.com</h6>
              </div>
              <div>
                <i className="fas fa-mobile-alt"></i>
                <h6>01008855701</h6>
              </div>
              <div>
                <i className="fa fa-phone"></i>
                <h6>0502265598</h6>
              </div>
              <div className="social">
                <a href="/" className="social-link">
                  <i class="fab fa-facebook-f"></i>
                </a>
                <a href="/" className="social-link">
                  <i class="fab fa-twitter"></i>
                </a>
                <a href="/" className="social-link">
                  <i class="fab fa-instagram"></i>
                </a>
                <a href="/" className="social-link">
                  <i class="fab fa-whatsapp"></i>
                </a>
              </div>
            </div>
            <div className="map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3456.466137133211!2d32.55488513540826!3d29.96603102922866!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145625765e873361%3A0x758c004011a678d5!2z2LPZgdin2LHZiiBzdWV6!5e0!3m2!1sar!2seg!4v1622752386580!5m2!1sar!2seg"
                allowfullscreen=""
                loading="lazy"
              ></iframe>
            </div>
          </section>
          <div className="end-footer">
            <p>
              كافة الحقوق محفوظة لشركة سفارى SUEZ للسفر و الرحلات الداخلية 2017
              -2021
            </p>
            <p>
              برمجة و تصميم{" "}
              <a href="https://www.facebook.com/omar.zezo.5268" target="blank">
                Omar Zezo
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
