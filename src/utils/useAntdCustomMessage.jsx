import { messageSuccess, messageError } from '../assets/image/utils';
import { default as message } from 'antd/es/message';
import React from 'react';
const useAntdCustomMessage = () => {
  const MessageSuccess = (showText, time = 1.4) => {
    const text = showText;
    message.error({
      content: <span className='mr-[10px]'>{text}</span>,
      icon: (
        <img
          src={messageSuccess}
          alt='messageSuccess'
          className='inline-block h-[20px] mr-[10px] '
        />
      ),
      duration: time
    });
  };

  const MessageError = (showText, time = 1.4) => {
    const text = showText;
    message.error({
      content: <span className='mr-[10px]'>{text}</span>,
      icon: (
        <img
          src={messageError}
          alt='messageError'
          className='inline-block h-[20px] mr-[10px] '
        />
      ),
      duration: time
    });
  };

  return {
    MessageSuccess,
    MessageError
  };
};

export default useAntdCustomMessage;
