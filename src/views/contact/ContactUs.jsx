import { Fragment } from "react";
import Header from "./containers/Header";
import SectionContainer from "./components/SectionContainer";
import ContactForm from "./components/ContactForm";
import ContactInfo from "./components/ContactInfo";
import SocialIcons from "./components/Socialicons";


const ContactUs = () => {
  return (
    <Fragment>
        <Header />
        <section className="contact-section py-20">
            <SectionContainer>
                <div className="flex items-center justify-between gap-9">
                    <ContactForm />
                    <div className="flex flex-col gap-8">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d191884.8398719096!2d69.1145579120261!3d41.28273794610496!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b0cc379e9c3%3A0xa5a9323b4aa5cb98!2z0KLQsNGI0LrQtdC90YIsINCj0LfQsdC10LrQuNGB0YLQsNC9!5e0!3m2!1sru!2s!4v1710091359226!5m2!1sru!2s" width="600" height="320" style={{ border: 0 }} allowfullscreen="" loading="lazy" />
                        <ContactInfo />
                        <SocialIcons />
                    </div>
                </div>
            </SectionContainer>
        </section>
    </Fragment>
  );
};

export default ContactUs;
