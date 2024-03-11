import PropTypes from 'prop-types';

import { Link } from "react-router-dom";

const Members = ({ data }) => {
    const {name, imageSrc, role} = data;
  return (
    <div className='flex flex-col items-center text-center justify-around py-10'>
        <Link><img src={imageSrc} alt="" style={{ borderRadius: '100%' }} /></Link>
        <h3>{name}</h3>
        <p>{role}</p>
    </div>
  );
};

Members.propTypes = {
    data: PropTypes.shape({
      id: PropTypes.number.isRequired,
      imageSrc: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      role: PropTypes.string.isRequired,
    }).isRequired,
};
  

export default Members;
