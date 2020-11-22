import React, { useState, useEffect } from 'react';
import { Container, Form, ListGroup } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import LINKS from '../../utils/LINKS';
import { BackButton, PageHeader } from '../../components/common';

const OPTIONS = [
  {
    title: 'Add Founder Shares',
    body: 'Details on what founder shares are',
  },
  {
    title: 'Add Investments',
    body: 'What are Investments, when you would have/add them',
  },
  {
    title: 'Add Equity Plans',
    body: 'Equity plan description',
  },
  {
    title: 'Add Employee Grants',
    body: 'Employee grant description',
  },
  {
    title: 'Review Cap Table',
    body: 'All done? Invite your lawyer to review your cap table',
  },
];

const PageTwo = () => {
  const history = useHistory();
  const [checked, setChecked] = useState([]);
  const toggleCheck = (e) => {
    const idx = e.target.id;
    if (idx) {
      setChecked((prevState) => {
        if (prevState.includes(idx)) return prevState.filter((i) => i !== idx);
        return [...prevState, idx];
      });
    }
  };

  useEffect(() => {
    if (checked.length === 5) history.push(LINKS.pageThree);
  }, [checked]);

  return (
    <Container className='py-5'>
      <PageHeader
        subheading='Stuck on what to do? You can always come back here to check on what else
        you’ll need to add to complete your cap table.'
      />
      <div>
        <BackButton
          text='Upload Investment Documents'
          linksTo={LINKS.pageOne}
        />
        <Form>
          <ListGroup>
            {OPTIONS.map((option, idx) => (
              <ListGroup.Item
                className='border-right-0 border-left-0 '
                onClick={(e) => toggleCheck(e)}
                key={idx}
              >
                <Form.Check type='checkbox' id={`${idx}`}>
                  <Form.Check.Label className='label-container'>
                    <Form.Check.Input type='checkbox' />
                    <span className='checkmark'></span>
                    <p className='mb-0 text-black font-weight-600'>
                      {option.title}
                    </p>
                    <p className='mb-0 text-green-200'>{option.body}</p>
                  </Form.Check.Label>
                </Form.Check>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Form>
      </div>
    </Container>
  );
};

export default PageTwo;
