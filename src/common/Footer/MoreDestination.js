import React from "react";
import Slider from "react-slick";

// function dynamicImportModule(path) {
//   return import(path).then(img => img);
// }

const moreDestinationConst = [
  {
    id: "jupiter",
    title: "Jupiter",
    img: "../../assets/img/more_destination/jupiter.png"
  },
  {
    id: "earth",
    title: "Earth",
    img: "../../assets/img/more_destination/earth.png"
  },
  {
    id: "mercury",
    title: "Mercury",
    img: "../../assets/img/more_destination/mercury.png"
  },
  {
    id: "mars",
    title: "Mars",
    img: "../../assets/img/more_destination/mars.png"
  },
  {
    id: "venus",
    title: "Venus",
    img: "../../assets/img/more_destination/venus.png"
  },
  {
    id: "saturn",
    title: "Saturn",
    img: "../../assets/img/more_destination/saturn.png"
  },
  {
    id: "uranus",
    title: "Uranus",
    img: "../../assets/img/more_destination/uranus.png"
  },
  {
    id: "neptune",
    title: "Neptune",
    img: "../../assets/img/more_destination/neptune.png"
  },
  {
    id: "earth_moon",
    title: "Earth's Moon",
    img: "../../assets/img/more_destination/earth_moon.png"
  }
];

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1
};

function MoreDestination() {
  return (
    <>
      <h2>More Destinations</h2>
      <div className="more-destination carousel-wrap">
        <Slider {...settings}>
          {moreDestinationConst.map(eachDestination => {
            const { id, title, img } = eachDestination;
            return (
              <div className="each-destination" key={id}>
                <img
                  src={require(`../../assets/img/more_destination/${id}.png`)}
                  alt={title}
                  className="each-des-img"
                />
                <h4>{title}</h4>
              </div>
            );
          })}
        </Slider>
      </div>
    </>
  );
}

export default MoreDestination;
