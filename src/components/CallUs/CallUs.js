import React from "react";

export default function CallUs() {
  return (
    <div className="call-us">
      <span className="overlay"></span>
      <div className="callus-info wow animate__zoomIn" data-wow-duration="1.5s">
        <h4>هل تريد الاستفسار عن احد رحلاتنا</h4>
        <p>
          قم بالإتصال بنا وسيقوم احد ممثلي خدمة العملاء بالرد على كافة
          استفساراتكم على مدار الساعة
        </p>
        <span>
          <h6>
            <i class="fab fa-whatsapp"></i>
            01068527853
          </h6>
          <h6>
            <i className="fas fa-mobile-alt"></i>
            01008855701
          </h6>
        </span>
      </div>
    </div>
  );
}
