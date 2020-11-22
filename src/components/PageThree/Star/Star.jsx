import * as React from 'react';

function Star({ fill, className }) {
  return (
    <svg
      width={18}
      height={18}
      viewBox='0 0 18 18'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={className}
    >
      <path
        d='M8.062 1.535c.322-.871 1.554-.871 1.876 0l1.603 4.333a1 1 0 00.591.59l4.333 1.604c.871.322.871 1.554 0 1.876l-4.333 1.603a1 1 0 00-.59.591l-1.604 4.333c-.322.871-1.554.871-1.876 0L6.46 12.132a1 1 0 00-.591-.59L1.535 9.937c-.871-.322-.871-1.554 0-1.876L5.868 6.46a1 1 0 00.59-.591l1.604-4.333z'
        fill={fill || '#226147'}
      />
    </svg>
  );
}

export default Star;
