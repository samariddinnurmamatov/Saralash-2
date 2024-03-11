import { Fragment } from 'react';
import Slider from 'react-slick';
import About from '../../assets/about/about.jpg';
import Members from './containers/Members';
import { teamMembers } from '../../mock/data';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import SectionContainer from './components/SectionContainer';
import AwardsSection from './containers/AwardSection';
import AboutShopSection from './containers/AboutShopSection';
import ImageSection from './components/ImageSection';
import Header from './containers/Header';

const AboutUs = () => {

    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
          { breakpoint: 990, settings: { slidesToShow: 3 } },
          { breakpoint: 880, settings: { slidesToShow: 2 } },
          { breakpoint: 660, settings: { slidesToShow: 1 } },
        ],
    };
  return (
    <Fragment>
      <Header />
      <section className="about-section py-20">
        <SectionContainer>
          <div className="flex items-center justify-between gap-9">
            <ImageSection src={About} alt="About Us" />
            <AboutShopSection />
          </div>
          <AwardsSection />
        </SectionContainer>
      </section>
      <section className="team-members-section">
        <SectionContainer>
          <h2 className="text-center">TEAM MEMBERS</h2>
          <Slider {...settings}>
            {teamMembers.map((member) => (
              <Members key={member.id} data={member} />
            ))}
          </Slider>
        </SectionContainer>
      </section>
    </Fragment>
  );
};


export default AboutUs;
