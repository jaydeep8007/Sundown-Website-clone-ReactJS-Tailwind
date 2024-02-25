const Part5 = () => {
  return (
    <main className="z-10 h-[130vh] w-full flex  justify-center items-center bg-[#efeae3]">
      <div className="h-[110vh] w-[95vw]  rounded-3xl justify-center items-center bg-black overflow-hidden">
        <div className="flex flex-row  ">
          <div className="left   w-[45%] gap-10  flex flex-col items-center justify-center ">
            <div className="flex  gap-3">
              <div className="lineLeftSide h-[30vh]  w-1  bg-[#504A45]"></div>
              <div className="flex flex-col text-7xl font-bold ">
                <span className="text-[#EFEAE3]">Design</span>
                <span className="text-[#504A45]">Project</span>
                <span className="text-[#504A45]">Execution</span>
              </div>
            </div>

            <div className="w-[55%] text-[#EFEAE3]">
              Our team works with our clients to refine an idea and concept into
              an executable design. We create a final design that encompasses
              the brand narrative to bring stories to life and provide
              end-to-end design solutions from concept, design, and
              architectural drawings to 3D renderings.
            </div>
          </div>
          <div className="right rounded-3xl overflow-hidden  w-[55%] ">
            <img className=" " src="/part5Right.webp" alt="img error" />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Part5;
