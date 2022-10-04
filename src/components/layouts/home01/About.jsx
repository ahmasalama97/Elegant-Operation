import React from "react";

const About = () => {
  let state = {
    inner: [
      {
        id: 1,
        icon: "fa fa-check-square",
        text: "Tourist Visas",
      },
      {
        id: 2,
        icon: "fa fa-check-square",
        text: "Hotel Reservations of All Levels",
      },
      {
        id: 3,
        icon: "fa fa-check-square",
        text: "Means of Transportation for Internal Transportation",
      },
      {
        id: 4,
        icon: "fa fa-check-square",
        text: "Catering Services for Hotels",
      },
      {
        id: 5,
        icon: "fa fa-check-square",
        text: "Institutional Quarantine Services",
      },
    ],
  };

  return (
    <div className="row-about">
      <div className="container-fluid">
        <div className="row equalize sm-equalize-auto">
          <div className="col-md-12 bg-white">
            <div
              className="themesflat-spacer clearfix"
              data-desktop={64}
              data-mobile={60}
              data-smobile={60}
            />
            <div
              className="themesflat-content-box clearfix"
              data-margin="0 5% 0 5%"
              data-mobilemargin="0 0 0 4.5%"
            >
              <div className="themesflat-headings style-1 clearfix">
                <h2 className="heading text-center">
                  WELCOME TO ELEGANT OPERATION
                </h2>
                <div className="sep has-width w100 accent-bg margin-top-11 clearfix" />
                <p className="sub-heading margin-top-30">
                  A company specialized in managing and operating hotels,
                  providing catering services and organizing tourist trips
                  Umrah, Hajj and quarantine programs
                </p>
                <p className="sub-heading margin-top-30">Our Services:</p>
              </div>
              <div
                className="themesflat-spacer clearfix"
                data-desktop={26}
                data-mobile={35}
                data-smobile={35}
              />
              <div className="content-list">
                <div className="themesflat-list has-icon style-1 icon-left clearfix">
                  <div className="inner">
                    {state.inner.map((data) => (
                      <span className="item" key={data.id}>
                        <span className="icon">
                          <i className={data.icon} />
                        </span>
                        <span className="text">{data.text}</span>
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div
              className="themesflat-spacer clearfix"
              data-desktop={75}
              data-mobile={60}
              data-smobile={60}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
