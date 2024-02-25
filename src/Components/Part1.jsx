import Button from "./Button";

const FirstPart = () => {
  return (
    <main>
      <div className="min-h-[100vh] w-full bg-[#efeae3]">
        <nav className="h-[19vh] flex justify-between items-center px-7">
          <div>
            <img className="cursor-pointer" src="/Sundown logo.svg" alt="" />
          </div>
          <div className="flex gap-4">
            <Button width={`w-20`} tag="Work" />
            <Button width={`w-24`} tag="Studio" />
            <Button width={`w-24`} tag="Contact" />
          </div>
        </nav>
        <div className="h-[81vh] flex relativew ">
          <div className="left h-full w-1/2  flex items-end">
            <span className="h-[24vh] w-[26vw] mx-10 mb-6 font-bold text-2xl  ">
              Sundown is a multi-disciplinary studio focused on creating unique,
              end-to-end experiences and environments.
            </span>
          </div>
          <div className="left text-[175px] font-semibold font-[Neuehaasdisplay mediu] tracking-tighter h-full w-1/2  flex  flex-col items-end  pr-20 mt-20 ">
            <span className="   -mb-32">SPACES</span>
            <span className="  -mb-32">THAT</span>
            <span className="  -mb-6">INSPIRE</span>
          </div>

          <div className="floatinfPart1 blur-xl  ">
            <div className="floating1 absolute  right-0 -bottom-96 h-[50vh] w-[50vw] rounded-l-full bg-[#FE4711]"></div>
            <div className="animated-float2 absolute  right-20 -bottom-[400px] h-[65vh] w-[35vw] rounded-full bg-[#FE4711]"></div>
            <div className="animated-float1 absolute right-0 -bottom-[450px]  h-[80vh] w-[35vw] rounded-l-full bg-[#fe4811] "></div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default FirstPart;
