import { INPUT_TYPE } from "../utils/constant";
import PropTypes from "prop-types";

const Input = ({
  error,
  value,
  disabled,
  typeInput,
  className,
  max,
  min,
  req,
  placeholder,
  styleType = INPUT_TYPE.DEFAULT,
  ...rest
}) => {
  const classNames = [className, ""];

  if (styleType === INPUT_TYPE.DEFAULT) {
    classNames.push(
      "bg-back p-[14px] font-[500] text-[12px] placeholder:text-gray text-dark rounded-[3px] w-full border-[1px] border-light hover:!border-blue-primary focus:!border-gray-500 transition-all duration-100 ease-in-out"
    );
  }
  if (styleType === INPUT_TYPE.CHECKOUT) {
    classNames.push(
      "border border-stroke rounded-[12px] text-[14px] font-[400] px-[20px] py-[13px] hover:!border-blue-primary focus:!border-blue-primary transition-all duration-100 ease-in-out"
    );
  }
  if (styleType === INPUT_TYPE.SIMPLE) {
    classNames.push("py-[13px] px-[20px] rounded-[10px] text-dark text-[16px] font-[500] border-[1px] border-solid border-stroke bg-light flex-1 transition-all duration-100 ease-in-out");
  }
  if (error) {
    classNames.push("border-[1px] border-solid border-red-primary");
  }

  return (
    <input
      {...rest}
      value={value}
      max={max}
      min={min}
      required={req}
      type={typeInput}
      disabled={disabled}
      placeholder={placeholder}
      className={classNames.join(" ")}
    />
  );
};

Input.propTypes = {
  error: PropTypes.bool,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  disabled: PropTypes.bool,
  typeInput: PropTypes.string.isRequired,
  className: PropTypes.string,
  max: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  min: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  req: PropTypes.bool,
  placeholder: PropTypes.string,
  styleType: PropTypes.string,
};

export default Input;
