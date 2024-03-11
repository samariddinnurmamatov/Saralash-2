import PropTypes from 'prop-types';

const FaqSection = ({ title, content }) => (
    <div>
      <h2 className="text-[19px]">{title}</h2>
      <p className="text-gray-500 pt-2 text-[16px]">{content}</p>
    </div>
);

FaqSection.propTypes = {
    title: PropTypes.string,
    content: PropTypes.string,
};
  

export default FaqSection;
