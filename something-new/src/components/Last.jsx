import React from "react";
import ReactDOM from "react-dom";
import icon from "/src/image/icon-star.svg";

function Last() {
  return (
    <>
      <div className="card">
        <div className="card-body">
          <div className="card-img">
            <img src={icon} alt="" />
          </div>
          <h2 className="card-head">How did we do?</h2>
          <p className="card-text">
            Please let us know how we did with your support request. All
            feedback is appreciated to help us improve our offering!
          </p>
        </div>
        <div class="flex-container">
          <button className="rateButtons">1</button>
          <button className="rateButtons">2</button>
          <button className="rateButtons">3</button>
          <button className="rateButtons">4</button>
          <button className="rateButtons">5</button>
        </div>
<br />
        <button className="submit">SUBMIT</button>

      </div>
    </>
  );
}

export default Last;
