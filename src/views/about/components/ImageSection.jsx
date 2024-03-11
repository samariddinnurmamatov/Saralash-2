import PropTypes from 'prop-types';

const ImageSection = ({ src, alt }) => (
    <div className="flex flex-col items-center justify-between gap-6 w-[100%]">
      <img src={src} alt={alt} />
    </div>
);

ImageSection.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default ImageSection;