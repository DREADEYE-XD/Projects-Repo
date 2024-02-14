import React from 'react'

const ForecastIcns = (props) => {
  return (
    <li className="icn">
          <h4>{props.day}</h4>
          <img
            src={`https://openweathermap.org/img/wn/${props.icn}@2x.png`}
            alt=""
            height="40"
            width="40"
          />
          <h4 className='icn-temp'>{props.temp + "°"}</h4>
    </li>
  )
}

export default ForecastIcns