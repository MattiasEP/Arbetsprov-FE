import React, { FC } from 'react'
import cn from 'classnames'
import styles from './WeatherItem.module.scss'
import { useWeather, Weather } from '../../context/weatherContext'
import Plus from '../../assets/svg/plus'
import { getWeatherIcon } from '../../utils/getWeatherIcon'

interface Props extends Weather {
  idx: number
}

const WeatherItem: FC<Props> = ({ idx, location, temp, code }) => {
  const { deleteWeather } = useWeather()

  const classNames = cn(styles.item, {
    [styles.wet]: false,
    [styles.red]: temp >= 20,
    [styles.yellow]: temp >= 1 && temp <= 19,
    [styles.blue]: temp <= 0,
  })

  return (
    <div className={classNames}>
      <span className={styles.icon}>{getWeatherIcon(code)}</span>
      <div className={styles.data}>
        <p className={styles.temp}>{temp}°</p>
        <p className={styles.location}>{location}</p>
      </div>
      <button onClick={() => deleteWeather(idx)}>
        <Plus rotated />
      </button>
    </div>
  )
}

export default WeatherItem
