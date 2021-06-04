import React from "react";

export default function Subscribe() {
  return (
    <div className="subscribe">
      <div className="overlay"></div>
      <div className="sub-container">
        <h3 className="wow animate__zoomIn" data-wow-duration="1.5s">
          إشترك معنا بالقائمة البريدية
        </h3>
        <div className="container wow animate__zoomIn" data-wow-duration="1.5s">
          <form action="">
            <input type="text" name="name" placeholder="الأسم" required />
            <input
              type="email"
              name="email"
              placeholder="البريد الإلكترونى"
              required
            />
            <input type="text" name="phone" placeholder="رقم الهاتف" required />
            <button type="submit">إشتراك</button>
          </form>
        </div>
      </div>
    </div>
  );
}
