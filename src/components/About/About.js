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
            نملك الأفكار الإبداعية التى تستطيع أن توفر لك أفضل الخدمات التقنية
            لإنشاء موقعك الإلكترونى أو برنامجك الإدارى أو تطبيقات الهواتف وكذلك
            التسويق الرقمى لنشاطك التجارى
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
                    تم تأسيس تكنو مصر فى نوفمبر 2014 للإبتكار فى مجال الويب و
                    تقنية المعلومات و التسويق الرقمى من خلال فريق عمل متميز
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
                    نسعى إلى تصميم أفكارك لتكون واجهتك على شبكة الإنترنت و نطور
                    أعمالك لتواكب تطور حلول الأعمال و الوصول إلى العملاء
                    المستهدفين
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
                    نهدف لـ تطوير مجتمع الويب من خلال تقديم خدمات و حلول خاصة فى
                    مجال تقنية نظم المعلومات
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
                    نسعى إلى الإرتقاء بمستوى الجودة و الدقة لنواكب التطور
                    التكنولوجى و تبسيط حلول الأعمال التقنية على المستخدم
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
