import React from "react";

const Overview = ({ lang }) => {
  let state = {
    tab: [
      {
        id: 1,
        title: lang.lang.pageHeaders.ourCompany,
        text: lang.lang.about.companyDesc,
        item: [],
      },
      {
        id: 2,
        title: lang.lang.pageHeaders.ourVision,
        text: lang.lang.about.visionDesc,
        item: [],
      },
      {
        id: 3,
        text: "",
        title: lang.lang.pageHeaders.ourServices,
        item: [
          {
            idx: 1,
            content: lang.lang.general.visas,
          },
          {
            idx: 2,
            content: lang.lang.general.hotelReservation,
          },
          {
            idx: 3,
            content: lang.lang.general.transportations,
          },
          {
            idx: 4,
            content: lang.lang.general.hotelCatering,
          },
          {
            idx: 5,
            content: lang.lang.general.institutionalQuarantine,
          },
        ],
      },
    ],
  };
  return (
    <div className="col-md-6">
      <div
        className="themesflat-content-box clearfix"
        data-margin="0 18px 0 0"
        data-mobilemargin="0 0 0 0"
      >
        <div className="themesflat-headings style-1 clearfix">
          <h2 className="heading">{lang.lang.pageHeaders.overview}</h2>
          <div className="sep has-width w80 accent-bg margin-top-11 clearfix" />
        </div>
        <div
          className="themesflat-spacer clearfix"
          data-desktop={38}
          data-mobile={35}
          data-smobile={35}
        />
        {state.tab.map((data) => (
          <div className="tab-content" key={data.id}>
            <p style={{ fontSize: 20, fontWeight: "bold" }}>{data.title}</p>
            <div className="item-content">
              <p>{data.text}</p>
              {data.item.map((index) => (
                <div
                  className="themesflat-list has-icon style-1 icon-left ofset-padding-32 clearfix"
                  key={index.idx}
                >
                  <div className="inner">
                    <span className="item">
                      <span
                        className="icon"
                        style={{
                          right: lang.language === "english" ? "" : 0,
                        }}
                      >
                        <i className="fa fa-check-square" />
                      </span>
                      <span
                        className="text"
                        style={{
                          paddingRight: 20,
                        }}
                      >
                        {index.content}
                      </span>
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* /.themesflat-tabs */}
      </div>
      {/* /.themesflat-content-box */}
    </div>
  );
};

export default Overview;
