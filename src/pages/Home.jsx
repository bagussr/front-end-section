import React from 'react';
import { Link } from 'react-router-dom';
import CountdownTimer from '../components/countdown/CountdownTimer';
import HeroImage from '../images/hero-image.png';

const Home = () => {
  return (
    <>
      <div className='before:content-bg-vector-left left-10 top-0 bottom-0 absolute lg:flex hidden animate-fade-in-left '></div>
      {/* <div class="bg-left-vector left-10 top-0 bottom-0 absolute lg:flex hidden "></div> */}

      <div className='animate-fade-in-down  md:h-full min-h-screen '>
        {/* wrapper */}
        <div className='flex flex-col items-center justify-center lg:px-40 md:px-20 px-10  mx-auto  gap-3  pt-24 md:w-8/12'>
          <h1 className='lg:text-5xl md:text-4xl text-3xl font-bold text-white  text-center  '>
            Become a Reliable Web Developer in Era 5.0
          </h1>

          <p className='text-center text-base mt-6 mb-5 '>
            Kegiatan yang tepat untuk kamu yang mau membuat inovasi website.
            Kembangkan dirimu dengan bergabung bersama kami!
          </p>

          {/* Countdown */}
          <CountdownTimer />
          {/* CTA */}

          <div className='flex justify-center flex-col md:flex-row items-center w-full gap-3 my-5'>
            <a
              href='http://bit.ly/SignupSection3'
              className='bg-gradient-to-r from-[#5334B1] to-[#401881] px-5 py-3 text-white rounded-lg drop-shadow-[0_1px_10px_#ffffff3f] hover:drop-shadow-[0_35px_35px_#ffffff3f] transition duration-500'>
              Daftar Event
            </a>

            <Link
              to='/timeline'
              className=' border border-[#5334B1] shadow-lg px-5 py-3 hover:drop-shadow-[0_35px_35px_#ffffff3f] rounded-lg transition duration-500'>
              Lihat Jadwal
            </Link>
          </div>
          {/* hero image */}
          <div className='flex justify-center items-center '>
            <img src={HeroImage} alt='hero' />
          </div>
        </div>
      </div>

      <div className='after:content-bg-vector-right right-10 top-0 bottom-0  absolute lg:flex hidden animate-fade-in-right '></div>
      {/* <div className="bg-right-vector  bg-no-repeat  bg-right-top h-screen right-10 top-0 bottom-0  absolute lg:flex border hidden z-[2] w-2/12"></div> */}
    </>
  );
};

export default Home;
