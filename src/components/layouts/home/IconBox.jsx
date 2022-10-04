import React from "react";
import { Link } from "react-router-dom";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import DirectionsBusIcon from "@mui/icons-material/DirectionsBus";
import RestaurantMenuIcon from "@mui/icons-material/RestaurantMenu";
import VaccinesIcon from "@mui/icons-material/Vaccines";

const IconBox = () => {
  let state = {
    iconbox: [
      {
        id: 1,
        icon: <AccountBalanceIcon fontSize="14px" />,
        title: "HOTELS",
        text: "Resevation and equipped tourists accomodation facilities licenced by Ministry of Tourism and qualified for quarantine, at all levels, five stars, four stars and three stars",
      },
      {
        id: 2,
        icon: <DirectionsBusIcon fontSize="14px" />,
        title: "TRANSPORT",
        text: "Providing the latest means of transportation from the airport to the shelter, in accordance with precautionary, requiements specified by the Public Health Authority with the presence of field supervisors",
      },
      {
        id: 3,
        icon: <RestaurantMenuIcon fontSize="14px" />,
        title: "CATERING",
        text: "Suppling catering services in accordance with health requirements and standards, taking into account the list for each guest",
      },
      {
        id: 4,
        icon: <VaccinesIcon fontSize="14px" />,
        title: "PCR TEST",
        text: "Conducting PCR analyzes from accredited and licensed laboratories from the Saudi Ministry of Health",
      },
    ],
  };
  return (
    <div className="themesflat-row gutter-30 gutter-mobile clearfix">
      {state.iconbox.map((data) => (
        <div className="col span_1_of_3" key={data.id}>
          <div
            className="themesflat-spacer clearfix"
            data-desktop={0}
            data-mobile={0}
            data-smobile={35}
          />
          <div className="themesflat-icon-box icon-top align-center has-width w95 circle light-bg accent-color style-1 bg-white-column padding-inner clearfix">
            <div className="icon-wrap pt-2">{data.icon}</div>
            <div className="text-wrap">
              <h5 className="heading">
                <Link to="#">{data.title}</Link>
              </h5>
              <div className="sep clearfix" />
              <p className="sub-heading">{data.text}</p>
            </div>
          </div>
          <div className="divider h35" />
        </div>
      ))}
    </div>
  );
};

export default IconBox;
