import { Fragment } from "react";
import Header from "./containers/Header";
import SectionContainer from "./components/SectionContainer";
import { pricingOptions } from "../../mock/data";
import PricingCard from "./containers/PricingCard";


const Pricing = () => {
  return (
    <Fragment>
        <Header />
        <section className="contact-section py-20">
            <SectionContainer>
                <div className="flex items-center justify-between gap-10">
                    {pricingOptions.map((option, index) => (
                    <PricingCard key={index} {...option} />
                    ))}
                </div>
            </SectionContainer>
        </section>
    </Fragment>
  );
};

export default Pricing;
