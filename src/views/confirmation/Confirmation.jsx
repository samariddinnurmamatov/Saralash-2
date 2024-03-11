import { Fragment } from "react";
import Container from "../../components/shared/Container";
import Cnfirmation from "../../assets/confirmation/confirmation.png"

const Confirmation = () => {
  return (
    <Fragment>
        <section className="page-wrapper confirmation py-10">
            <Container>
                <div className="flex flex-col items-center justify-between">
                    <img src={Cnfirmation} alt="" className="w-[15%]" />
                    <div className="flex flex-col items-center justify-center gap-2">
                        <h2 className="text-[28px]">Thank you! For your payment</h2>
                        <p className="text-gray-500">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore, sed.</p>
                    </div>
                    <button className="border-[1px] border-solid border-gray-500 bg-black text-gray-200 text-[14px] py-3 mt-5 px-9" type="button">CONTINUE SHOPPING</button>
                </div>
            </Container>
        </section>
    </Fragment>
  );
};

export default Confirmation;
