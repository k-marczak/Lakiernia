"use client";
import { functionsData } from "@/data/Data";
import React from "react";
import { Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/scss/scrollbar";
import DivAnimateYAxis from "../utils/DivAnimateYAxis";

const FunctionSection = () => {
  return (
    <section className="rv-8-functions pt-60 pb-60" data-aos="fade-up">
      <div className="container">
        <div className="rv-8-section__heading">
          <h6 className="rv-8-section__sub-title rv-text-anime">
            Oferta
          </h6>

          <h2 className="rv-8-section__title rv-text-anime">
            Co {""}
            <span className="styled">
              Malujemy?
              <svg
                width="191"
                height="20"
                viewBox="0 0 191 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M0.350829 19.9954C62.8308 5.83547 125.782 4.29367 187.776 13.0908C189.008 13.2659 190.838 11.7486 190.99 9.4079C191.144 7.02425 189.429 5.15235 188.194 4.95568C125.733 -5.0348 63.0249 0.340437 0.251936 18.7297C-0.147058 18.8469 -0.0406972 20.0845 0.350829 19.9954Z"
                  fill="#93B617"
                ></path>
              </svg>
            </span>
          </h2>
        </div>
        <DivAnimateYAxis>
          <Swiper
            className="rv-8-functions__slider"
            slidesPerView={4}
            spaceBetween={15}
            scrollbar={{
              el: "#rv-8-functions__scrollbar",
            }}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              480: {
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 3,
              },
              992: {
                slidesPerView: 4,
                spaceBetween: 20,
              },
              1200: {
                spaceBetween: 30,
              },
            }}
            modules={[Scrollbar]}
          >
            {functionsData.map((item) => (
              <SwiperSlide className="rv-8-function" key={item.id}>
                <img src={item.img} alt="icon" className="rv-8-function__img" />
                <div className="rv-8-function__txt">
                  <h6 className="rv-8-function__title">
                    <a href="#">{item.title}</a>
                  </h6>
                  <span className="rv-8-function__sub-title">
                    {item.subTitle}
                  </span>
                </div>
              </SwiperSlide>
            ))}

            <div
              className="rv-7-slider-scrollbar"
              id="rv-8-functions__scrollbar"
            ></div>
          </Swiper>
        </DivAnimateYAxis>
      </div>
    </section>
  );
};

export default FunctionSection;