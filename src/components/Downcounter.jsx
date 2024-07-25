import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import dayjs from 'dayjs'

function DownCounter({ fecha }) {

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(fecha))

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(fecha))
    }, 1000)

    return () => clearInterval(timer)
  }, [fecha])

  function calculateTimeLeft(endDate) {
    const difference = dayjs(endDate).diff(dayjs(), 'second')
    if (difference <= 0) return {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0
    }

    const secondsInADay = 86400 // 24 * 60 * 60
    const secondsInAnHour = 3600 // 60 * 60
    const secondsInAMinute = 60

    const days = Math.floor(difference / secondsInADay)
    const hoursLeft = difference - days * secondsInADay
    const hours = Math.floor(hoursLeft / secondsInAnHour)
    const minutesLeft = hoursLeft - hours * secondsInAnHour
    const minutes = Math.floor(minutesLeft / secondsInAMinute)
    const seconds = minutesLeft - minutes * secondsInAMinute

    const timeLeft = {
      days,
      hours,
      minutes,
      seconds,
    }

    return timeLeft
  }

  return (
    <section className='flex gap-2 items-center justify-between shadow-md p-4 w-full rounded-md bg-secondary'>
      <section className='flex flex-col items-center'>
        <p className='font-montserrat text-white text-2xl'>{timeLeft.days}</p>
        <span className='font-montserrat text-primary text-lg' translate='no'>D</span>
      </section>
      <section className='flex flex-col items-center'>
        <p className='font-montserrat text-white text-2xl'>{timeLeft.hours}</p>
        <span className='font-montserrat text-primary text-lg' translate='no'>H</span>
      </section>
      <section className='flex flex-col items-center'>
        <p className='font-montserrat text-white text-2xl'>{timeLeft.minutes}</p>
        <span className='font-montserrat text-primary text-lg' translate='no'>M</span>
      </section>
      <section className='flex flex-col items-center'>
        <p className='font-montserrat text-white text-2xl'>{timeLeft.seconds}</p>
        <span className='font-montserrat text-primary text-lg' translate='no'>S</span>
      </section>
    </section>
  )
}

// Definición de propTypes para el componente DownCounter
DownCounter.propTypes = {
  fecha: PropTypes.string.isRequired,
}

export default DownCounter