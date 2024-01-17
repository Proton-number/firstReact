import React from 'react'
import mecon from "/src/image/illustration-thank-you.svg";
function First() {
  return (
    <>
      <div className="card">
        <div className="card-body">
          <div className="card-img2">
            <img src={mecon} alt="" />
          </div>
          <div className="selection">
            You have selected 4 out of 5
          </div>
          <br />
          <h2 className="card-head">
           Thank you!
          </h2>
          <p className="card-text2">
          We appreciate you taking the time to give a rating. If you ever need more support, 
  don’t hesitate to get in touch!
          </p>

        </div>
       
<br />
       

      </div>
    </> 
  )
}

export default First