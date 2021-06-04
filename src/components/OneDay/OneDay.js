export default function DayOne() {
  return (
    <div id="one-day" className="one-day">
      <div className="container">
        <h2>رحلات سفارى لليوم الواحد</h2>
        <div className="all-trips wow animate__zoomIn" data-wow-duration="1.5s">
          <div className="trip trip-one">
            <div className="card-img card-one"></div>
            <div className="card-info card-info-one">
              <p>جولات</p>
              <p>القاهرة</p>
            </div>
            <ul className="trip-info">
              <li>الجمعة 4-6-2021</li>
              <li>ملاهى وندر لاند</li>
              <li>جولة فى شارع الحسين و المُعز</li>
              <li>نزهة نيلية</li>
              <li>مول كايرو فيستيفال</li>
            </ul>
            <a href="/" className="details details-1">
              تفاصيل الرحلة
            </a>
          </div>
          <div className="trip trip-two">
            <div className="card-img card-two"></div>
            <div className="card-info card-info-two">
              <p>جولات</p>
              <p>الأسكندرية</p>
            </div>
            <ul className="trip-info">
              <li>الجمعة 4-6-2021</li>
              <li>قلعة قايتباى</li>
              <li>متحف الأحياء المائية - الأكواريوم</li>
              <li>جولة حرة على كورنيش أسكندرية</li>
              <li>مول سان ستيفانو</li>
            </ul>
            <a href="/" className="details details-2">
              تفاصيل الرحلة
            </a>
          </div>
          <div className="trip trip-three">
            <div className="card-img card-three"></div>
            <div className="card-info card-info-three">
              <p>رحلة</p>
              <p>وادى الريان</p>
            </div>
            <ul className="trip-info">
              <li>الجمعة 4-6-2021</li>
              <li>الشلالات الطبيعية</li>
              <li>نزهة فى بحيرة قارون</li>
              <li>التزحلق على الرمال</li>
              <li>Color Festival</li>
            </ul>
            <a href="/" className="details details-3">
              تفاصيل الرحلة
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
