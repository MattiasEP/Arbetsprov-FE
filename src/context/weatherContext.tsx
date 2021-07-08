import React, { createContext, useState, FC } from 'react'
import { useContext } from 'react'

export interface Weather {
  location: string
  temp: number
  code: number
}

type WeatherContextState = {
  weathers: Weather[]
  addWeather: (weather: Weather) => void
  deleteWeather: (idx: number) => void
}

const weatherContextDefaultValues: WeatherContextState = {
  weathers: [],
  addWeather: () => {},
  deleteWeather: () => {},
}

export const WeatherContext = createContext<WeatherContextState>(
  weatherContextDefaultValues
)

export const WeatherProvider: FC = ({ children }) => {
  const [weathers, setWeathers] = useState<Weather[]>(
    weatherContextDefaultValues.weathers
  )

  const addWeather = (weather: Weather) => {
    setWeathers(
      wheaters => [...wheaters, weather]
      // [...wheaters, weather].sort((a, b) => (a.temp > b.temp ? -1 : 1))
    )
  }

  const deleteWeather = (idx: number) =>
    setWeathers(weathers => weathers.filter((_, i) => i !== idx))

  return (
    <WeatherContext.Provider
      value={{
        weathers,
        addWeather,
        deleteWeather,
      }}
    >
      {children}
    </WeatherContext.Provider>
  )
}

export const useWeather = (): WeatherContextState => useContext(WeatherContext)
