import React, { useState } from 'react'

//TODO: move logic for autoComplete here
//TODO: make displayData component

const AutoComplete = ({
  hasData = false,
  data = [],
  handleOptions,
  handleSelectedOption,
}) => {
  const [optionsDisplay, setOptionsDisplay] = useState(false)
  console.log('AutoComplete Rendered')
  function DisplayOptions() {
    if (optionsDisplay) {
      return (
        <>
          {data?.flat().map((item, index) => (
            <li
              onClick={() => {
                handleSelectedOption(item)
                setOptionsDisplay(false)
              }}
              className='w-fit px-2 py-1 rounded-xl hover:bg-teal-500'
              key={item + index}
            >
              {item.name}
            </li>
          ))}
        </>
      )
    }
    return null
  }
  return (
    <div>
      AutoComplete:
      <section className='relative'>
        <input
          disabled={!hasData}
          className='rounded-lg '
          onChange={e => {
            handleOptions(e.target.value)
          }}
          onFocus={() => {
            setOptionsDisplay(true)
          }}
          type='text'
          name='optionsInput'
          id='options'
        />
        <ul className='w-fit max-w-sm focus:outline-none bg-slate-400 rounded-lg'>
          {DisplayOptions()}
        </ul>
      </section>
    </div>
  )
}

export default AutoComplete
