import Carousel from "react-bootstrap/Carousel";
import img1 from "./image/img1.jpg";
import img2 from "./image/img2.jpg";
import img3 from "./image/img3.jpg";
import weather2 from "./image/weather2.gif";
import "./style.css";

function CarouselFade() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100 "
          // style={{ height: 300 }}
          src={img1}
          alt="First slide"
        />
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          // style={{ height: 300 }}
          src={weather2}
          alt="Second slide"
        />

        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          // style={{ height: 300 }}
          src={img2}
          alt="Third slide"
        />

        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselFade;
