import React from "react";

const LeaderTeam = () => {
  let state = {
    lead: [
      {
        id: 1,
        name: "Ahmed Khawaja",
        position: "Executive Director",
      },
    ],
  };

  return (
    <div className="row-team">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div
              className="themesflat-spacer clearfix"
              data-desktop={61}
              data-mobile={60}
              data-smobile={60}
            />
            <div className="themesflat-headings style-1 text-center clearfix">
              <h2 className="heading">LEADERSHIP</h2>
              <div className="sep has-icon width-125 clearfix">
                <div className="sep-icon">
                  <span className="sep-icon-before sep-center sep-solid" />
                  <span className="icon-wrap">
                    <i className="autora-icon-build" />
                  </span>
                  <span className="sep-icon-after sep-center sep-solid" />
                </div>
              </div>
              <p className="sub-heading font-weight-400 text-808 max-width-680">
                With us you will have the peace of mind knowing that your dream
                home project is in the hands of a licensed fully insured
                building company.
              </p>
            </div>
            <div
              className="themesflat-spacer clearfix"
              data-desktop={39}
              data-mobile={35}
              data-smobile={35}
            />

            <div
              className="owl-carousel owl-theme"
              style={{ display: "flex", justifyContent: "center" }}
            >
              {state.lead.map((data) => (
                <div
                  className="themesflat-team style-1 align-center clearfix"
                  key={data.id}
                >
                  <div className="team-item">
                    <div className="inner">
                      <div className="text-wrap">
                        <h6 className="name">{data.name}</h6>
                        <div className="position">{data.position}</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div
        className="themesflat-spacer clearfix"
        data-desktop={80}
        data-mobile={60}
        data-smobile={60}
      />
    </div>
  );
};

export default LeaderTeam;
