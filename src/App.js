import "./App.css";
import Slider from "react-slick";
import { useEffect, useState } from "react";
// import "~slick-carousel/slick/slick.css";
// import "~slick-carousel/slick/slick-theme.css";

const El = ({ card }) => (
  <div
    style={{
      height: "200px",
      width: "200px",
      backgroundImage: `url(${card.image})`,
    }}
  >
    <h1>{card.description}</h1>
  </div>
);

function App() {
  const [data, setData] = useState(null);

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 1000,
  };

  useEffect(() => {
    fetch("http://localhost:3001/cards").then((res) =>
      res.json().then((res) => setData(res))
    );
  }, []);

  console.log(data);

  if (!data) return null;

  return (
    <div className="App">
      <Slider {...settings}>
        {/* {data.map((card) => (
          <El key={card.id} card={card} />
        ))} */}

        <El card={data[0]} />
        <El card={data[1]} />
        <El card={data[2]} />
        <El card={data[3]} />
        <El card={data[4]} />
      </Slider>
    </div>
  );
}

export default App;
