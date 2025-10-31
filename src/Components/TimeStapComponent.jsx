import { useEffect, useState } from "react";

const TimeStapComponent = ({days, hours, minutes, seconds}) => {
    const [timeStamp, setTimeStamp] = useState({
        days: days,
        hours: hours,
        minutes: minutes,
        seconds: seconds
    });
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeStamp((prev) => {
        let { days, hours, minutes, seconds } = prev;

        if (days === 0 && hours === 0 && minutes === 0 && seconds === 0) {
          clearInterval(timer);
          return prev;
        }

        if (seconds > 0) {
          seconds -= 1;
        } else {
          seconds = 59;
          if (minutes > 0) {
            minutes -= 1;
          } else {
            minutes = 59;
            if (hours > 0) {
              hours -= 1;
            } else {
              hours = 23;
              if (days > 0) {
                days -= 1;
              }
            }
          }
        }

        return { days, hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);


    return (
    <>    
    <div className="d-flex flex-column justify-content-start align-items-start gap-2">
        <h2 className='offer-time'>Deals and offers</h2>
        <p className='offer-time'>Hygiene equipments</p>
        <div className="mt-4 d-flex justify-content-start align-items-center gap-3 w-100">
            <div className="time-stamp days">
                <h2 className="color-white">{  parseInt(timeStamp.days) >= 10 ? timeStamp.days : `0${timeStamp.days}`}</h2>
                <p className="offer-time">Days</p>
            </div>
            <div className="time-stamp hours">
                <h2 className="color-white">{ parseInt(timeStamp.hours) >= 10 ? timeStamp.hours : `0${timeStamp.hours}`}</h2>
                <p className="offer-time">Hours</p>
            </div>
            <div className="time-stamp minutes">
                <h2 className="color-white">{ parseInt(timeStamp.minutes) >= 10 ? timeStamp.minutes : `0${timeStamp.minutes}`}</h2>
                <p className="offer-time">Min</p>
            </div>
            <div className="time-stamp secons">
                <h2 className="color-white">{ parseInt(timeStamp.seconds) >= 10 ? timeStamp.seconds : `0${timeStamp.seconds}`}</h2>
                <p className="offer-time">Sec</p>
            </div>
        </div>
    </div>
    </>
  )
}

export default TimeStapComponent;