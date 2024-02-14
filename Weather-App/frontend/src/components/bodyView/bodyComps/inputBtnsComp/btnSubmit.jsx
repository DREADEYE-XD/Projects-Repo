import React from 'react'

const BtnSubmit = ({setVisibility, searchedData}) => {
  return (
    <button onClick={() => { setVisibility(true); searchedData();}}>Submit</button>
  )
}

export default BtnSubmit