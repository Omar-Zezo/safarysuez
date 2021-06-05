import React from "react";
import PicOne from "../../imgs/pic01.webp";
import PicTwo from "../../imgs/pic02.webp";
import PicThree from "../../imgs/pic03.webp";
import PicFour from "../../imgs/pic04.webp";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";

// import Swiper core and required modules
import SwiperCore, { Pagination, Autoplay } from "swiper/core";

// install Swiper modules
SwiperCore.use([Pagination, Autoplay]);

export default function Reviews() {
  return (
    <div className="reviews wow animate__zoomIn" data-wow-duration="1.5s">
      <h2>أراء العملاء فى سفارى</h2>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        autoplay={{ disableOnInteraction: true, delay: 20000 }}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          577: {
            slidesPerView: 2,
          },
          991: {
            slidesPerView: 3,
          }
        }}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="review review-one">
            <p>
              كانت أول مرة أطلع مع سفاري بس حرفياً مش هتبقي أخر مرة بجد يعني
              أحلي باص أنبسطت جداً جداً والمشرف حاتم كان زوق جدا ومحترم ومسبناش
              خالص دا غير اللعب اللي كان ف الباص والأغاني بجد يوم تحفة أنا مكنتش
              عايزه أروح مفيش اي شكوي حرفياً من بداية اليوم ل أخره عظمة أوي
              واليوم كان في حاجات حلوة جداً جداً وان شاء الله مش أخر رحلة{" "}
            </p>
            <span>&#9733;&#9733;&#9733;&#9733;&#9733;</span>
          </div>
          <img src={PicOne} alt="rev-1" />
        </SwiperSlide>
        <SwiperSlide>
          <div className="review review-one">
            <p>
              اجمد رحله بمعنى الكلمه من غير مبالغه مااتبسطش ف رحله غير ف رحله
              سفاري هي أول مره ومش آخر مره أن شاء الله كنا مع حاتم ف باص 14 وبجد
              اليوم كان حلو جدا مكناش عاوزين نروح 😂♥️♥️♥️♥️♥️♥️ كل الدعم ل
              سفاري🔥🔥🔥
            </p>
            <span>&#9733;&#9733;&#9733;&#9733;&#9733;</span>
          </div>
          <img src={PicTwo} alt="rev-1" />
        </SwiperSlide>
        <SwiperSlide>
          <div className="review review-one">
            <p>
              من اجمل الرحلات الي طلعتها احترام وادب وضحك وهزار م القلب ربنا
              يديمها علينا جميعا ومشرفين زي العسل باص ٨ كلو بناسه قمررر+😹 عبده
              و مؤمن المشرفين احلي ضحك وهزار معاهم واطيبين جدا ربنا معاكم ومن
              نجاح لنجاح والمره الي جايه هنرقص الباص كلو زي م رقصنا امبارح ي
              مؤمن😹😹🤍🤍🤍🤍🤍🤍🤍🤍🤍🔥{" "}
            </p>
            <span>&#9733;&#9733;&#9733;&#9733;&#9733;</span>
          </div>
          <img src={PicThree} alt="rev-1" />
        </SwiperSlide>
        <SwiperSlide>
          <div className="review review-one">
            <p>
              كانت أول مرة أطلع مع سفاري بس حرفياً مش هتبقي أخر مرة بجد يعني
              أحلي باص أنبسطت جداً جداً والمشرف حاتم كان زوق جدا ومحترم ومسبناش
              خالص دا غير اللعب اللي كان ف الباص والأغاني بجد يوم تحفة أنا مكنتش
              عايزه أروح مفيش اي شكوي حرفياً من بداية اليوم ل أخره عظمة أوي
              واليوم كان في حاجات حلوة جداً جداً وان شاء الله مش أخر رحلة{" "}
            </p>
            <span>&#9733;&#9733;&#9733;&#9733;&#9733;</span>
          </div>
          <img src={PicFour} alt="rev-1" />
        </SwiperSlide>
        <SwiperSlide>
          <div className="review review-one">
            <p>
              كانت أول مرة أطلع مع سفاري بس حرفياً مش هتبقي أخر مرة بجد يعني
              أحلي باص أنبسطت جداً جداً والمشرف حاتم كان زوق جدا ومحترم ومسبناش
              خالص دا غير اللعب اللي كان ف الباص والأغاني بجد يوم تحفة أنا مكنتش
              عايزه أروح مفيش اي شكوي حرفياً من بداية اليوم ل أخره عظمة أوي
              واليوم كان في حاجات حلوة جداً جداً وان شاء الله مش أخر رحلة{" "}
            </p>
            <span>&#9733;&#9733;&#9733;&#9733;&#9733;</span>
          </div>
          <img src={PicOne} alt="rev-1" />
        </SwiperSlide>
        <SwiperSlide>
          <div className="review review-one">
            <p>
              كانت أول مرة أطلع مع سفاري بس حرفياً مش هتبقي أخر مرة بجد يعني
              أحلي باص أنبسطت جداً جداً والمشرف حاتم كان زوق جدا ومحترم ومسبناش
              خالص دا غير اللعب اللي كان ف الباص والأغاني بجد يوم تحفة أنا مكنتش
              عايزه أروح مفيش اي شكوي حرفياً من بداية اليوم ل أخره عظمة أوي
              واليوم كان في حاجات حلوة جداً جداً وان شاء الله مش أخر رحلة{" "}
            </p>
            <span>&#9733;&#9733;&#9733;&#9733;&#9733;</span>
          </div>
          <img src={PicOne} alt="rev-1" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
