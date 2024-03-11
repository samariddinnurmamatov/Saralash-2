import { Fragment } from "react";
import Header from "./containers/Header";
import { faqSections } from "../../mock/data";
import FaqSection from "./containers/FaqSections";
import SectionContainer from "./components/SectionContainer";

const Faq = () => {
  return (
    <Fragment>
        <Header />
        <section className="about-section py-20">
            <SectionContainer>
                <div className="flex justify-between gap-20">
                    <div className="flex flex-col gap-4 w-[90%]">
                        <h2 className="text-[28px]">Frequently Asked Questions</h2>
                        <p className="text-gray-500">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi, repudiandae.</p>
                        <a href="#" className="text-gray-500">admin@mail.com</a>
                    </div>
                    <div className="flex flex-col gap-3">
                        {faqSections.map((section) => (
                            <FaqSection key={section.title} {...section} />
                        ))}
                    </div>
                </div>
            </SectionContainer>
        </section>
    </Fragment>
  );
};

export default Faq;
