import Navbar from "../Navbar/Navbar";

export default function Header() {
  return (
    <div className="header">
      <Navbar />
      <div className="overlay"></div>
      <div className="head-info">
        <div
          className="hero wow animate__zoomInRight"
          data-wow-duration="1.5s"
        ></div>
        <div
          className="offers wow animate__zoomInLeft"
          data-wow-duration="1.5s"
        >
          <div className="offer offer-one">
            <p>هتشوف الجنة بعيون سفاري</p>
          </div>
          <div className="offer offer-two">
            <p>رحلاتنا من صنع أفكارنا</p>
          </div>
          <div className="offer offer-three">
            <p>إحنا بتوع سانت كاترين</p>
          </div>
        </div>
      </div>
    </div>
  );
}
