import PropTypes from 'prop-types';

export const TypographyParagraph = ({ children }) => <p className="py-5 text-gray-500">{children}</p>;

TypographyParagraph.propTypes = {
    level: PropTypes.string,
    children: PropTypes.node.isRequired,
};
  