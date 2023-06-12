import React from "react"
import imagePic from "./assets/illustration-thank-you.svg"
export default function Thank(props) {
  console.log(props)
  return (
    <div className="main-surv-container thank">
      <img
        className="thank-img"
        src={imagePic}
        alt="receipt device with a card"
      />
      <p className="main-text thank-text">
        You selected {props.props} out of 5
      </p>
      <h1 className="main-title">Thank you!</h1>
      <p className="main-text">
        We appreciate you taking the time to give a rating. If you ever need
        more support, don't hesitate to get in touch!
      </p>
    </div>
  )
}
