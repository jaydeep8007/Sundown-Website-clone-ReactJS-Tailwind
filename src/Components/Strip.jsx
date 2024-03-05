// eslint-disable-next-line react/prop-types
const Strip = ({ tag, tag1, tag2 }) => {
  return (
    <main className="bg-[#efeae3]">
      <div className="relative sm:h-[8vw]  font-[Neuehaasdisplay mediu] border-b-[1px] cursor-pointer border-slate-400 tracking-tighter flex justify-between items-center  w-full transition duration-500 ease-in-out hover:bg-[#FF9831]">
        <span className="px-7 text-[4vw] font-bold ">{tag}</span>
        <div className="flex flex-col  px-9 text-end">
          <span className="">{tag1}</span>
          <span className="text-gray-500">{tag2}</span>
        </div>
      </div>
    </main>
  );
};

export default Strip;
