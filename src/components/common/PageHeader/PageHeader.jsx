import React from 'react';

const PageHeader = ({ subheading }) => {
  return (
    <header>
      <h1 className='text-green-100 font-weight-800'>
        Let’s Create your Cap Table!
      </h1>
      <h5 className='mb-5 text-green-200 font-weight-400'>{subheading}</h5>
    </header>
  );
};

export default PageHeader;
