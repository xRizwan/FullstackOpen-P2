import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Statistic = (props) => {
  return (
    <tr>
      <td>
      {props.text} : {props.value}
      </td>
    </tr>
  )
}

const Statistics = ({bad, good, neutral}) => {

  const all = bad + good + neutral

  if (all > 0){
    return (
      <>
        <h3>Statistics</h3>
        <table>
          <tbody>
            <Statistic text={"Good"} value={good}></Statistic>
            <Statistic text={"Neutral"} value={neutral}></Statistic>
            <Statistic text={"Bad"} value={bad}></Statistic>
            <Statistic text={"All"} value={all}></Statistic>
            <Statistic text={"Average"} value={(good - bad) / all}></Statistic>
            <Statistic text={"Positive"} value={`${(good / all) * 100} %`}></Statistic>
          </tbody>
        </table>
      </>
    )
  }

  else {
    return (
      <>
      <h3>Statistics</h3>
      <div>No feedback given.</div>
      </>
    )
  }
}

const Button = ({text, clickHandler}) => {

  return (
    <button onClick={clickHandler}>
      {text}
    </button>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h3>Give Feedback!</h3>
      <div>
        <Button clickHandler={() => setGood(good + 1)} text={"good"}></Button>
        <Button clickHandler={() => setNeutral(neutral + 1)} text={"neutral"}></Button>
        <Button clickHandler={() => setBad(bad + 1)} text={"bad"}></Button>
      </div>
      <br/>
      <Statistics good={good} bad={bad} neutral={neutral} />
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)