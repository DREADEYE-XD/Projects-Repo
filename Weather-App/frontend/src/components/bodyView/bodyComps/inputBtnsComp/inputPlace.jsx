import React from 'react'

const InputPlace = ({setCityName}) => {
  return (
    <>
        <input
          type="text"
          placeholder="Enter a place"
          onChange={(e) => {
            setCityName(e.target.value);
          }}
        />
    </>
  )
}

export default InputPlace