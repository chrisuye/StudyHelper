import './App.css';
import React, { useState, useEffect } from 'react';
import Normal from './components/normal/Normal';
import Study from './components/study/Study';

const App = () => {
  const [hour, setHour] = useState(parseInt(localStorage.getItem('hour')) ? parseInt(localStorage.getItem('hour')) : 0)
  const [min, setMin] = useState(parseInt(localStorage.getItem('min')) ? parseInt(localStorage.getItem('min')) : 0)
  const [clock, setClock] = useState('')
  const [alarm, setAlarm] = useState('')

  const myTimer = () => {
    const d = new Date();
    if (alarm === d.toLocaleTimeString()) {
      alert('Alarm!')
    }
    setClock(d.toLocaleTimeString())
  }

  const getTime = () => {
    console.log(clock.split(':'))
    const [h, m, z] = clock.split(':')
    const sumMin = parseInt(m) + parseInt(min)
    const sumHour = parseInt(h) % 12 + parseInt(hour)
    let newHour = sumHour
    let newMin = sumMin
    let zone = z.split(' ')[1]
    if (sumMin >= 60) {
      newHour = sumHour + 1
      newMin = sumMin - 60
    }
    console.log(newHour, newMin, zone)
    if (newHour >= 12) {
      newHour = (newHour - 12) % 12
      zone = zone === 'PM' ? 'AM' : 'PM'
    }
    if (newHour === 0) {
      newHour = 12
    }
    console.log(`${newHour}:${newMin}:${z.split(' ')[0]} ${zone}`)
    setAlarm(`${newHour}:${newMin}:${z.split(' ')[0]} ${zone}`)
  }

  setInterval(myTimer ,1000);

  useEffect(() => {
    localStorage.setItem('min', min)
    localStorage.setItem('hour', hour)
  }, [min, hour])

  return (
    <div className="App">
      <h1>{clock}</h1>
      <input placeholder='Hour' type='number' onChange = {e => setHour(e.target.value)}/>
      <input placeholder='Min' type='number' onChange = {e => setMin(e.target.value)}/>
      <button onClick = {() => getTime()}>Study</button>

      <Normal />
      <Study />
    </div>
  );
}

export default App;
