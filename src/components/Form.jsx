import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { Axios } from 'axios';

const Form = () => {
  // get last pathname split
  const [url, setUrl] = React.useState();
  const [event, setEvent] = React.useState(
    window.location.pathname.split('/').pop()
  );
  const [link, setLink] = React.useState();
  const navigate = useNavigate();

  const registerEvent = async e => {
    await Axios.post(url, {
      name: '',
      email: '',
      password: '',
      jk: '',
      noWhatsapp: '',
      institusi: '',
      fakultas: '',
    }).then(res => {
      const responose = res.data;
      console.log(responose);
      setLink('');
      navigate('/register-done', {
        state: { name: '', event: event, link: link },
      });
    });
  };

  React.useEffect(() => {
    // Sesuiakan dengan link yang ada di backend
    if (event === 'bootcamp') {
      setUrl('https://127.0.0.1:3001/users/daftar/bootcamp');
    } else if (event === 'seminar') {
      setUrl('https://127.0.0.1:3001/users/daftar/seminar');
    } else {
      setUrl('https://127.0.0.1:3001/users/daftar/competion');
    }
  }, [event]);

  console.log(url);
  return (
    <div>
      <div class=''>
        <form class='bg-gradient-to-br from-[rgba(76,75,82,1)] to-[rgba(22,18,29,1)] shadow-md rounded px-8 pt-6 pb-8 mb-4 border-2'>
          <div class='mb-4'>
            <label class='block text-white text-[20px] font-bold mb-2' for=''>
              Nama Lengkap
            </label>
            <input
              class='shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline'
              id=''
              type='text'
              placeholder='Masukan nama lengkap disini'
            />
          </div>
          <div class='mb-4'>
            <label class='block text-white text-[20px] font-bold mb-2' for=''>
              Jenis Kelamin
            </label>
            <div class='inline-block relative w-full'>
              <select class='shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline text-black'>
                <option disabled selected>
                  Pilih Jenis kelamin
                </option>
                <option>Laki laki</option>
                <option>Perempuan</option>
              </select>
              <div class='pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-black'>
                <svg
                  class='fill-current h-4 w-4'
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 20 20'>
                  <path d='M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z' />
                </svg>
              </div>
            </div>
          </div>
          <div class='mb-4'>
            <label class='block text-white text-[20px] font-bold mb-2' for=''>
              Email
            </label>
            <input
              class='shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline'
              id=''
              type='email'
              placeholder='cth: example@gmail.com'
            />
          </div>
          <div class='mb-4'>
            <label class='block text-white text-[20px] font-bold mb-2' for=''>
              Nomor WhatsApp
            </label>
            <input
              class='shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline'
              id=''
              type='text'
              placeholder='cth: 08123456789'
            />
          </div>
          <div class='mb-4'>
            <label class='block text-white text-[20px] font-bold mb-2' for=''>
              Institusi
            </label>
            <input
              class='shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline'
              id=''
              type='text'
              placeholder='Masukan asal institusi disini'
            />
          </div>
          <div class='mb-4'>
            <label class='block text-white text-[20px] font-bold mb-2' for=''>
              Fakultas
            </label>
            <div class='inline-block relative w-full'>
              <input
                class='shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline'
                id=''
                type='text'
                placeholder='cth: Fakultas Kamda Cibiru'
              />
            </div>
          </div>

          <div class='flex items-center justify-between pt-8'>
            <button
              class='bg-gradient-to-r from-[#5334B1] to-[#401881] md:px-5 md:py-3 p-5 md:flex justify-center text-white rounded-lg w-full'
              type='submit'>
              Kirim data pendaftaran
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
