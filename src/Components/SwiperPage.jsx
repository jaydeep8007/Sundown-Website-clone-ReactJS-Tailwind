// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "../App.css";

// import required modules
import { Pagination } from "swiper/modules";

export default function App() {
  return (
    <>
      <div className="bg-[#EFEAE3] h-[90vh] w-full px-20  py-20">
        <div className="  h-[9vh] flex  items-center">
          <span className="bg-orange-500 h-3 w-3 rounded-full mr-2"></span>
          <div className="  text-center">WHO WE WORK WITH</div>
        </div>
        <Swiper
          slidesPerView={4}
          centeredSlides={false}
          spaceBetween={30}
          grabCursor={true}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper  h-full w-full  "
        >
          <div className="  ">
            <SwiperSlide className="slide-1  py-6 text-base">
              <div className="px-6 flex-shrink  mr-7  border-l border-gray-400">
                <img className="pb-10" src="/ImageSlider/1Nike.svg" alt="1" />
                <span>
                  Retained Production support across retail and events in NY,
                  CHI, LA. Creative Design, Design Management,
                  Production/Project Management, and execution of work from
                  concept to installation across the Country.
                </span>
              </div>
            </SwiperSlide>
            <SwiperSlide className="slide-2  py-6 text-base">
              <div className="px-6 flex-shrink  mr-7  border-l border-gray-400">
                <img
                  className="pb-7"
                  src="/ImageSlider/2Converse.svg"
                  alt="1"
                />
                <span>
                  Creative Concepting, Design, Design Management, Project
                  Management, and execution of work from concept to installation
                  across the Country. Cross functional communication and
                  management of third party partners.
                </span>
              </div>
            </SwiperSlide>
            <SwiperSlide className="slide-3  py-6 text-base">
              <div className="px-6 flex-shrink  mr-7  border-l border-gray-400">
                <img
                  className="pb-7"
                  src="/ImageSlider/3Arc’teryx.svg"
                  alt="1"
                />
                <span>
                  Production and design along with install oversight and
                  execution support for the SoHo store opening on Broadway St,
                  New York. Also working on creative and production work for a
                  new store opening in Glendale, California.
                </span>
              </div>
            </SwiperSlide>
            <SwiperSlide className="slide-4  py-6 text-base">
              <div className="px-6 flex-shrink  mr-7  border-l border-gray-400">
                <img className="pb-7" src="/ImageSlider/4Hunter.svg" alt="1" />
                <span>
                  Design and Production partner for Hunter Holiday 2022 Pop-in
                  at Nordstrom 57th St, New York, including activations in
                  Women’s, Men’s and Kid’s zones. Thirty-five (35) additional
                  smaller take-downs in Nordstrom stores across the US. Concept
                  design for Holiday boot customization events in stores across
                  winter 2022.
                </span>
              </div>
            </SwiperSlide>
            <SwiperSlide className="slide-5  py-6 text-base">
              <div className="px-6 flex-shrink  mr-7  border-l border-gray-400">
                <img
                  className="pb-7"
                  src="/ImageSlider/5MediaLink.svg"
                  alt="1"
                />
                <span>
                  Creative, Design, and Production Partner for 2023 CES. Scope
                  Included creation of Branding Identity, Assets, and Digital
                  Content, Design, Production design, Production oversight and
                  Installation of client activations for IBM, Delta, Instacart,
                  and more.
                </span>
              </div>
            </SwiperSlide>
            <SwiperSlide className="slide-6  py-6 text-base">
              <div className="px-6 flex-shrink  mr-7  border-l border-gray-400">
                <img
                  className="pb-7"
                  src="/ImageSlider/6AfterPay.svg"
                  alt="1"
                />
                <span>
                  Creative, Design, and Production Partner for 2022 NY Fashion
                  Week Pop-Up space. In Partnership with B-Reel scope including
                  creation of Final Design, Design Assets, 3D Renders,
                  Production design, Production/Partner oversight and creation
                  of a two (2) story pop-up for Afterpay’s clients such as
                  Crocs, JD Sports, Container Store, & Revolve.
                </span>
              </div>
            </SwiperSlide>
          </div>
        </Swiper>
      </div>
    </>
  );
}
