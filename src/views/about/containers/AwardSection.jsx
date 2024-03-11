import Awards from '../../../assets/about/awards-logo.png';


const AwardsSection = () => (
    <div className="flex items-center justify-around py-10">
      {[...Array(4)].map((_, index) => (
        <div key={index}>
          <img src={Awards} alt={`Award ${index + 1}`} />
        </div>
      ))}
    </div>
);

export default AwardsSection;