import React from "react"
import starImg from "./assets/icon-star.svg"
import Thank from "./thank"
function App() {
  const [score, setScore] = React.useState(0)
  const [visibility, setVisibility] = React.useState(false)

  return (
    <main>
      <div
        className={`main-surv-container ${!visibility ? "" : "container-open"}`}
      >
        <div className="image-circle">
          <img
            className="main-star-img"
            src={starImg}
            alt="an orange star image"
          />
        </div>
        <h1 className="main-title">How did we do?</h1>
        <p className="main-text">
          Please lety us know how we did with your support request. All feedback
          is appreciated to help us improve our offering!
        </p>
        <div className="scores-container">
          <button
            onClick={() => {
              setScore(1)
            }}
            className={`circle-container ${score === 1 ? "active" : ""}`}
          >
            1
          </button>
          <button
            onClick={() => {
              setScore(2)
            }}
            className={`circle-container ${score === 2 ? "active" : ""}`}
          >
            2
          </button>
          <button
            onClick={() => {
              setScore(3)
            }}
            className={`circle-container ${score === 3 ? "active" : ""}`}
          >
            3
          </button>
          <button
            onClick={() => {
              setScore(4)
            }}
            className={`circle-container ${score === 4 ? "active" : ""}`}
          >
            4
          </button>
          <button
            onClick={() => {
              setScore(5)
            }}
            className={`circle-container ${score === 5 ? "active" : ""}`}
          >
            5
          </button>
        </div>
        <button
          disabled={score ? false : true}
          onClick={() => {
            setVisibility(true)
          }}
          className={`btn-submit`}
        >
          submit
        </button>
      </div>
      {visibility && <Thank props={score} />}
    </main>
  )
}

export default App
