import React from 'react'

const InfoCard = ({ data }) => {
  return (
    <div className='flex justify-center'>
      InfoCard:
      <section className='flex shadow-md rounded-md bg-slate-500 mx-2 my-1'>
        <div className='flex flex-col items-center'>
          <div className='m-1'>
            <h1>{data[0]?.name}</h1>
            {Object.entries(data[0]).map((item, index) => (
              <p className='px-2 py-1' key={item[0] + index}>
                <b>{item[0]}</b>: {item[1]}
              </p>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default InfoCard