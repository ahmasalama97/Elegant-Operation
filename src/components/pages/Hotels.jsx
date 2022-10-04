import React from "react";
import BannerTitle from "../layouts/about/banner/BannerTitle";
import HotelCard from "../layouts/general/HotelCard";
import { Footer, BottomBar, TopBar, Header } from "../layouts/general/index";
import Slider from "../layouts/hotels/Slider";

const AllHotels = () => {
  let state = {
    headers: [
      {
        id: 1,
        logoweb: "assets/img/logo-small.png",
        names: "Hotels",
      },
    ],
    banners: [
      {
        id: 1,
        links: "/hotels",
        titlelink: "",
        border: "",
        name: "Hotels",
        heading: "Hotels",
      },
    ],
  };

  return (
    <div className="header-fixed page no-sidebar header-style-2 topbar-style-1 menu-has-search">
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
                    <h2 className="heading">OUR HOTELS</h2>
                    <div className="sep has-width w80 accent-bg margin-top-11 clearfix" />
                  </div>
                  <div className="row-iconbox bg-row-2">
                    <div className="container">
                      <div className="row">
                        <div className="col-md-4">
                          <HotelCard
                            img={"assets/img/hotels/hotel-1.jpeg"}
                            name={"TAJ AL-RAQI"}
                            subName={"TAJ AL-KHALIL PREVIOUSLY"}
                            rating={
                              <div className="list-star">
                                <i className="ion-star" />
                                <i className="ion-star" />
                                <i className="ion-star" />
                                <i className="ion-star" />
                                <i className="ion-star" />
                              </div>
                            }
                            nights={4}
                            meals={3}
                            travel={"One Way"}
                            pcr={2}
                          />
                        </div>
                        <div className="col-md-4">
                          <HotelCard
                            img={"assets/img/hotels/hotel-2.jpeg"}
                            name={"AL-HIJRA AL-RAQI"}
                            subName={"AFWAJ AL-TAWBAH 11 PREVIOUSLY"}
                            rating={
                              <div className="list-star">
                                <i className="ion-star" />
                                <i className="ion-star" />
                                <i className="ion-star" />
                                <i className="ion-star" />
                                <i className="ion-star" />
                              </div>
                            }
                            nights={4}
                            meals={3}
                            travel={"One Way"}
                            pcr={2}
                          />
                        </div>
                        <div className="col-md-4">
                          <HotelCard
                            img={"assets/img/hotels/hotel-3.jpeg"}
                            name={"AL-SAFWA AL-RAQI"}
                            subName={"SAFWAT AL-TAJ PREVIOUSLY"}
                            rating={
                              <div className="list-star">
                                <i className="ion-star" />
                                <i className="ion-star" />
                                <i className="ion-star" />
                                <i className="ion-star" />
                                <i className="ion-star" />
                              </div>
                            }
                            nights={4}
                            meals={3}
                            travel={"One Way"}
                            pcr={2}
                          />
                        </div>
                        <div className="col-md-4">
                          <HotelCard
                            img={"assets/img/hotels/hotel-4.jpeg"}
                            name={"MALAK AL-RAQI"}
                            subName={"MALAK AL-TAQWA PREVIOUSLY"}
                            rating={
                              <div className="list-star">
                                <i className="ion-star" />
                                <i className="ion-star" />
                                <i className="ion-star" />
                                <i className="ion-star" />
                                <i className="ion-star" />
                              </div>
                            }
                            nights={4}
                            meals={3}
                            travel={"One Way"}
                            pcr={2}
                          />
                        </div>
                        <div className="col-md-4">
                          <HotelCard
                            img={"assets/img/hotels/hotel-5.jpeg"}
                            name={"KADY AL-RAQI"}
                            subName={"ZOHOUR AL-TAJ PREVIOUSLY"}
                            rating={
                              <div className="list-star">
                                <i className="ion-star" />
                                <i className="ion-star" />
                                <i className="ion-star" />
                                <i className="ion-star" />
                                <i className="ion-star" />
                              </div>
                            }
                            nights={4}
                            meals={3}
                            travel={"One Way"}
                            pcr={2}
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
                    <h2 className="heading">ALLOTMENT HOTELS</h2>
                    <div className="sep has-width w80 accent-bg margin-top-11 clearfix" />
                  </div>
                  <div className="row-iconbox bg-row-2">
                    <div className="container">
                      <div className="row">
                        <div className="col-md-4">
                          <HotelCard
                            img={"assets/img/hotels/hotel-1.jpeg"}
                            name={"AZKA AL-SAFA"}
                            rating={
                              <div className="list-star">
                                <i className="ion-star" />
                                <i className="ion-star" />
                                <i className="ion-star" />
                                <i className="ion-star" />
                                <i className="ion-star" />
                              </div>
                            }
                            nights={4}
                            meals={3}
                            travel={"One Way"}
                            pcr={2}
                          />
                        </div>
                        <div className="col-md-4">
                          <HotelCard
                            img={"assets/img/hotels/hotel-1.jpeg"}
                            name={"AZKA AL-SAFA"}
                            rating={
                              <div className="list-star">
                                <i className="ion-star" />
                                <i className="ion-star" />
                                <i className="ion-star" />
                                <i className="ion-star" />
                                <i className="ion-star" />
                              </div>
                            }
                            nights={4}
                            meals={3}
                            travel={"One Way"}
                            pcr={2}
                          />
                          {/* <div className="themesflat-testimonials style-2 align-center clearfix">
                            <div className="testimonial-item">
                              <div className="inner">
                                <div>
                                  <img
                                    src="assets/img/hotels/hotel-2.jpeg"
                                    style={{ width: "100%", height: 270 }}
                                    alt="altimage"
                                  />
                                </div>
                                <blockquote className="text">
                                  <div className="name-pos clearfix">
                                    <h6 className="name">AL-HIJRA AL-RAQI</h6>
                                    <span className="position">
                                      AFWAJ AL-TAWBAH 11 PREVIOUSLY
                                    </span>
                                  </div>
                                  <div className="list-star">
                                    <i className="ion-star" />
                                    <i className="ion-star" />
                                    <i className="ion-star" />
                                    <i className="ion-star" />
                                    <i className="ion-star" />
                                  </div>
                                </blockquote>
                              </div>
                            </div>
                          </div> */}
                        </div>
                        <div className="col-md-4">
                          <div className="themesflat-testimonials style-2 align-center clearfix">
                            <div className="testimonial-item">
                              <div className="inner">
                                <div>
                                  <img
                                    src="assets/img/hotels/hotel-3.jpeg"
                                    style={{ width: "100%", height: 270 }}
                                    alt="altimage"
                                  />
                                </div>
                                <blockquote className="text">
                                  <div className="name-pos clearfix">
                                    <h6 className="name">AL-SAFWA AL-RAQI</h6>
                                    <span className="position">
                                      SAFWAT AL-TAJ PREVIOUSLY
                                    </span>
                                  </div>
                                  <div className="list-star">
                                    <i className="ion-star" />
                                    <i className="ion-star" />
                                    <i className="ion-star" />
                                    <i className="ion-star" />
                                    <i className="ion-star" />
                                  </div>
                                </blockquote>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="themesflat-testimonials style-2 align-center clearfix">
                            <div className="testimonial-item">
                              <div className="inner">
                                <div>
                                  <img
                                    src="assets/img/hotels/hotel-4.jpeg"
                                    style={{ width: "100%", height: 270 }}
                                    alt="altimage"
                                  />
                                </div>
                                <blockquote className="text">
                                  <div className="name-pos clearfix">
                                    <h6 className="name">MALAK AL-RAQI</h6>
                                    <span className="position">
                                      MALAK AL-TAQWA PREVIOUSLY
                                    </span>
                                  </div>
                                  <div className="list-star">
                                    <i className="ion-star" />
                                    <i className="ion-star" />
                                    <i className="ion-star" />
                                    <i className="ion-star" />
                                    <i className="ion-star" />
                                  </div>
                                </blockquote>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="themesflat-testimonials style-2 align-center clearfix">
                            <div className="testimonial-item">
                              <div className="inner">
                                <div>
                                  <img
                                    src="assets/img/hotels/hotel-5.jpeg"
                                    style={{ width: "100%", height: 270 }}
                                    alt="altimage"
                                  />
                                </div>
                                <blockquote className="text">
                                  <div className="name-pos clearfix">
                                    <h6 className="name">KADY AL-RAQI</h6>
                                    <span className="position">
                                      ZOHOUR AL-TAJ PREVIOUSLY
                                    </span>
                                  </div>
                                  <div className="list-star">
                                    <i className="ion-star" />
                                    <i className="ion-star" />
                                    <i className="ion-star" />
                                    <i className="ion-star" />
                                    <i className="ion-star" />
                                  </div>
                                </blockquote>
                              </div>
                            </div>
                          </div>
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

        <Footer />
        {state.headers.map((data, idx) => (
          <BottomBar data={data} key={idx} />
        ))}
      </div>
    </div>
  );
};

export default AllHotels;
