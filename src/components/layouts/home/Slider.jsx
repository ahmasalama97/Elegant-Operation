import React from "react";
import { withRouter } from "react-router-dom";
import bannerhome1 from "./data_banner";

const Slider = () => {
  const mainContent = () => {
    return (
      <>
        {bannerhome1.map((data) => (
          <li data-transition="random" key={data.id}>
            <img
              src={data.srcimg}
              alt="altimage"
              data-bgposition="center center"
              data-no-retina
            />
            <div
              className={data.classtext}
              data-x={data.datax}
              data-hoffset={data.datahset}
              data-y="['middle','middle','middle','middle']"
              data-voffset={data.datavset2}
              data-fontsize="['52','52','42','32']"
              data-lineheight="['65','65','45','35']"
              data-width="full"
              data-height="none"
              data-whitespace="normal"
              data-transform_idle="o:1;"
              data-transform_in="y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0;s:2000;e:Power4.easeInOut;"
              data-transform_out="y:[100%];s:1000;e:Power2.easeInOut;s:1000;e:Power2.easeInOut;"
              data-mask_in="x:0px;y:[100%];"
              data-mask_out="x:inherit;y:inherit;"
              data-start={500}
              data-splitin="none"
              data-splitout="none"
              data-responsive_offset="on"
            >
              {data.text}
            </div>
          </li>
        ))}
      </>
    );
  };
  return <ul>{mainContent()}</ul>;
};

export default withRouter(Slider);
