/* eslint-disable no-unused-vars */
import "./App.css";
import MovingLine from "./Components/MovingLine";
import Part4 from "./Components/Part4";
import SecondPart from "./Components/Part2";
import ThirdPart from "./Components/Part3";
import FirstPart from "./Components/Part1";
import Part5 from "./Components/Part5";

import SwiperPage from "./Components/SwiperPage";
import Footer from "./Components/Footer";
import TransparentPage from "./Components/TransparentPage";
import LocomotiveScroll from "locomotive-scroll";
// bg-[#efeae3]
// font-[Neuehaasdisplay mediu]

function App() {
  const locomotiveScroll = new LocomotiveScroll();

  return (
    <>
      <main className="z-10 bg-black tracking-tighter ">
        <FirstPart />
        <SecondPart />
        <MovingLine />
        <ThirdPart />
        <Part4 />
        <Part5 />
        <SwiperPage />
      </main>
      <footer className="font-[Neuehaasdisplay mediu] tracking-tighter">
        <TransparentPage />
        <Footer />
      </footer>
    </>
  );
}

export default App;
