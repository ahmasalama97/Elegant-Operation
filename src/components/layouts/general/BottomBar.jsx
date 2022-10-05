import React from "react";
import { Link, withRouter } from "react-router-dom";

const BottomBar = ({ lang }) => {
  return (
    <div id="bottom" className="clearfix has-spacer">
      <div id="bottom-bar-inner" className="container">
        <div className="bottom-bar-inner-wrap">
          <div className="bottom-bar-content">
            <div id="copyright">
              ©{" "}
              <span className="text">
                {lang.lang.general.copyright} {lang.lang.general.companyName}
                <Link to="#" className="text-accent">
                  {lang.lang.general.year}
                </Link>{" "}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withRouter(BottomBar);
