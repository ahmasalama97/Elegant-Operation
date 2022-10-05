import { useContext } from "react";
import { LanguageConsumer, LanguageContext } from "../../LanguageContext";
import BannerTitle from "../layouts/about/banner/BannerTitle";
import HotelCard from "../layouts/general/HotelCard";
import { Footer, BottomBar, TopBar, Header } from "../layouts/general/index";

const AllHotels = () => {
  const lang = useContext(LanguageContext);

  let state = {
    headers: [
      {
        id: 1,
        logoweb: "assets/img/logo-small.png",
        names: lang.lang.nav.hotels,
      },
    ],
    banners: [
      {
        id: 1,
        links: "/hotels",
        titlelink: "",
        border: "",
        name: lang.lang.nav.hotels,
        heading: lang.lang.nav.hotels,
      },
    ],
  };

  return (
    <LanguageConsumer>
      {({ language }) => (
        <div
          className="header-fixed page no-sidebar header-style-2 topbar-style-1 menu-has-search"
          style={{ direction: language === "english" ? "ltr" : "rtl" }}
        >
          <div id="wrapper" className="animsition">
            <div id="page" className="clearfix">
              <TopBar />
              {state.headers.map((data, idx) => (
                <Header data={data} key={idx} />
              ))}
              {state.banners.map((data) => (
                <BannerTitle key={data.id} data={data} />
              ))}

              <div className="row-iconbox bg-row-2">
                <div className="container">
                  <div className="row">
                    <div className="col-md-12">
                      <div
                        className="themesflat-spacer clearfix"
                        data-desktop={60}
                        data-mobile={60}
                        data-smobile={60}
                      />
                      <div className="themesflat-headings style-1 clearfix">
                        <h2 className="heading">
                          {lang.lang.pageHeaders.ourHotels}
                        </h2>
                        <div className="sep has-width w80 accent-bg margin-top-11 clearfix" />
                      </div>
                      <div className="row-iconbox bg-row-2">
                        <div className="container">
                          <div className="row">
                            <div className="col-md-4">
                              <HotelCard
                                img={"assets/img/hotels/hotel-1.jpeg"}
                                name={lang.lang.hotels.taj}
                                subName={lang.lang.hotels.subTaj}
                                rating={
                                  <div className="list-star">
                                    <i className="ion-star" />
                                    <i className="ion-star" />
                                    <i className="ion-star" />
                                    <i className="ion-star" />
                                    <i className="ion-star" />
                                  </div>
                                }
                                nights={lang.lang.general.d}
                                meals={lang.lang.general.c}
                                travel={lang.lang.general.oneWay}
                                pcr={lang.lang.general.b}
                                lang={lang}
                              />
                            </div>
                            <div className="col-md-4">
                              <HotelCard
                                img={"assets/img/hotels/hotel-2.jpeg"}
                                name={lang.lang.hotels.hijra}
                                subName={lang.lang.hotels.subHijra}
                                rating={
                                  <div className="list-star">
                                    <i className="ion-star" />
                                    <i className="ion-star" />
                                    <i className="ion-star" />
                                    <i className="ion-star" />
                                    <i className="ion-star" />
                                  </div>
                                }
                                nights={lang.lang.general.c}
                                meals={lang.lang.general.b}
                                travel={lang.lang.general.oneWay}
                                pcr={lang.lang.general.e}
                                lang={lang}
                              />
                            </div>
                            <div className="col-md-4">
                              <HotelCard
                                img={"assets/img/hotels/hotel-3.jpeg"}
                                name={lang.lang.hotels.safwa}
                                subName={lang.lang.hotels.subSafwa}
                                rating={
                                  <div className="list-star">
                                    <i className="ion-star" />
                                    <i className="ion-star" />
                                    <i className="ion-star" />
                                    <i className="ion-star" />
                                    <i className="ion-star" />
                                  </div>
                                }
                                nights={lang.lang.general.e}
                                meals={lang.lang.general.e}
                                travel={lang.lang.general.oneWay}
                                pcr={lang.lang.general.a}
                                lang={lang}
                              />
                            </div>
                            <div className="col-md-4">
                              <HotelCard
                                img={"assets/img/hotels/hotel-4.jpeg"}
                                name={lang.lang.hotels.malak}
                                subName={lang.lang.hotels.subMalak}
                                rating={
                                  <div className="list-star">
                                    <i className="ion-star" />
                                    <i className="ion-star" />
                                    <i className="ion-star" />
                                    <i className="ion-star" />
                                    <i className="ion-star" />
                                  </div>
                                }
                                nights={lang.lang.general.h}
                                meals={lang.lang.general.j}
                                travel={lang.lang.general.oneWay}
                                pcr={lang.lang.general.f}
                                lang={lang}
                              />
                            </div>
                            <div className="col-md-4">
                              <HotelCard
                                img={"assets/img/hotels/hotel-5.jpeg"}
                                name={lang.lang.hotels.kady}
                                subName={lang.lang.hotels.subKady}
                                rating={
                                  <div className="list-star">
                                    <i className="ion-star" />
                                    <i className="ion-star" />
                                    <i className="ion-star" />
                                    <i className="ion-star" />
                                    <i className="ion-star" />
                                  </div>
                                }
                                nights={lang.lang.general.d}
                                meals={lang.lang.general.a}
                                travel={lang.lang.general.oneWay}
                                pcr={lang.lang.general.f}
                                lang={lang}
                              />
                            </div>
                            {/* /.themesflat-testimonials */}
                          </div>
                        </div>
                      </div>

                      <div
                        className="themesflat-spacer clearfix"
                        data-desktop={80}
                        data-mobile={60}
                        data-smobile={60}
                      />
                      <div className="themesflat-headings style-1 clearfix">
                        <h2 className="heading">
                          {lang.lang.pageHeaders.allotmentHotels}
                        </h2>
                        <div className="sep has-width w80 accent-bg margin-top-11 clearfix" />
                      </div>
                      <div className="row-iconbox bg-row-2">
                        <div className="container">
                          <div className="row">
                            <div className="col-md-4">
                              <HotelCard
                                img={"assets/img/hotels/hotel-1.jpeg"}
                                name={lang.lang.hotels.azka}
                                rating={
                                  <div className="list-star">
                                    <i className="ion-star" />
                                    <i className="ion-star" />
                                    <i className="ion-star" />
                                    <i className="ion-star" />
                                    <i className="ion-star" />
                                  </div>
                                }
                                nights={lang.lang.general.d}
                                meals={lang.lang.general.c}
                                travel={lang.lang.general.oneWay}
                                pcr={lang.lang.general.b}
                                lang={lang}
                              />
                            </div>
                            <div className="col-md-4">
                              <HotelCard
                                img={"assets/img/hotels/hotel-1.jpeg"}
                                name={lang.lang.hotels.nesour}
                                rating={
                                  <div className="list-star">
                                    <i className="ion-star" />
                                    <i className="ion-star" />
                                    <i className="ion-star" />
                                    <i className="ion-star" />
                                    <i className="ion-star" />
                                  </div>
                                }
                                nights={lang.lang.general.d}
                                meals={lang.lang.general.c}
                                travel={lang.lang.general.oneWay}
                                pcr={lang.lang.general.b}
                                lang={lang}
                              />
                            </div>
                            <div className="col-md-4">
                              <HotelCard
                                img={"assets/img/hotels/hotel-1.jpeg"}
                                name={lang.lang.hotels.mathaer}
                                rating={
                                  <div className="list-star">
                                    <i className="ion-star" />
                                    <i className="ion-star" />
                                    <i className="ion-star" />
                                    <i className="ion-star" />
                                    <i className="ion-star" />
                                  </div>
                                }
                                nights={lang.lang.general.d}
                                meals={lang.lang.general.c}
                                travel={lang.lang.general.oneWay}
                                pcr={lang.lang.general.b}
                                lang={lang}
                              />
                            </div>
                            <div className="col-md-4">
                              <HotelCard
                                img={"assets/img/hotels/hotel-1.jpeg"}
                                name={lang.lang.hotels.fajr}
                                rating={
                                  <div className="list-star">
                                    <i className="ion-star" />
                                    <i className="ion-star" />
                                    <i className="ion-star" />
                                    <i className="ion-star" />
                                    <i className="ion-star" />
                                  </div>
                                }
                                nights={lang.lang.general.d}
                                meals={lang.lang.general.c}
                                travel={lang.lang.general.oneWay}
                                pcr={lang.lang.general.b}
                                lang={lang}
                              />
                            </div>
                            <div className="col-md-4">
                              <HotelCard
                                img={"assets/img/hotels/hotel-1.jpeg"}
                                name={lang.lang.hotels.royal}
                                rating={
                                  <div className="list-star">
                                    <i className="ion-star" />
                                    <i className="ion-star" />
                                    <i className="ion-star" />
                                    <i className="ion-star" />
                                    <i className="ion-star" />
                                  </div>
                                }
                                nights={lang.lang.general.d}
                                meals={lang.lang.general.c}
                                travel={lang.lang.general.oneWay}
                                pcr={lang.lang.general.b}
                                lang={lang}
                              />
                            </div>
                            <div className="col-md-4">
                              <HotelCard
                                img={"assets/img/hotels/hotel-1.jpeg"}
                                name={lang.lang.hotels.bolman}
                                rating={
                                  <div className="list-star">
                                    <i className="ion-star" />
                                    <i className="ion-star" />
                                    <i className="ion-star" />
                                    <i className="ion-star" />
                                    <i className="ion-star" />
                                  </div>
                                }
                                nights={lang.lang.general.d}
                                meals={lang.lang.general.c}
                                travel={lang.lang.general.oneWay}
                                pcr={lang.lang.general.b}
                                lang={lang}
                              />
                            </div>
                            {/* /.themesflat-testimonials */}
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-12">
                          <div
                            className="themesflat-spacer clearfix"
                            data-desktop={80}
                            data-mobile={60}
                            data-smobile={60}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {state.headers.map((data, idx) => (
              <Footer data={data} key={idx} />
            ))}
            {state.headers.map((data, idx) => (
              <BottomBar data={data} key={idx} lang={lang} />
            ))}
          </div>
        </div>
      )}
    </LanguageConsumer>
  );
};

export default AllHotels;
