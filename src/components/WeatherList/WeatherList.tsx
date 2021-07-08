import React from 'react'
import styles from './WeatherList.module.scss'
import { useWeather } from '../../context/weatherContext'
import WeatherItem from '../WeatherItem/WeatherItem'

const WeatherList = () => {
  const { weathers } = useWeather()

  return (
    <ul className={styles.list}>
      {weathers.map((w, i) => (
        <WeatherItem key={i} idx={i} location={w.location} temp={w.temp} code={w.code} />
      ))}
    </ul>
  )
}

export default WeatherList
