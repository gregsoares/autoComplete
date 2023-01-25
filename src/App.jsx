import React, { useEffect, useState } from 'react'
import { getMovies, getActors, getDirectors } from './utility/api'

import AutoComplete from './Pages/AutoComplete/AutoComplete'
import InfoCard from './Components/InfoCard'
/** TODO:
 *
 * -- Call the API to get the data (from json files) :
 * -- Load all the data into the state
 * -- Pass the data to the components
 *
 *
 */
function App() {
  const [data, setData] = useState({})
  const [options, setOptions] = useState([])
  const [selectedOption, setSelectedOption] = useState(null)

  const handleSelectedOption = option => {
    if (options.length === 1) {
      setSelectedOption(options[0])
    }

    if (option) setSelectedOption([option])
  }

  const handleOptions = inputString => {
    const filteredOptions = []

    if (data && inputString) {
      filteredOptions.push(
        data
          ?.filter(item => {
            return item.name.toLowerCase().includes(inputString.toLowerCase())
          })
          ?.flat()
      )

      setOptions(filteredOptions)
      if (filteredOptions.length === 1) {
        setSelectedOption(filteredOptions[0])
      }
    }
  }

  const fetchData = async () => {
    // Order in array matters so categories are saved in the same order in state
    const allData = [
      getActors().then(res => res),
      getMovies().then(res => res),
      getDirectors().then(res => res),
    ]
    setData(await Promise.all(allData).then(res => res.flat()))
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div className='bg-slate-300 min-h-screen '>
      <header className='p-6 border'>
        <h1 className='text-4xl font-bold text-center'>AutoComplete</h1>
      </header>
      <section className='p-6 border'>
        {data && (
          <AutoComplete
            data={options.length ? options : data}
            handleOptions={handleOptions}
            handleSelectedOption={handleSelectedOption}
          />
        )}
        {selectedOption?.length && <InfoCard data={selectedOption} />}
      </section>
    </div>
  )
}

export default App
