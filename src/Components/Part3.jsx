import Floating2 from "./Floating2";

const ThirdPart = () => {
  return (
    <main className=" bg-[#efeae3] h-[75vh] sm:h-[100vh] w-full flex flex-row sm:flex-col relative ">
      <div className="z-10 absolute  sm:block sm:h-full sm:w-[70vw] leading-none px-[4vw] py-[11vw] items-center justify-center left text-[4.5vw] font-bold font-[Neuehaasdisplay mediu] tracking-tighter">
        We are a group of design-driven, goal-focused creators, producers, and
        designers who believe that the details make all the difference.
      </div>
      {/* <span className="float3 h-[500px] w-[500px]  bg-gradient-to-tr from-[#FE4711] via-[#FE4711] to-[#fe8f11] blur-xl rounded-full absolute top-[40%] left-1/4"></span> */}
      <Floating2 />
      <div className="absolute top-[25vh] sm:right-0 sm:top-0 sm:h-full w-full sm:w-[30vw]  flex flex-col justify-end items-center ">
        <div className="px-[6vw] rounded-xl overflow-hidden">
          <img className=" rounded-xl" src="/imgThirdRight.webp" alt="" />
        </div>

        <span className="px-[6vw] py-[3vw]   font-[Neuehaasdisplay mediu]">
          We love to create, we love to solve, we love to collaborate, and we
          love to turn amazing ideas into reality. We are here to partner with
          you through every step of the process and know that relationships are
          the most important things we build.
        </span>
      </div>
    </main>
  );
};

export default ThirdPart;
