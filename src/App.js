import "./App.css";
import Backgroun from "./component/Backgroun";
import CarouselFade from "./component/CarouselFade";
import Entro from "./component/Entro";
import Footer from "./component/Footer";
import Weather from "./component/Weather";
function App() {
  return (
    <div>
      <Backgroun />
      <Weather />
      <CarouselFade />
      <Entro />
      <Footer />
    </div>
  );
}

export default App;
