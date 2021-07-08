import React, { FC, useState } from 'react'
import Plus from '../../assets/svg/plus'
import styles from './Search.module.scss'

import useApi from '../../hooks/useApi'
import Moon from '../../assets/svg/moon'

const Search: FC = () => {
  const { getWeather, isLoading } = useApi()
  const [value, setValue] = useState<string>('Stockholm')

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (value.length && !isLoading) {
      getWeather(value)
      setValue('')
    }
  }

  return (
    <form onSubmit={onSubmit} className={styles.search}>
      <label htmlFor="input">Plats:</label>
      <input id="input" onChange={onInputChange} type="text" value={value} />
      <button type="submit">
        {isLoading ? <Moon className={styles.loading} /> : <Plus />}
      </button>
    </form>
  )
}

export default Search
