"use client";
import React from "react";
import DivAnimateYAxis from "../utils/DivAnimateYAxis";
import NumberCounter from "../utils/NumberCounter";
import { useAppDispatch } from "@/redux/hooks";
import { toggleVideoModalOpen } from "@/redux/features/videoModalSlice";

const AboutSection5 = () => {
  const dispatch = useAppDispatch();
  const openVideoModal = () => {
    dispatch(toggleVideoModalOpen());
  };
  return (
    <section className="rv-8-about pt-60 pb-60">
      <div className="container">
        <DivAnimateYAxis position={40} className="row g-30 align-items-center">
          <div className="col-lg-6">
          <div className="rv-5-video text-center" style={{ padding: "0", margin: "0" }}>
          <video
          className="video-loop"
          autoPlay
          loop
          muted
          playsInline
          style={{ width: "100%", height: "auto", display: "block" }}
            >
            <source src="assets/img/my_img/video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
            </video>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="rv-8-about__txt">
              <h6 className="rv-8-section__sub-title rv-text-anime">
                DMSteel
              </h6>

              <h2 className="rv-8-section__title rv-text-anime">
                Jakość {""}
                <span className="styled">
                 Niezawodność
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
                {""} i satysfakcja Klientów. 
              </h2>

              <p className="rv-8-about__descr">
                Z dumą możemy zaprezentować Państwu rezultaty naszej pracy. 
                W aktualizowanej na bieżąco galerii znajdują się zdjęcia niektórych naszych realizacji.
                Zachęcamy do odwiedzenia naszego Fanpage’a, gdzie na bieżąco dokumentujemy pracę naszego zakładu.
              </p>

              <div className="rv-8-about__stats d-flex">
                <div className="rv-8-about-stat">
                  <h4 className="rv-8-about-stat__number">
                    <span>
                      <NumberCounter number={200} durationToComplete={3} />
                    </span>
                    +
                  </h4>
                  <h6 className="rv-8-about-stat__name">Zadowoleni klienci</h6>
                </div>
                <div className="rv-8-about-stat">
                  <h4 className="rv-8-about-stat__number">
                    <span>
                      <NumberCounter number={87} durationToComplete={3} />
                    </span>
                    +
                  </h4>
                  <h6 className="rv-8-about-stat__name">Wykonane realizacje</h6>
                </div>
                <div className="rv-8-about-stat">
                  <h4 className="rv-8-about-stat__number">
                    <span>
                      <NumberCounter number={69} durationToComplete={3} />
                    </span>
                    +
                  </h4>
                  <h6 className="rv-8-about-stat__name">Liczba pracowników</h6>
                </div>
              </div>

              <a href="#" className="rv-3-def-btn">
                Więcej O Nas
              </a>

              <div className="vectors">
                <img
                  src="assets/img/rv-8-about-vector-2.png"
                  alt="vector"
                  className="vector vector--1"
                />
                <img
                  src="assets/img/rv-8-about-vector-3.png"
                  alt="vector"
                  className="vector vector--2"
                />
                <img
                  src="assets/img/rv-8-about-vector-4.png"
                  alt="vector"
                  className="vector vector--3"
                />
              </div>
            </div>
          </div>
        </DivAnimateYAxis>
      </div>
    </section>
  );
};

export default AboutSection5;
