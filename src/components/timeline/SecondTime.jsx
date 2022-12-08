import { Link } from 'react-router-dom';

const SecondTime = () => {
  return (
    <div className={`md:flex hidden flex-col animate-fade-in-right `}>
      <div className='flex flex-col'>
        <h1 className='text-4xl font-medium pr-5'>Bootcamp SECTION Vol. 3</h1>
        <p className='text-white font-medium'>
          12 Desember 2022 - 2 Januari 2023
        </p>
      </div>
      <div className='flex flex-col items-center justify-center  mt-5'>
        <p className='text-base'>
          Bootcamp SECTION Vol. 3 adalah program yang memberikan peserta
          kesempatan untuk belajar mengenai Front-End Web Development khususnya
          menggunakan HTML dan CSS secara intensif selama 3 minggu. Peserta akan
          didampingi mentor mulai dari instalasi hingga pengaplikasiannya.
          Bootcamp dibagi menjadi dua kategori yaitu kategori Beginner dan
          Competent. Peserta dapat mengikuti sesi Live Class bersama mentor
          serta konsultasi dan Belajar Mandiri melalui website yang telah
          disediakan.
        </p>
        <div className='hidden lg:flex justify-center w-full items-center '>
          <a
            href='http://bit.ly/SignupSection3'
            className=' mt-5 bg-gradient-to-r from-[#5334B1] to-[#401881] px-5 py-3 md:flex  text-white rounded-lg drop-shadow-[0_5px_15px_#ffffff3f] hover:drop-shadow-[0_35px_35px_#ffffff3f] transition duration-500 w-full justify-center'>
            Daftar Event
          </a>
        </div>
      </div>
    </div>
  );
};

export default SecondTime;
