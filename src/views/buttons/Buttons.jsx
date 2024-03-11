import SectionContainer from "./components/SectionContainer";

const Buttons = () => {
  return (
    <section className="Button-Page py-20">
        <SectionContainer>
          <div className="text-center">
            <h2>Button Styles</h2>
          </div>
          <div className="">
                    <div className="w-[100%] flex flex-col gap-5 py-10">
                      <ul className="flex gap-5 w-100">
                        <li className="li"><a href="#!" className="btn btn-main btn-large bg-black text-white" style={{padding: "20px 45px"}}>Default Button</a></li>
                        <li className="li"><a href="#!" className="btn btn-main btn-medium bg-black text-white" style={{padding: "14px 35px"}}>Default Button</a></li>
                        <li className="li"><a href="#!" className="btn btn-main btn-icon bg-black text-white" style={{padding: "14px 35px"}}>Default Button</a></li>
                        <li className="li"><a href="#!" className="btn btn-main btn-small bg-black text-white" style={{padding: "8px 25px"}}>Default Button</a></li>
                      </ul>
                      <ul className="flex gap-5 mt-10 ">
                        <li className="li"><a href="#!" className="bg-black text-white rounded-[10px]" style={{padding: "20px 45px"}}>Round Button</a></li>
                        <li className="li"><a href="#!" className="bg-black text-white rounded-[10px]" style={{padding: "14px 35px"}}>Round Button</a></li>
                        <li className="li"><a href="#!" className="bg-black text-white rounded-[10px]" style={{padding: "14px 35px"}}>Round Button</a></li>
                        <li className="li"><a href="#!" className="bg-black text-white rounded-[10px]" style={{padding: "14px 35px"}}>Round Button</a></li>
                      </ul>
                      <ul className="flex gap-5 mt-10">
                        <li className="li"><a href="#!" className="bg-black text-white rounded-[50px]" style={{padding: "20px 45px"}}>Full Round Button</a></li>
                        <li className="li"><a href="#!" className="bg-black text-white rounded-[20px]"  style={{padding: "14px 35px"}}>Full Round Button</a></li>
                        <li className="li"><a href="#!" className="bg-black text-white rounded-[20px]" style={{padding: "14px 35px"}}>Full Round Button</a></li>
                      </ul>
                    </div>
            </div>		
        </SectionContainer>
    </section>
  );
};

export default Buttons;
