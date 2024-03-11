import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import { useConfig } from "../ConfigProvider";
import { useInputGroup } from "../InputGroup/context";
import useColorLevel from "../hooks/useColorLevel";
import { CONTROL_SIZES, SIZES } from "../utils/constant";
import Spinner from "../Spinner";

const Button = React.forwardRef((props, ref) => {
  const {
    children,
    size,
    color,
    shape,
    variant,
    block,
    icon,
    className,
    disabled,
    loading,
    active,
    ...rest
  } = props;

  // Retrieve theme-related configuration from context providers
  const { themeColor, controlSize, primaryColorLevel } = useConfig();
  const formControlSize = size;
  const inputGroupSize = useInputGroup()?.size;

  // Constants for classNames
  const defaultClass = "button";
  const sizeIconClass = "inline-flex items-center justify-center";

  // Split color for customization
  const splitedColor = color.split("-");

  // Determine button size based on priority
  const buttonSize = size || inputGroupSize || formControlSize || controlSize;
  const buttonColor = splitedColor[0] || themeColor;
  const buttonColorLevel = splitedColor[1] || primaryColorLevel;

  // Custom hook to handle color level adjustments
  const [increaseLevel, decreaseLevel] = useColorLevel(buttonColorLevel);

  // Function to get the size-related className
  const getButtonSize = () => {
    let sizeClass = "";
    switch (buttonSize) {
      case SIZES.LG:
        sizeClass = classNames(
          `h-${CONTROL_SIZES.lg}`,
          icon && !children
            ? `w-${CONTROL_SIZES.lg} ${sizeIconClass} text-2xl`
            : "px-8 py-2 text-base"
        );
        break;
      case SIZES.SM:
        sizeClass = classNames(
          `h-${CONTROL_SIZES.sm}`,
          icon && !children
            ? `w-${CONTROL_SIZES.sm} ${sizeIconClass} text-lg`
            : "px-3 py-2 text-sm"
        );
        break;
      case SIZES.XS:
        sizeClass = classNames(
          `h-${CONTROL_SIZES.xs}`,
          icon && !children
            ? `w-${CONTROL_SIZES.xs} ${sizeIconClass} text-base`
            : "px-3 py-1 text-xs"
        );
        break;
      default:
        sizeClass = classNames(
          `h-${CONTROL_SIZES.md}`,
          icon && !children
            ? `w-${CONTROL_SIZES.md} ${sizeIconClass} text-xl`
            : "px-8 py-2"
        );
        break;
    }
    return sizeClass;
  };

  const disabledClass = "opacity-50 cursor-not-allowed";

  const solidColor = () => {
    const btn = {
      bgColor: active
        ? `bg-${buttonColor}-${increaseLevel}`
        : `bg-${buttonColor}-${buttonColorLevel}`,
      textColor: "text-white",
      hoverColor: active ? "" : `hover:bg-${buttonColor}-${decreaseLevel}`,
      activeColor: `active:bg-${buttonColor}-${increaseLevel}`,
    };
    return getBtnColor(btn);
  };

  const twoToneColor = () => {
    const btn = {
      bgColor: active
        ? `bg-${buttonColor}-200 dark:bg-${buttonColor}-50`
        : `bg-${buttonColor}-50 dark:bg-${buttonColor}-500 dark:bg-opacity-20`,
      textColor: `text-${buttonColor}-${buttonColorLevel} dark:text-${buttonColor}-50`,
      hoverColor: active
        ? ""
        : `hover:bg-${buttonColor}-100 dark:hover:bg-${buttonColor}-500 dark:hover:bg-opacity-30`,
      activeColor: `active:bg-${buttonColor}-200 dark:active:bg-${buttonColor}-500 dark:active:bg-opacity-40`,
    };
    return getBtnColor(btn);
  };

  const defaultColor = () => {
    const btn = {
      bgColor: active
        ? `bg-gray-100 border border-gray-300 dark:bg-gray-500 dark:border-gray-500`
        : `bg-white border border-gray-300 dark:bg-gray-700 dark:border-gray-700`,
      textColor: `text-gray-600 dark:text-gray-100`,
      hoverColor: active ? "" : `hover:bg-gray-50 dark:hover:bg-gray-600`,
      activeColor: `active:bg-gray-100 dark:active:bg-gray-500 dark:active:border-gray-500`,
    };
    return getBtnColor(btn);
  };

  const plainColor = () => {
    const btn = {
      bgColor: active
        ? `bg-gray-100 dark:bg-gray-500`
        : "bg-transparent border border-transparent",
      textColor: `text-gray-600 dark:text-gray-100`,
      hoverColor: active ? "" : `hover:bg-gray-50 dark:hover:bg-gray-600`,
      activeColor: `active:bg-gray-100 dark:active:bg-gray-500 dark:active:border-gray-500`,
    };
    return getBtnColor(btn);
  };

  // Helper function to generate the final className based on styles
  const getBtnColor = ({ bgColor, hoverColor, activeColor, textColor }) => {
    return `${bgColor} ${
      disabled || loading ? disabledClass : hoverColor + " " + activeColor
    } ${textColor}`;
  };

  // Function to determine the button color based on variant
  const btnColor = () => {
    switch (variant) {
      case "solid":
        return solidColor();
      case "twoTone":
        return twoToneColor();
      case "plain":
        return plainColor();
      case "default":
        return defaultColor();
      default:
        return defaultColor();
    }
  };

  // Combine all classNames and styles
  const classes = classNames(
    defaultClass,
    btnColor(),
    `radius-${shape}`,
    getButtonSize(),
    className,
    block ? "w-full" : ""
  );

  // Click event handler
  const handleClick = (e) => {
    const { onClick } = props;
    if (disabled || loading) {
      e.preventDefault();
      return;
    }
    onClick?.(e);
  };

  // Function to render the button content
  const renderChildren = () => {
    if (loading && children) {
      return (
        <span className="flex items-center justify-center">
          <Spinner enableTheme={false} className="mr-1" />
          {children}
        </span>
      );
    }

    if (icon && !children && loading) {
      return <Spinner enableTheme={false} />;
    }

    if (icon && !children && !loading) {
      return <>{icon}</>;
    }

    if (icon && children && !loading) {
      return (
        <span className="flex items-center justify-center">
          <span className="text-lg">{icon}</span>
          <span className="ltr:ml-1 rtl:mr-1">{children}</span>
        </span>
      );
    }

    return <>{children}</>;
  };

  // Render the final button component
  return (
    <button
      type="button"
      ref={ref}
      className={classes}
      {...rest}
      onClick={handleClick}
    >
      {renderChildren()}
    </button>
  );
});

// PropTypes for type-checking
Button.propTypes = {
  children: PropTypes.node,
  disabled: PropTypes.bool,
  loading: PropTypes.bool,
  block: PropTypes.bool,
  shape: PropTypes.oneOf(["round", "circle", "none"]),
  className: PropTypes.string,
  size: PropTypes.oneOf([SIZES.LG, SIZES.SM, SIZES.XS, SIZES.MD]),
  color: PropTypes.string,
  variant: PropTypes.oneOf(["solid", "twoTone", "plain", "default"]),
  icon: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  active: PropTypes.bool,
  onClick: PropTypes.func,
};

// Default props to provide default values
Button.defaultProps = {
  variant: "default",
  shape: "round",
  active: false,
  loading: false,
  disabled: false,
  color: "",
};

// Display name for easier debugging
Button.displayName = 'Button';

// Export the Button component
export default Button;
