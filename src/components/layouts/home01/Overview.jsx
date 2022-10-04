import React from "react";

const Overview = () => {
  let state = {
    tab: [
      {
        id: 1,
        title: "Our Company",
        text: "A company specialized in managing and operating hotels, providing catering services and organizing tourist trips Umrah, Hajj and quarantine programs",
        item: [],
      },
      {
        id: 2,
        title: "Our Vision",
        text: "Serving the pilgrims from all over the world and its connection with the vision of our wise leadership. Our energies and capabilities to serve them, whose priority is to spare no effort in making every effort. Providing everything that meets the needs of God's guests and fulfills their aspirations.",
        item: [],
      },
      {
        id: 3,
        text: "",
        title: "Our Services",
        item: [
          {
            idx: 1,
            content: "Tourist Visas.",
          },
          {
            idx: 2,
            content: "Hotel Reservations of All Levels",
          },
          {
            idx: 3,
            content: "Means of Transportation for Internal Transportation",
          },
          {
            idx: 4,
            content: "Catering Services for Hotels",
          },
          {
            idx: 5,
            content: "Institutional Quarantine Services",
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
          <h2 className="heading">OVERVIEW</h2>
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
                      <span className="icon">
                        <i className="fa fa-check-square" />
                      </span>
                      <span className="text">{index.content}</span>
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
