import React, { useEffect, useState } from 'react'
import { fetchData } from './utility/apiController'
import AutoComplete from './Pages/AutoComplete/AutoComplete'
import InfoCard from './Components/InfoCard'

// Uncomment the line below to show FCP issue when waiting for data before loading content
// const storedData = await fetchData().then(allData => allData)
function App() {
  // FCP Issue Implementation
  // const [data, setData] = useState(storedData)
  const [data, setData] = useState({})
  const [options, setOptions] = useState([])
  const [selectedOption, setSelectedOption] = useState(null)

  const handleSelectedOption = option => {
    if (options.length === 1) {
      setSelectedOption(options[0])
    }

    if (option) {
      setSelectedOption([option])
    }
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

  function displaySelectedOption() {
    return selectedOption?.length == 1
  }
  useEffect(() => {
    fetchData().then(async allData => setData(allData.flat()))
    return () => {}
  }, [])

  return (
    <div className='bg-slate-300 min-h-screen '>
      <header className='p-6 border'>
        <h1 className='text-4xl font-bold text-center'>AutoComplete</h1>
      </header>
      <section className='p-6 border w-full'>
        {data ? (
          <AutoComplete
            data={options.length ? options : data}
            handleOptions={handleOptions}
            handleSelectedOption={handleSelectedOption}
            hasData={data?.length ? true : false}
          />
        ) : null}
        {displaySelectedOption() && <InfoCard data={selectedOption} />}
      </section>
    </div>
  )
}

export default App
