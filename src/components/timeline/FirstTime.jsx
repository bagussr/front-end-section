import { Link } from 'react-router-dom';

const FirstTime = () => {
  return (
    <div className={`flex flex-col animate-fade-in-right `}>
      <div className='flex flex-col'>
        <h1 className='text-4xl font-medium'>
          Become a Reliable Web Developer in Era 5.0
        </h1>
        <p className='text-white font-medium'>11 Desember 2022</p>
      </div>
      <div className='lg:flex hidden flex-col items-center justify-center  mt-5'>
        <p className='text-base'>
          Seminar SECTION Vol.3 merupakan awal dari rangkaian kegiatan SECTION
          VOl. 3 yang diikuti oleh masyarakat umum dengan tujuan untuk menambah
          pengetahuan dan keterampilan dalam mempersiapkan karir sebagai Web
          Developer di masa mendatang. Seminar ini mengundang dua pemateri ahli
          yang mampu membuka wawasan secara luas terkait dengan dunia Front End
          Web Development. Acara ditutup dengan pemaparan teknis bootcamp yang
          akan dilakukan di esok harinya..
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

export default FirstTime;
