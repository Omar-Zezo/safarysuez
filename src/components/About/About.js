import AboutImg from "../../imgs/logo.webp";

export default function About() {
  return (
    <div id="about" className="about">
      <div className="container">
        <div className="about-container">
          <div className="title">
            <h2
              className="about-title wow animate__zoomIn"
              data-wow-duration="1.5s"
            >
              شركة سفارى SUEZ للسفر و السياحة الداخلية
            </h2>
          </div>
          <p className="wow animate__zoomIn" data-wow-duration="1.5s">
            نملك الأفكار الإبداعية التى تستطيع أن توفر لك أفضل الرحلات الترفيهية
            لإسعادك، مع سفارى هتلاقى كل برامج الرحلات اللى نفسك فيها رحلتك مع سفارى ليها طعم مختلف سواء مع العيلة أو الأصحاب.
          </p>
          <div className="about-inner">
            <div className="about-items">
              <div
                className="item wow animate__zoomIn"
                data-wow-duration="1.5s"
              >
                <i className="fas fa-building"></i>
                <span>
                  <h4>نشأتنا</h4>
                  <p>
                    تم تأسيس سفارى SUEZ فى نوفمبر 2017 للسفر و السياحة الداخلية 
                    و الرحلات الترفيهية فى جميع محافظات مصر
                  </p>
                </span>
              </div>
              <div
                className="item wow animate__zoomIn"
                data-wow-duration="1.5s"
              >
                <i className="fas fa-paint-brush"></i>{" "}
                <span>
                  <h4>رسالتنا</h4>
                  <p>
                    نسعى إلى توفير جميع البرامج الترفيهية و الرحلات المختلفة فى كل محافظات مصر بأقل الأسعار مع سفارى هتلف مصر كلها من غير ما تدفع تدفع كتيرر
                  </p>
                </span>
              </div>
              <div
                className="item wow animate__zoomIn"
                data-wow-duration="1.5s"
              >
                <i className="fas fa-chart-line"></i>{" "}
                <span>
                  <h4>هدفنا</h4>
                  <p>
                    هدفنا هو توفير أفضل الرحلات و العروض لأهلنا فى السويس 
                    خاصة و كل أهلنا فى حميع المحافظات
                  </p>
                </span>
              </div>
              <div
                className="item wow animate__zoomIn"
                data-wow-duration="1.5s"
              >
                <i className="fas fa-chess-board"></i>{" "}
                <span>
                  <h4>إستراتيجياتنا</h4>
                  <p>
                    نسعى إلى الإرتقاء بمستوى و جودة رحلاتنا لتناسب الجميع من خلال التنوع فى برامج الرحلات لتناسب الشباب و الأطفال و الكبار 
                  </p>
                </span>
              </div>
            </div>
            <div className="about-img">
              <div
                className="download-cv wow animate__zoomIn"
                data-wow-duration="1.5s"
              >
                <img src={AboutImg} alt="about" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
