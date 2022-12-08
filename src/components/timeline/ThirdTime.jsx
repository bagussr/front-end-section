import { Link } from 'react-router-dom';

const ThirdTime = () => {
  return (
    <div className={`md:flex hidden flex-col animate-fade-in-right `}>
      <div className='flex flex-col'>
        <h1 className='text-4xl fonet-bold'>Competition SECTION Vol. 3</h1>
        <p className='text-white font-medium'>
          2 Januari 2023 - 9 Januari 2023
        </p>
      </div>
      <div className='flex flex-col items-center justify-center  mt-5'>
        <p className='text-base'>
          Selain Bootcamp, peserta juga mengikuti kompetisi yang diadakan oleh
          panitia SECTION Vol. 3. Dalam kompetisi ini, peserta Bootcamp
          mengikuti kompetisi React Front-End Web Development sesuai dengan
          kategori yang peserta Bootcamp ikuti dengan tujuan utama yaitu untuk
          mengasah ilmu yang peserta dapatkan dan mengimplementasikannya secara
          langsung.
        </p>
        <a
          href='http://bit.ly/SignupSection3'
          className=' mt-5 bg-gradient-to-r from-[#5334B1] to-[#401881] px-5 py-3 md:flex  text-white rounded-lg drop-shadow-[0_5px_15px_#ffffff3f] hover:drop-shadow-[0_35px_35px_#ffffff3f] transition duration-500 w-full justify-center'>
          Daftar Event
        </a>
      </div>
    </div>
  );
};

export default ThirdTime;
