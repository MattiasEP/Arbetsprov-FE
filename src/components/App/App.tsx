import { FC } from 'react'
import styles from './App.module.scss'
import { WeatherProvider } from '../../context/weatherContext'
import useApi from '../../hooks/useApi'
import Search from '../Search/Search'
import WeatherList from '../WeatherList/WeatherList'
import Footer from '../Footer/Footer'

const App: FC = () => {
  const { isLoading } = useApi()

  console.log('isLoading:', isLoading)

  return (
    <WeatherProvider>
      <div className={styles.app}>
        <h1>Hur är vädret i...</h1>
        <Search />
        <WeatherList />
        <Footer />
      </div>
    </WeatherProvider>
  )
}

export default App
