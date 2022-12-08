import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Logo from '../images/Logotype.png';

const Nav = () => {
  const [offCanvas, setOffCanvas] = useState(false);
  // const [dropdown, setDropdown] = useState(false);
  // import logo

  return (
    <nav className='lg:px-40 md:px-10 px-1 py-5 bg-primary'>
      <div className='mx-auto px-10'>
        <div className='container '>
          <div className='flex items-center  justify-between  relative'>
            <div className='md:w-2/12 flex items-center '>
              {/* logo */}
              <Link to='/'>
                <img src={Logo} className='' alt='' />
              </Link>
              {/* <div className="flex justify-center items-center bg-gray-500 w-10 h-10 mr-3 shadow-2xl">
                E
              </div>
              Epictetus */}
            </div>

            <div
              className={`lg:w-8/12 w-full top-0 h-full md:flex fixed justify-center lg:static  bg-gradient-to-b from-primary to-secondary lg:bg-none p-10 transition-all  z-50 ${
                offCanvas ? 'right-0' : '-right-full'
              } `}>
              <button
                className='absolute top-5 right-10 lg:hidden '
                onClick={() => {
                  setOffCanvas(!offCanvas);
                }}>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  className='feather feather-x '>
                  <line x1='18' y1='6' x2='6' y2='18'></line>
                  <line x1='6' y1='6' x2='18' y2='18'></line>
                </svg>
              </button>
              <ul className='lg:flex lg:space-x-14 lg:items-center justify-center flex-col lg:flex-row space-y-4 lg:space-y-0  w-full '>
                <li className='' onClick={() => setOffCanvas(false)}>
                  <NavLink to='/'>
                    <div className='lg:w-1/4 transform lg:border-b-2 lg:border-white transition-all duration-500 hover:w-1/2 lg:text-base text-3xl lg:mt-0 mt-10'>
                      <p className='w-28 '>Beranda</p>
                    </div>
                  </NavLink>
                </li>
                <li className='' onClick={() => setOffCanvas(false)}>
                  <NavLink to='/about' className='text-white '>
                    {/* Tentang Kami */}
                    <div className='lg:w-1/4 w-full transform lg:border-b-2 lg:border-white transition-all duration-500 hover:w-1/2 lg:text-base text-3xl lg:mt-0 mt-10'>
                      <p className='w-28 lg:flex inline'>Tentang Kami</p>
                    </div>
                  </NavLink>
                </li>
                <li onClick={() => setOffCanvas(false)} className=''>
                  <NavLink to='/faq' className='text-white'>
                    <div className='lg:w-1/4 transform lg:border-b-2 lg:border-white transition-all duration-500 hover:w-1/2 lg:text-base text-3xl lg:mt-0 mt-10'>
                      <p className='w-28 '>FAQ </p>
                    </div>
                  </NavLink>
                </li>

                <div className='lg:hidden flex  justify-center w-full  items-center  '>
                  <a
                    href='http://bit.ly/SignupSection3'
                    className='bg-gradient-to-r from-[#5334B1] to-[#401881] px-5 py-3 md:flex  text-white rounded-lg drop-shadow-[0_5px_15px_#ffffff3f] hover:drop-shadow-[0_35px_35px_#ffffff3f] transition duration-500 w-full justify-center'>
                    Daftar Event
                  </a>
                </div>
              </ul>
            </div>

            <div className='lg:flex hidden items-center relative '>
              <a
                href='http://bit.ly/SignupSection3'
                className='bg-gradient-to-r from-[#5334B1] to-[#401881] px-5 py-3 md:flex  text-white rounded-lg drop-shadow-[0_5px_15px_#ffffff3f] hover:drop-shadow-[0_35px_35px_#ffffff3f] transition duration-500 w-full justify-center'>
                Daftar Event
              </a>
            </div>

            <div className='flex lg:hidden ' aria-label='hamburger'>
              <button
                className=''
                onClick={() => {
                  setOffCanvas(!offCanvas);
                }}>
                <svg
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'>
                  <g opacity='0.4'>
                    <path
                      d='M3 12H21'
                      stroke='white'
                      strokeWidth='2'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                    <path
                      d='M3 6H21'
                      stroke='white'
                      strokeWidth='2'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                    <path
                      d='M3 18H21'
                      stroke='white'
                      strokeWidth='2'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                  </g>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
