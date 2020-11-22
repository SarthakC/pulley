import React from 'react';
import excelImg from '../../images/noun_excel.png';
import papersImg from '../../images/noun_papers.png';
import { Container } from 'react-bootstrap';
import { Upload } from '../../components/PageOne';
import LINKS from '../../utils/LINKS';
import { PageHeader } from '../../components/common';

const PageOne = () => {
  return (
    <div>
      <Container className='py-5'>
        <PageHeader subheading='Select how you would like to create your cap table.' />
        <div className='mb-3'>
          <Upload
            linkTo={LINKS.pageTwo}
            imageUrl={excelImg}
            title='Upload Spreadsheet'
            body='Download a cap table spreadsheet template, fill it out, upload the completed template.'
          />
        </div>
        <div className='d-flex align-items-center'>
          <hr class='w-25' />
          <span className='bg-white px-2 text-green-300'>Or</span>
          <hr class='w-75' />
        </div>
        <div className='mt-3'>
          <Upload
            linkTo={LINKS.pageOne}
            imageUrl={papersImg}
            title='Upload Investment Documents'
            body='Download a cap table spreadsheet template, fill it out, upload the completed template.'
          />
        </div>
      </Container>
    </div>
  );
};

export default PageOne;
