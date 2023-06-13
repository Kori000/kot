import React from 'react';
import useKot from '../context/useKot';
import { ice } from '../assets/image';
import { useTranslation } from 'react-i18next';
import { Button } from 'antd';

const Home = () => {
  const { t, i18n } = useTranslation();
  const { number, setNumber, goToSecond } = useKot();
  return (
    <div className='w-full h-screen flex justify-center items-center flex-col text-[#fff] text-2xl gap-4 pb-40'>
      <img
        src={ice}
        alt=''
        className='w-[10%]'
      />

      <p>{t('hellow')}~ Kot-React</p>
      <div className='flex items-center justify-center gap-5 '>
        <Button
          type='primary'
          onClick={() => {
            i18n.changeLanguage('zh');
          }}
        >
          中文
        </Button>
        <Button
          type='primary'
          onClick={() => {
            i18n.changeLanguage('en');
          }}
        >
          English
        </Button>
        <Button
          type='primary'
          onClick={() => {
            i18n.changeLanguage('ko');
          }}
        >
          한국인
        </Button>
        <Button
          type='primary'
          onClick={() => {
            i18n.changeLanguage('ja');
          }}
        >
          日本語
        </Button>
      </div>
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
      <Button
        type='default'
        onClick={() => {
          goToSecond();
        }}
      >
        {t('jump')}
      </Button>
    </div>
  );
};

export default Home;
