import React from 'react';
import Form from '../components/Form';

const Register = () => {
  return (
    <div>
      <h1 className='text-center p-5 text-[40px] font-montserrat font-bold'>
        Satu langkah lagi
      </h1>
      <h2 className='text-center text-[23px] font-montserrat'>
        Daftarkan dirimu dengan mengisi formulir di bawah{' '}
      </h2>
      <h2 className='text-center pb-5 text-[23px] font-montserrat'>
        Kerahasiaan datamu akan terjamin{' '}
      </h2>
      <div className='grid lg:w-6/12 md:w-8/12 w-full pt-5 md:px-10 px-3 bg-primary rounded-lg m-auto text-[20px]'>
        <Form />
      </div>
    </div>
  );
};

export default Register;
