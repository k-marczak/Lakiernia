import React from "react";
import DivAnimateYAxis from "../utils/DivAnimateYAxis";

const ServiceSection5 = () => {
  return (
    <section className="rv-8-services pt-120 pb-60">
      <div className="container">
        <div className="rv-8-services__heading">
          <div className="rv-8-section__heading">
            <h6 className="rv-8-section__sub-title rv-text-anime">
              Nasze Usługi
            </h6>
            <h2 className="rv-8-section__title rv-text-anime">
              Jak wygląda {""}
              <span className="styled">
                malowanie?
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
                  />
                </svg>
              </span>
            </h2>
          </div>
        </div>

        <DivAnimateYAxis className="row rv-8-services__row g-30">
          <div className="col-md-6">
            <div className="rv-8-service">
              <div className="rv-8-service__icon">
                <img src="assets/img/przygotowanie.png" alt="Icon" />
              </div>

              <div className="rv-8-service__txt">
                <h4 className="rv-8-service__title">
                  <a href="#">Przygotowanie</a>
                </h4>
                <p className="rv-3-service__descr">
                Pierwszym etapem malowania
                jest przygotowanie powierzchni
                do naniesienia farby. Obejmuje
                on m.in. czyszczenie materiału,
                mycie wodą demineralizowaną,
                odtłuszczanie, wyrównanie
                powierzchni, piaskowanie,
                wytrawianie produktów korozji
                i kąpiel pasywacyjną.
                </p>
                <a
                  href="#"
                  className="rv-8-service__btn rv-1-schedule-conf__btn"
                >
                  {/* Read More <i className="fa-regular fa-arrow-right"></i> */}
                </a>
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <div className="rv-8-service">
              <div className="rv-8-service__icon">
                <img src="assets/img/suszenie.png" alt="Icon" />
              </div>

              <div className="rv-8-service__txt">
                <h4 className="rv-8-service__title">
                  <a href="#">Suszenie</a>
                </h4>
                <p className="rv-3-service__descr">
                Pozbawienie powierzchni wszelkich śladów wilgoci, które osłabiają efektywność
                malowania. Odbywa się ono
                w specjalnej suszarce
                w kontrolowanych warunkach cieplnych. Po opuszczeniu komory suszarniczej elementy
                są schładzane.
                </p>
                <a
                  href="#"
                  className="rv-8-service__btn rv-1-schedule-conf__btn"
                >
                  {/* Read More <i className="fa-regular fa-arrow-right"></i> */}
                </a>
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <div className="rv-8-service">
              <div className="rv-8-service__icon">
                <img src="assets/img/malowanie.png" alt="Icon" />
              </div>

              <div className="rv-8-service__txt">
                <h4 className="rv-8-service__title">
                  <a href="#">Malowanie</a>
                </h4>
                <p className="rv-3-service__descr">
                Pokrycie preparowanego elementu specjalistyczną farbą z wykorzystaniem najnowszej generacji aplikatora proszkowego. 
                Proces wykonujemy zarówno w technice natrysku elektrostatycznego, jak i przy zastosowaniu metody elektrokinetycznej.
                </p>
                <a
                  href="#"
                  className="rv-8-service__btn rv-1-schedule-conf__btn"
                >
                  {/* Read More <i className="fa-regular fa-arrow-right"></i> */}
                </a>
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <div className="rv-8-service">
              <div className="rv-8-service__icon">
                <img src="assets/img/wypalanie.png" alt="Icon" />
              </div>

              <div className="rv-8-service__txt">
                <h4 className="rv-8-service__title">
                  <a href="#">Wypalanie</a>
                </h4>
                <p className="rv-3-service__descr">
                Finalny etap malowania. 
                Umieszczenie polakierowanej powierzchni w piecu lakierniczym, gdzie dochodzi do stopienia farby i jej późniejszego utwardzenia. 
                Procesy te nadają trwały i estetyczny efekt końcowy.
                </p>
                <a
                  href="#"
                  className="rv-8-service__btn rv-1-schedule-conf__btn"
                >
                  {/* Read More <i className="fa-regular fa-arrow-right"></i> */}
                </a>
              </div>
            </div>
          </div>
        </DivAnimateYAxis>
      </div>
    </section>
  );
};

export default ServiceSection5;
