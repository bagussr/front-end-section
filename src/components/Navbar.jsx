import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Logo from '../images/Logotype.png';
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  // const [offCanvas, setOffCanvas] = useState(false);

  return (
    <>
      <nav className='flex md:px-40 px-10 py-5 justify-between items-center bg-primary  lg:w-screen animate-fade-in-down  '>
        {/* logo */}
        <div className=' '>
          <img src={Logo} alt='logo' />
        </div>

        {/* links */}

        <ul className='md:flex items-center  space-x-10  font-montserrat '>
          <li>
            <NavLink to='/' className='text-white   '>
              <p className='w-1/2 transform  border-b-2 border-white transition-all duration-500 hover:w-full  '>
                Beranda
              </p>
            </NavLink>
          </li>
          <li>
            <NavLink to='/about' className='text-white '>
              {/* Tentang Kami */}
              <div className='w-1/4 transform border-b-2 border-white transition-all duration-500 hover:w-1/2'>
                <p className='w-28 '>Tentang Kami</p>
              </div>
            </NavLink>
          </li>
          <li>
            <NavLink to='/faq' className='text-white'>
              <p className='w-1/2 transform  border-b-2 border-white transition-all duration-500 hover:w-full  '>
                FAQ
              </p>
            </NavLink>
          </li>
        </ul>

        {/* register button */}
        <div className='flex gap-2 z-20'>
          <Link to='/register'>
            <button className='bg-gradient-to-r from-[#5334B1] to-[#401881] px-5 py-3 md:flex  text-white rounded-lg drop-shadow-[0_5px_15px_#ffffff3f] hover:drop-shadow-[0_35px_35px_#ffffff3f] transition duration-500'>
              Daftar Bootcamp
            </button>
          </Link>

          <button className=' md:hidden' onClick={() => setIsOpen(!isOpen)}>
            <svg
              aria-hidden='true'
              className='h-6 w-6'
              fill='white'
              viewBox='0 0 20 20'
              xmlns='http://www.w3.org/2000/svg'>
              <path
                fillRule='evenodd'
                d='M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z'
                clipRule='evenodd'></path>
            </svg>
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
