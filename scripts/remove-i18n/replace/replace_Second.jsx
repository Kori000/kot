import React from 'react';
import useKot from '../context/useKot';
import { ice } from '../assets/image';
import { Button } from 'antd';

const Second = () => {
  const { goToHome } = useKot();
  return (
    <div className='w-full h-screen flex justify-center items-center flex-col text-[#fff] text-2xl gap-4 pb-40'>
      <img
        src={ice}
        alt=''
        className='w-[10%]'
      />
      <p>Welcome</p>
      <Button
        type='default'
        onClick={() => {
          goToHome();
        }}
      >
        Back
      </Button>
    </div>
  );
};

export default Second;
