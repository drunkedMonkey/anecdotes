import { useState } from "react";
import "./App.css";

function App() {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
  ];

  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0));

  const handlerSelected = () => {
    setSelected(Math.floor(Math.random() * anecdotes.length));
  };

  const handlerVote = () => {
    const newVotes = [...votes];
    newVotes[selected] += 1;
    setVotes(newVotes);
  };

  const maxVotes = Math.max(...votes);
  const anecdoteMostVotedIndex = votes.indexOf(maxVotes);

  return (
    <>
      <h1>Anecdote of the day</h1>
      <div className="anecdote">
        <br />
        <p>{anecdotes[selected]} </p>
      </div>
      <h1>Anecdote with most votes</h1>
      <div className="anecdote">
        <p>{anecdotes[anecdoteMostVotedIndex]}</p>
        <p>Has {votes[anecdoteMostVotedIndex]} votes</p>
      </div>
      <button onClick={handlerVote}>vote</button>
      <button onClick={handlerSelected}>next anecdote</button>
      <div>This anecdote has {votes[selected]}</div>
    </>
  );
}

export default App;
