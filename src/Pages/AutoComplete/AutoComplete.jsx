import React, { useState } from 'react'

//TODO: move logic for autoComplete here
//TODO: make displayData component

const AutoComplete = ({ data, handleOptions, handleSelectedOption }) => {
  const [optionsDisplay, setOptionsDisplay] = useState(false)
  return (
    <div>
      AutoComplete:
      <section className='relative'>
        <input
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
        {optionsDisplay && (
          <ul className='absolute top-12'>
            {data?.flat().map((item, index) => (
              <li
                onClick={() => {
                  handleSelectedOption(item)
                  setOptionsDisplay(false)
                }}
                className='bg-gray-500 w-fit px-2 py-1 rounded-xl'
                key={item?.name + item?.birthdate + item?.birthname + index}
              >
                {item.name}
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  )
}

export default AutoComplete
