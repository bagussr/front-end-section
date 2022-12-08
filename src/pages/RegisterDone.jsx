import { useLocation } from 'react-router-dom';

export const RegisterDone = () => {
  const getPath = window.location.pathname;
  console.log(getPath);
  const { name, event, link } = useLocation().state;
  return (
    <>
      <div className='flex w-full items-center justify-center'>
        <div className='flex flex-col w-1/2 mt-10 p-10'>
          <div className='flex flex-col items-center justify-center'>
            <h3 className='text-lg font-bold'>Registrasi Berhasil</h3>
            <p className='text-md text-gray-500 text-center px-24 my-5'>
              Halo {name}, selamat kamu telah berhasil mendaftar di {event}{' '}
              SECTION Vol. 3 dan untuk {name} diharapkan untuk mengikuti link
              berikut ini
            </p>
            <a
              href={link}
              className='bg-gradient-to-r from-[#5334B1] to-[#401881] px-5 py-3 text-white rounded-lg drop-shadow-[0_1px_10px_#ffffff3f] hover:drop-shadow-[0_35px_35px_#ffffff3f] transition duration-500 cursor-pointer'>
              Join Group
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
