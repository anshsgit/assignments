import React, {useState, useEffect, useRef} from 'react';

export default function Timer() {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [hours, setHours] = useState(0);
  let interval = useRef(null);
  const [isRunning, setIsRunning] = useState(true);

  useEffect(() => {
    interval.current = setInterval(() => {
      setSeconds(sec => sec+1)
    }, 1000);
    
    return () => clearInterval(interval.current);
  }, []);

  useEffect(() => {
    if(seconds>59) {
      setSeconds(0);
      setMinutes(min => min+1);
    }
  }, [seconds]);

  useEffect(() => {
    if(minutes>59) {
      setMinutes(0);
      setHours(hour => hour+1);
    }
  }, [minutes]);

  return <div style = {{display: 'flex', alignItems: 'center', height: '100vh'}}>
    <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: '30%', height: '200px', backgroundColor: 'rgb(29, 47, 79)', color: 'white', fontSize: '32px', borderRadius: '10px', boxShadow: '5px 10px #222222'}}>
    
    <div>
    {String(hours).padStart(2, '0')}:
    {String(minutes).padStart(2, '0')}:
    {String(seconds).padStart(2, '0')}
    </div>

    <div>
    <button onClick={() => {
      setSeconds(0);
      setMinutes(0);
      setHours(0);
    }}>Reset</button>

    <button onClick={() => {
      if(isRunning) {
        clearInterval(interval.current);
      }
      else {
        interval.current = setInterval(() => {
          setSeconds(sec => sec+1);
        }, 1000)
      }

      setIsRunning(run => !run);
    }}>{isRunning? 'Pause' : 'Resume'}</button>
    </div>
    </div>
  </div>
}
