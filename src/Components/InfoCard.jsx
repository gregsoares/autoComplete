const InfoCard = ({ data }) => {
  function DisplayResults() {
    return Object.entries(data[0]).map((item, index) => (
      <p className='px-2 py-1' key={item[0] + index}>
        <b className='capitalize'>{item[0]}</b>: {item[1]}
      </p>
    ))
  }
  return (
    <div className='flex justify-center'>
      InfoCard:
      <section className='flex shadow-md rounded-md bg-slate-500 mx-2 my-1 max-w-lg'>
        <div className='flex flex-col items-center'>
          <div className='m-1'>{DisplayResults()}</div>
        </div>
      </section>
    </div>
  )
}

export default InfoCard
