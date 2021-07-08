import { useState } from 'react'
import axios from 'axios'
import { useWeather } from '../context/weatherContext'

import { allCodes } from '../utils/getWeatherIcon'

const useApi = () => {
  const [isLoading, setIsLoading] = useState(false)
  const { addWeather } = useWeather()

  const getWeather = (location: string) => {
    setIsLoading(true)

    addWeather({
      location,
      temp: Math.floor(Math.random() * (50 - -30) + -30),
      code: allCodes[Math.floor(Math.random() * allCodes.length)],
    })

    setTimeout(() => {
      setIsLoading(false)
    }, 3000)
  }

  return {
    isLoading,
    getWeather,
  }
}

export default useApi
