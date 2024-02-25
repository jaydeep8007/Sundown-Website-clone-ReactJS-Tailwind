import Strip from "./Strip";
import Button from "./Button";
const Part4 = () => {
  return (
    <>
      <main className=" h-fit w-full bg-[#efeae3]">
        <div className=" px-6 h-[9vh] flex  items-center">
          <span className="bg-orange-500 h-3 w-3 rounded-full mr-2"></span>
          <div className="  text-center">FEATURED PROJECTS</div>
        </div>

        <Strip tag="SOHO NY" tag1={`ARK'TERYX`} tag2={`Environment`} />
        <Strip tag="NYFW Popup" tag1={`AFTERPLAY`} tag2={`Experiment`} />
        <Strip tag="SOHO 2023" tag1={`CONVERSE`} tag2={`Environment`} />
        <Strip tag="15th Aniversary" tag1={`NIKE`} tag2={`Environment`} />
        <Strip tag="Play New Kidvision " tag1={`NIKE`} tag2={`Environment`} />
        <Strip tag="Air Force 12021" tag1={`NIKE`} tag2={`Environment`} />
        <Strip tag="Makers Studio HOI" tag1={`NIKE`} tag2={`Experiment`} />

        <div className="pt-20 pl-14 pb-44">
          <Button width={`w-44`} tag={`All Projects ---->`} />
        </div>
      </main>
    </>
  );
};

export default Part4;
