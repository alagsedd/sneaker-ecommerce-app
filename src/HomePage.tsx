import Body from "./components/Body";
import NavBar from "./components/NavBar";
import Slider from "./components/Slider";
import BuyCountProvider from "./providers/BuyCountProvider";

const HomePage = () => {
  return (
    <>
      <BuyCountProvider>
        <NavBar />
        <div className="parent">
          <Slider />
          <Body />
        </div>
      </BuyCountProvider>
    </>
  );
};

export default HomePage;
