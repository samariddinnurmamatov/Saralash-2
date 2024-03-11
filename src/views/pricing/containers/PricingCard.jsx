import PropTypes from 'prop-types';

const PricingCard = ({ title, price, description, features }) => (
  <div className="flex flex-col gap-10 w-[23%]">
    <div>
      <h1 className="font-bold text-[18px]">{title}</h1>
      <strong className="text-[48px]">{price}</strong>
      <p className="text-gray-500">{description}</p>
    </div>
    <ul className="flex flex-col gap-5 text-gray-500 px-2">
      {features.map((feature, index) => (
        <li key={index}>{feature}</li>
      ))}
    </ul>
    <div>
      <button className="border-[1px] border-solid border-gray-500 bg-black text-white py-3 px-9" type="button">
        SUBMIT
      </button>
    </div>
  </div>
);

PricingCard.propTypes = {
    title: PropTypes.string,
    price: PropTypes.string,
    description: PropTypes.string,
    features: PropTypes.string,
};
  
export default PricingCard;
