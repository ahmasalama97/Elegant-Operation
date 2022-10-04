import React from "react";
import { Link } from "react-router-dom";

const BannerTitle = ({ data }) => {
  return (
    <div id="featured-title" className="featured-title clearfix">
      <div id="featured-title-inner" className="container clearfix">
        <div className="featured-title-inner-wrap">
          <div id="breadcrumbs">
            <div className="breadcrumbs-inner">
              <div className="breadcrumb-trail">
                <Link
                  onClick={() => {
                    window.location.href = "/";
                  }}
                  to="/"
                  className="trail-begin"
                >
                  Home
                </Link>
                <span className="sep">{data.border}</span>
                <Link
                  to={data.links}
                  onClick={() => {
                    window.location.href = data.links;
                  }}
                  className="trail-begin"
                >
                  {data.titlelink}
                </Link>
                <span className="sep">|</span>
                <span className="trail-end">{data.name}</span>
              </div>
            </div>
          </div>
          <div className="featured-title-heading-wrap">
            <h1 className="feautured-title-heading">{data.heading}</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerTitle;
