/**
@desc  
  Custom hook to calculate the countdown to a given date.
@usage
  const countdown = useCountdown('2023-10-01T00:00:00');
  console.log(countdown);
  <div>{countdown.days}</div>
  <div>{countdown.hours}</div>
  <div>{countdown.minutes}</div>
  <div>{countdown.seconds}</div>
  */

import { useEffect, useState } from 'react';

const useCountdown = dateString => {
  const [countdown, setCountdown] = useState({
    days: '00',
    hours: '00',
    minutes: '00',
    seconds: '00'
  });

  useEffect(() => {
    const countDownDate = new Date(dateString).getTime();
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countDownDate - now;
      if (distance <= 0) {
        clearInterval(interval);
        setCountdown({ days: '00', hours: '00', minutes: '00', seconds: '00' });
      } else {
        const days =
          ('0' + Math.floor(distance / (1000 * 60 * 60 * 24))).length > 2
            ? Math.floor(distance / (1000 * 60 * 60 * 24)) + ''
            : ('0' + Math.floor(distance / (1000 * 60 * 60 * 24))).slice(-2);
        const hours = (
          '0' + Math.floor((distance / (1000 * 60 * 60)) % 24)
        ).slice(-2);
        const minutes = ('0' + Math.floor((distance / 1000 / 60) % 60)).slice(
          -2
        );
        const seconds = ('0' + Math.floor((distance / 1000) % 60)).slice(-2);
        setCountdown({ days, hours, minutes, seconds });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [dateString]);

  return countdown;
};

export default useCountdown;
