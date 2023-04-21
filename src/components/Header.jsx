import React from 'react';
import useKot from '../context/useKot';
import { ice } from '../assets/image';
const Header = () => {
  const { hellow, number, setNumber } = useKot();
  console.log(hellow);
  return (
    <div className='w-full h-screen flex justify-center items-center flex-col text-[#fff] text-2xl gap-4 pb-40'>
      <img
        src={ice}
        alt=''
        className='w-[10%]'
      />
      <p>Kot-React</p>
      <p>Hellow! {hellow}</p>

      <div className='flex items-center justify-center gap-5 '>
        <button
          type='button'
          className='bg-[#fff] text-[#000] px-5 py-2 rounded-md '
          onClick={() => {
            setNumber(number - 1);
          }}
        >
          -
        </button>
        <div className='text-2xl '>{number}</div>
        <button
          type='button'
          className='bg-[#fff] text-[#000] px-5 py-2 rounded-md '
          onClick={() => {
            setNumber(number + 1);
          }}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default Header;
