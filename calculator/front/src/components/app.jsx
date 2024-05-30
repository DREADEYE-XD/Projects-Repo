import React from 'react'
import './app.css'
import ButtonNumber from './buttonNumber'
import ButtonOperation from './buttonOperation'

const app = () => {
  return (
    <>
        <div className="outer-cont">
            <div className="inner-cont">
                <div className="inner-upper">
                    <input id='numInp' type="text" placeholder='Here' />
                    <div className="history-btn">H</div>
                    <div className="output-cont">Result</div>
                </div>
                <div className="inner-lower">
                    <ButtonOperation operator={"C"} />
                    <ButtonOperation operator={"( )"} />
                    <ButtonOperation operator={"%"} />
                    <ButtonOperation operator={"/"} />  
                    <ButtonNumber number={7}/>
                    <ButtonNumber number={8}/>
                    <ButtonNumber number={9}/>
                    <ButtonOperation operator={"x"} />
                    <ButtonNumber number={4}/>
                    <ButtonNumber number={5}/>
                    <ButtonNumber number={6}/>
                    <ButtonOperation operator={"-"} />
                    <ButtonNumber number={7}/>
                    <ButtonNumber number={8}/>
                    <ButtonNumber number={9}/>
                    <ButtonOperation operator={"+"} />
                    <ButtonOperation operator={"+/-"} />
                    <ButtonNumber number={0}/>
                    <ButtonOperation operator={"."} />
                    <ButtonOperation operator={"="} />
                </div>
            </div>
        </div>
    </>
  )
}

export default app