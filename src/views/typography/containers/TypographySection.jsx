import PropTypes from 'prop-types';

const TypographySection = ({ title, children }) => (
    <div>
      <h1 className="text-center text-[35px] py-3">{title}</h1>
      {children}
    </div>
);

TypographySection.propTypes = {
    title: PropTypes.string,
    children: PropTypes.node.isRequired,
};
  

export default TypographySection;
