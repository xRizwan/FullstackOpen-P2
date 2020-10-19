import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const MostVoted = (props) => {
  let index = props.votes.findIndex((vote) => vote === props.highest);

  return (
    <>
      <h3>Anecdote with the largest vote</h3>
      <div>{props.anecdotes[index]}</div>
    </>
  )
}

const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(new Array(6).fill(0))

  const handleClick = () => {
    let rand = Math.round(Math.random() * 4)
    console.log(votes);

    // to make sure that the same anecdote is not displayed
    while (rand === selected){
      rand = Math.round(Math.random() * 5)
    }

    setSelected(rand);
  }

  const handleVote = () => {
    let curVote = votes[selected];
    let newVote = curVote + 1;
    let newArr = [...votes]
    
    newArr[selected] = newVote;
    setVotes(newArr);
  }

  return (
    <>
      <h3>Anecdote of the day</h3>
      <div>
        {props.anecdotes[selected]}
      </div>
      <div>
        has {votes[selected]} votes.
      </div>
      <button onClick={handleVote}>Vote</button>
      <button onClick={handleClick}>Next Anecdote</button>

      <MostVoted highest={Math.max(...votes)} votes={votes} anecdotes={props.anecdotes}/>
    </>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)