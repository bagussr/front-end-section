import React, { useState } from 'react';
import FirstTime from '../components/timeline/FirstTime';
import SecondTime from '../components/timeline/SecondTime';
import ThirdTime from '../components/timeline/ThirdTime';

const TimeLine = () => {
  const [isActive, setIsActive] = useState('timeline1');

  const renderTimeline = () => {
    if (isActive === 'timeline1') {
      return <FirstTime />;
    } else if (isActive === 'timeline2') {
      return <SecondTime />;
    } else if (isActive === 'timeline3') {
      return <ThirdTime />;
    }
  };

  return (
    <div className='animate-fade-in-down '>
      <div className='before:content-bg-vector-left left-10 top-0 bottom-0 absolute lg:flex hidden animate-fade-in-left '></div>

      <div className=' flex justify-between items-center  lg:px-72 md:px-52 px-20  lg:pt-24 pt-10'>
        {/* timeline */}
        <div className='flex-1 '>
          <ol className='relative border-l border-gray-200 dark:border-gray-700'>
            <li
              className='hover:cursor-pointer animate-fade-in-down transition ease-in-out delay-150  hover:-translate-x-1 hover:scale-100 duration-300'
              onClick={() => setIsActive('timeline1')}>
              <div className='mb-24 ml-4'>
                <div
                  className={`absolute w-10 h-10 bg-gray-200 rounded-full mt-1.5 -left-5 border border-white  ${
                    isActive === 'timeline1'
                      ? 'dark:border-lightpurple dark:bg-lightpurple'
                      : 'dark:border-gray-900 dark:bg-gray-700'
                  }  flex items-center justify-center`}>
                  1
                </div>
                <div className='ml-5'>
                  <h3 className='text-md md:text-lg font-semibold text-gray-900 dark:text-white'>
                    Seminar SECTION Vol.3
                  </h3>
                  <time className='mb-4 text-sm font-normal leading-none text-gray-400 dark:text-gray-500'>
                    11 Desember 2022
                  </time>
                </div>
              </div>
            </li>
            <li
              className='hover:cursor-pointer animate-fade-in-down transition ease-in-out delay-150  hover:-translate-x-1 hover:scale-100 duration-300 '
              onClick={() => setIsActive('timeline2')}>
              <div className='mb-24 ml-4'>
                <div
                  className={`absolute w-10 h-10 bg-gray-200 rounded-full mt-1.5 -left-5 border border-white ${
                    isActive === 'timeline2'
                      ? 'dark:border-lightpurple dark:bg-lightpurple'
                      : 'dark:border-gray-900 dark:bg-gray-700'
                  }  flex items-center justify-center`}>
                  2
                </div>
                <div className='ml-5'>
                  <h3 className='text-md md:text-lg font-semibold text-gray-900 dark:text-white'>
                    Bootcamp SECTION Vol. 3
                  </h3>
                  <time className='mb-4 text-sm font-normal leading-none text-gray-400 dark:text-gray-500'>
                    12 Desember 2022 - 2 Januari 2023
                  </time>
                </div>
              </div>
            </li>
            <li
              className='hover:cursor-pointer animate-fade-in-down transition ease-in-out delay-150  hover:-translate-x-1 hover:scale-100 duration-300 '
              onClick={() => setIsActive('timeline3')}>
              <div className='mb- ml-4'>
                <div
                  className={`absolute w-10 h-10 bg-gray-200 rounded-full mt-1.5 -left-5 border border-white ${
                    isActive === 'timeline3'
                      ? 'dark:border-lightpurple dark:bg-lightpurple'
                      : 'dark:border-gray-900 dark:bg-gray-700'
                  }  flex items-center justify-center`}>
                  3
                </div>
                <div className='ml-5'>
                  <h3 className='text-md md:text-lg font-semibold text-gray-900 dark:text-white'>
                    Competition SECTION Vol. 3
                  </h3>
                  <time className='mb-4 text-sm font-normal leading-none text-gray-400 dark:text-gray-500'>
                    2 Januari 2023 - 9 Januari 2023
                  </time>
                </div>
              </div>
            </li>
          </ol>
        </div>

        <div className='flex-1 lg:flex hidden'>{renderTimeline()}</div>
      </div>
      <div className='after:content-bg-vector-right right-10 top-0 bottom-0  absolute lg:flex hidden animate-fade-in-right '></div>
    </div>
  );
};

export default TimeLine;
