"use client";
import React from "react";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import DivAnimateYAxis from "../utils/DivAnimateYAxis";

const TestimonialSection5 = () => {
  return (
    <section className="rv-18-testimonial_section">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h2 className="rv-18-testimonial_heading rv-text-anime">
              What’s Client’s Say?
              <span className="position-absolute">
                <img src="assets/img/slider/home-4-banner-sh.png" alt="image" />
              </span>
            </h2>
          </div>
        </div>

        <DivAnimateYAxis className="row">
          <div className="col-md-12 col-lg-11">
            <Swiper
              className="rv-18-testimonial"
              navigation={{
                nextEl: ".rv-18-testimonial-swiper-button-next",
                prevEl: ".rv-18-testimonial-swiper-button-prev",
              }}
              loop={true}
              modules={[Navigation]}
            >
              <SwiperSlide className="rv-18-single_testimonial swiper-slide">
                <div className="rv-18-single_testimonial_image">
                  <img src="assets/img/testimonial/home-4-1.png" alt="image" />
                </div>
                <div className="rv-18-single_testimonial_content">
                  <div className="rv-18-single_testimonial_rating">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                  </div>
                  <p className="rv-18-single_testimonial_text_area">
                    “Suspendisse dictum nisl sed sem aliquam convallis. Proin
                    dictum ipsum quis mauris vulputate, quis commodo ligula
                    auctor. Duis lobortis est sit amet mollis ullamcorper.
                    Aliquam dignissim, nisl at aliquet Suspendisse in
                    consectetur justo Maecenas sit amet metus faucibus, maximus
                    ligula at, feugiat eros”
                  </p>
                  <div className="rv-18-single_testimonial_bottom">
                    <div className="rv-18-testimonial_author_meta">
                      <h3 className="rv-18-testimonial_author_name">
                        <a href="#">Douglas Lyphe</a>
                      </h3>
                      <p className="rv-18-testimonial_author_designation">
                        Director, Client Experience
                      </p>
                    </div>
                    <div className="rv-18-single_testimonial_icon">
                      <i className="fas fa-quote-right"></i>
                    </div>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide className="rv-18-single_testimonial swiper-slide">
                <div className="rv-18-single_testimonial_image">
                  <img src="assets/img/testimonial/home-4-1.png" alt="image" />
                </div>
                <div className="rv-18-single_testimonial_content">
                  <div className="rv-18-single_testimonial_rating">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                  </div>
                  <p className="rv-18-single_testimonial_text_area">
                    “Suspendisse dictum nisl sed sem aliquam convallis. Proin
                    dictum ipsum quis mauris vulputate, quis commodo ligula
                    auctor. Duis lobortis est sit amet mollis ullamcorper.
                    Aliquam dignissim, nisl at aliquet Suspendisse in
                    consectetur justo Maecenas sit amet metus faucibus, maximus
                    ligula at, feugiat eros”
                  </p>
                  <div className="rv-18-single_testimonial_bottom">
                    <div className="rv-18-testimonial_author_meta">
                      <h3 className="rv-18-testimonial_author_name">
                        <a href="#">Douglas Lyphe</a>
                      </h3>
                      <p className="rv-18-testimonial_author_designation">
                        Director, Client Experience
                      </p>
                    </div>
                    <div className="rv-18-single_testimonial_icon">
                      <i className="fas fa-quote-right"></i>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
          <div className="col-md-12 col-lg-1">
            <div className="rv-18-testimonial_button_area">
              <div className="rv-18-testimonial-swiper-button-prev">
                <i className="fal fa-arrow-left"></i>
              </div>
              <div className="rv-18-testimonial-swiper-button-next">
                <i className="fal fa-arrow-right"></i>
              </div>
            </div>
          </div>
        </DivAnimateYAxis>
      </div>
    </section>
  );
};

export default TestimonialSection5;
