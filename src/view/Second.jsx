import React from 'react';
import useKot from '../context/useKot';
import { ice } from '../assets/image';
import { Button } from 'antd';

import { useTranslation } from 'react-i18next';
const Second = () => {
  const { t, i18n } = useTranslation();
  const { number, setNumber, goToHome } = useKot();
  return (
    <div className='w-full h-screen flex justify-center items-center flex-col text-[#fff] text-2xl gap-4 pb-40'>
      <img
        src={ice}
        alt=''
        className='w-[10%]'
      />
      <p>{t('welcome')}</p>
      <Button
        type='default'
        onClick={() => {
          goToHome();
        }}
      >
        {t('back')}
      </Button>
    </div>
  );
};

export default Second;
