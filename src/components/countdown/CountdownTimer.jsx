import useCountDown from '../../hooks/useCountDown';
import ShowCounter from './ShowCounter';

const CountdownTimer = () => {
  const D_DAY = new Date('2022-12-10T23:59:59');
  const [days, hours, minutes, seconds] = useCountDown(D_DAY);
  return (
    <ShowCounter
      days={days}
      hours={hours}
      minutes={minutes}
      seconds={seconds}
    />
  );
};

export default CountdownTimer;
