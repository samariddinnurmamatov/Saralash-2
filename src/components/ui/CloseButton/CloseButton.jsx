import React from 'react'
import { HiX } from 'react-icons/hi'
import classNames from 'classnames'
import PropTypes from "prop-types";

const CloseButton = React.forwardRef((props, ref) => {
	const { absolute, className, defaultStyle, ...rest } = props
	const closeButtonAbsoluteClass = 'absolute z-10'

	const closeButtonClass = classNames(
		'close-btn',
		defaultStyle && 'close-btn-default',
		absolute && closeButtonAbsoluteClass,
		className
	)

	return (
		<span
			className={closeButtonClass}
			role="button"
			{...rest}
			ref={ref}
		>
			<HiX />
		</span>
	)
})

CloseButton.defaultProps = {
	defaultStyle: true,
	absolute: false, // Add the absolute prop to defaultProps
};

// Add PropTypes validation
CloseButton.propTypes = {
	absolute: PropTypes.bool, // Validate the absolute prop
	className: PropTypes.string,
	defaultStyle: PropTypes.bool,
  };
CloseButton.displayName = 'CloseButton';

export default CloseButton
