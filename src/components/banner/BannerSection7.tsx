import React from "react";

const BannerSection7 = () => {
  return (
    <section className="rv-8-banner">
      <div className="container">
        <div className="row align-items-end justify-content-between">
          <div className="col-xxl-6 col-lg-6">
            <div className="rv-8-banner__txt">
              <h6 className="rv-8-section__sub-title rv-8-banner__sub-title rv-text-anime">
                 DMSteel
              </h6>

              <h1 className="rv-8-banner__title rv-text-anime">
                Brzydko, drogo i nieterminowo. 
              </h1>

              <p className="rv-8-banner__descr rv-text-anime">
              DMSteel skupia specjalistów z wieloletnim doświadczeniem
              w dziedzinie krycia powierzchni metalowych i metaloplastyki, korzystając z nowoczesnych
              maszyn, stale śledząc i wdrażając nowe technologie.
              </p>
              <a href="#" className="rv-3-def-btn rv-8-def-btn">
                Galeria
              </a>
            </div>
          </div>

          <div className="col-xxl-2 col-lg-1">
            <div className="rv-8-banner__img">
              <img src="assets/img/elo.jpg" alt="Banner Vector" />
            </div>
          </div>

          <div className="col-xxl-4 col-lg-5">
            <div className="rv-8-banner__form-area">
              <h5 className="rv-text-anime"> Wycena w 24h </h5>
              
              <p className="rv-8-banner__descr rv-text-anime">
              Jesteśmy młodą firmą, która powstała w oparciu o stale rosnące zapotrzebowanie na usługi
              malowania proszkowego. Lakierujemy przedmioty o charakterze techniczno – przemysłowym a także codziennej
              użyteczności. Powlekamy powierzchnie stalowe i stalopochodne, wykonane z aluminium, żeliwa
              i szkła oraz drewniane i drewnopochodne. Nasz warsztat wykorzystuje nowoczesne, przyjazne
              środowisku farby(nie zawierające w składzie m.in. rozpuszczalników i amoniaku) w kolorach
              w standardzie RAL.
              </p>

            </div>
          </div>
        </div>
      </div>

      <div className="rv-8-banner__vectors">
        <img
          src="assets/img/rv-8-vector-1.png"
          alt="vector"
          className="rv-8-banner__vector rv-8-banner__vector--1"
        />
        <img
          src="assets/img/rv-8-vector-2.png"
          alt="vector"
          className="rv-8-banner__vector rv-8-banner__vector--2"
        />
        <img
          src="assets/img/rv-8-vector-3.png"
          alt="vector"
          className="rv-8-banner__vector rv-8-banner__vector--3"
        />
      </div>
    </section>
  );
};

export default BannerSection7;
