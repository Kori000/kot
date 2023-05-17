import React from 'react';
import useKot from '../context/useKot';
import { ice } from '../assets/image';
import { useTranslation } from 'react-i18next';
import { Button } from 'antd';
import 'antd/dist/reset.css';
const Home = () => {
  const { t, i18n } = useTranslation();
  const { number, setNumber } = useKot();
  return (
    <div className='w-full h-screen flex justify-center items-center flex-col text-[#fff] text-2xl gap-4 pb-40'>
      <img
        src={ice}
        alt=''
        className='w-[10%]'
      />
      <p>{t('hellow')}~ Kot-React</p>

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
      <div className='flex items-center justify-center gap-5 '>
        <Button type='primary'>中文</Button>
        <div>中文</div>
        <div>English</div>
        <div>한국인</div>
        <div>日本語</div>
      </div>
    </div>
  );
};

export default Home;
