const Footer = () => {
  return (
    <nav className=" text-[#efeae3] fixed bottom-0 -z-10  h-[100vh] w-full bg-black ">
      <div className="floatinfPart1 blur-3xl  ">
        <div className="floating1 absolute  -left-20 -bottom-56 h-[50vh] w-[90vw] rounded-b-full bg-[#FE4711]"></div>
        <div className="animated-float2 absolute  -left-8 -bottom-[350px] h-[65vh] w-[56vw] rounded-r-full  bg-[#FE4711]"></div>
        <div className="animated-float1 absolute -left-28 -bottom-[400px]  h-[40vh] w-[35vw] rounded-r-full bg-[#FE4711] "></div>
      </div>
      <div className="floatinfPart1 blur-3xl  ">
        <div className="floating1 absolute  -right-20 -bottom-64 h-[600vh] w-[40vw] rounded-b-full bg-[#FE4711]"></div>
        <div className="animated-float2 absolute  -right-20 -bottom-[400px] h-[65vh] w-[65vw] rounded-l-full bg-[#FE4711]"></div>
        <div className="animated-float1 absolute right-0 -bottom-[450px]  h-[80vh] w-[35vw] rounded-l-full bg-[#FE4711] "></div>
      </div>
      <div className="flex flex-col justify-between">
        <div className="flex justify-between px-[7vw] mt-[12vh]">
          <span className="left z-10 flex flex-col text-4xl font-bold">
            <span>Work</span>
            <span>Studio</span>
            <span>Contact</span>
          </span>
          <span className="right z-10 flex flex-col gap-6 text-xl w-[20vw]">
            <span>
              Get industry insights and creative inspiration straight to your
              inbox.
            </span>
            <input
              className="bg-transparent border-white border-b "
              type="email"
              placeholder="Email Addresses"
            />
          </span>
        </div>
        <div className=" -m-8 text-center font-bold text-[330px] text-[#efeae3] ">
          Sundown
        </div>
      </div>
      <div className="bg-[#504A45] mx-[2vw]  w-[95vw] h-[1px] mb-10"></div>
      <div className="flex justify-between text-white px-8">
        <span>Copyright © Sundown Studio</span>
        <span>Brooklyn, NY</span>
        <span>Instagram</span>
        <span>LinkedIn</span>
      </div>
    </nav>
  );
};

export default Footer;
