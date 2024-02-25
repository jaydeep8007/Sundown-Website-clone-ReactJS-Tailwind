import Floating2 from "./Floating2";

const ThirdPart = () => {
  return (
    <main className=" bg-[#efeae3] h-[100vh] w-full flex relative ">
      <div className="z-10 h-full w-[70vw] leading-none px-28 py-36 items-center justify-center left text-[65px] font-bold font-[Neuehaasdisplay mediu] tracking-tighter">
        We are a group of design-driven, goal-focused creators, producers, and
        designers who believe that the details make all the difference.
      </div>
      {/* <span className="float3 h-[500px] w-[500px]  bg-gradient-to-tr from-[#FE4711] via-[#FE4711] to-[#fe8f11] blur-xl rounded-full absolute top-[40%] left-1/4"></span> */}
      <Floating2 />
      <div className="h-full w-[30vw]  flex flex-col justify-end items-center ">
        <div className="px-20 rounded-xl overflow-hidden">
          <img className=" rounded-xl" src="/imgThirdRight.webp" alt="" />
        </div>

        <span className="px-20 py-10 font-[Neuehaasdisplay mediu]">
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
