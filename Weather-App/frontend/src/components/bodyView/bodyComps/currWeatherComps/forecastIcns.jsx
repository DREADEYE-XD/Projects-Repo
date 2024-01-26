import React from 'react'

const ForecastIcns = (props) => {
  return (
    <li className="icn">
          <h4>{props.day}</h4>
          <img
            src={props.icn}
            alt=""
            height="40"
            width="40"
          />
          <h4>{props.temp + "°"}</h4>
    </li>
  )
}

export default ForecastIcns