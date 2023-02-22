const DisplaySelectedData = data => {
  return (
    <>
      {data?.flat()?.map((item, index) => (
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
      )) || null}
    </>
  )
}

export default DisplaySelectedData
