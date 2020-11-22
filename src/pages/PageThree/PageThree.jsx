import React from 'react';
import { Container, ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { BackButton, PageHeader } from '../../components/common';
import Star from '../../components/PageThree/Star/Star';
import FloatDoodle from '../../images/FloatDoodle.png';
import { IoIosArrowForward } from 'react-icons/io';
import LINKS from '../../utils/LINKS';

const OPTIONS = [
  {
    title: 'Equity Calculator',
    body: 'Details on the benefits of equity calculator',
    fill: '#70D2BB',
  },
  {
    title: 'Download your cap table',
    body: 'Activity description',
    fill: '#3F9572',
  },
  {
    title: 'Create <Company>’s Stock Certificate',
    body: 'Activity description',
    fill: '#226147',
  },
];

const PageThree = () => {
  return (
    <div>
      <Container className='py-5'>
        <PageHeader subheading='Now that you’ve got the frame of your cap table done, you’re free to explore the rest of what Pulley can offer you.' />
        <BackButton text='Go Back' linksTo={LINKS.pageTwo} />
        <section
          className='text-center py-4 rounded'
          style={{ background: '#F1F8F4' }}
        >
          <img
            src={FloatDoodle}
            alt='FloatDoodle'
            style={{ mixBlendMode: 'multiply' }}
          />
        </section>
        <ListGroup>
          {OPTIONS.map((option, idx) => (
            <ListGroup.Item className='border-right-0 border-left-0 ' key={idx}>
              <Link className='d-flex align-items-center justify-content-between'>
                <div className='d-flex align-items-center'>
                  <Star className='mr-3' fill={option.fill} />
                  <div>
                    <p className='mb-0 font-weight-bold font-weight-600 text-green-100'>
                      {option.title}
                    </p>
                    <p className='mb-0 text-green-200'>{option.body}</p>
                  </div>
                </div>
                <IoIosArrowForward className='h3 mb-0 text-green-50' />
              </Link>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </Container>
    </div>
  );
};

export default PageThree;
