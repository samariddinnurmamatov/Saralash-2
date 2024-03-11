import PropTypes from 'prop-types';

const Button = ({ onClick, children }) => (
    <button className="border-[1px] border-solid border-gray-500 bg-black text-gray-200 py-3 px-9 text-[14px]" type="button" onClick={onClick}>
      {children}
    </button>
);

Button.propTypes = {
    onClick: PropTypes.func.isRequired,
    children: PropTypes.node.isRequired,
};

export default Button;