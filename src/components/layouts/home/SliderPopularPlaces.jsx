import React from "react";
import { Link } from "react-router-dom";

const SliderPopularPlaces = () => {
  let state = {
    slider: [
      {
        id: 1,
        srcimg: "assets/img/imagebox/image-box-1.jpg",
        heading: "Riyadh",
        text: "The Riyadh Province, also known as the Riyadh Region, is a region of Saudi Arabia, located in the geographic center of the country. It is the second-largest region by both area and population, behind the Eastern Province and Mecca Region respectively.",
      },
      {
        id: 2,
        srcimg: "assets/img/imagebox/image-box-2.jpg",
        heading: "Jeddah",
        text: "Jeddah is a city in the Hejaz region of Saudi Arabia and the country's commercial center. Established in the 6th century BC as a fishing village, Jeddah’s prominence grew in 647 when the Caliph Osman made it a major port for Indian Ocean trade routes, channelling goods to Mecca, and to serve Muslim travelers for Islamic pilgrimage.",
      },
      {
        id: 3,
        srcimg: "assets/img/imagebox/image-box-3.jpg",
        heading: "Al Madinah Al Munawwarah",
        text: "Medina, officially Al Madinah Al Munawwarah. It IS the fourth-most populous city in the country. Located at the core of the Medina Province in the western reaches of the country, while the rest is occupied by the Hejaz Mountains, empty valleys, agricultural spaces and older dormant volcanoes.",
      },
      {
        id: 4,
        srcimg: "assets/img/imagebox/image-box-4.jpg",
        heading: "Dammam",
        text: "Dammam is the fifth-most populous city in Saudi Arabia after Riyadh, Jeddah, Mecca, and Medina. It is the capital of the Eastern Province. The judicial and administrative bodies of the province, in addition to the administrative offices of other minor governmental departments functioning within the province, are located in the city.",
      },
    ],
  };

  return (
    <div
      className="themesflat-carousel-box has-arrows arrow-center offset-v-111 offset-h-21 arrow-circle arrow-style-2 data-effect clearfix"
      data-gap={30}
      data-column={3}
      data-column2={2}
      data-column3={1}
      data-auto="true"
    >
      <div className="owl-carousel owl-theme">
        {state.slider.map((data) => (
          <div className="themesflat-image-box style-2 clearfix" key={data.id}>
            <div className="image-box-item">
              <div className="inner">
                <div className="thumb data-effect-item">
                  <img src={data.srcimg} alt="altimage" />
                  <div className="overlay-effect bg-color-accent" />
                </div>
                <div className="text-wrap">
                  <h5 className="heading">
                    <Link to="#">{data.heading}</Link>
                  </h5>
                  <p>{data.text}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default SliderPopularPlaces;
