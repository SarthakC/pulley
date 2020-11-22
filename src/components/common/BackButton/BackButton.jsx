import React from 'react';
import { IoIosArrowBack } from 'react-icons/io';
import { Link } from 'react-router-dom';
const BackButton = ({ text, linksTo }) => {
  return (
    <Link to={linksTo} style={{ color: '#9F9F9F' }}>
      <h5 className='d-flex align-items-center mb-3 font-weight-600'>
        <IoIosArrowBack />
        {text}
      </h5>
    </Link>
  );
};

export default BackButton;
