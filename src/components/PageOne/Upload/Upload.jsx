import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Upload = ({ linkTo, imageUrl, title, body, className }) => {
  return (
    <Link to={linkTo} className={className}>
      <Card className='d-flex flex-row align-items-center border-green-400 upload-card'>
        <Card.Img src={imageUrl} style={{ width: '67px' }} />
        <Card.Body>
          <Card.Title className='text-green-100 font-weight-600 '>
            {title}
          </Card.Title>
          <Card.Text className='text-green-200'>{body}</Card.Text>
        </Card.Body>
      </Card>
    </Link>
  );
};

export default Upload;
