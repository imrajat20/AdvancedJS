import React, { useState } from 'react';
import './App.css';
import VotingForm from './components/VotingForm/VotingForm';
import CandidateList from './components/CandidateList/CandidateList';

function App() {
  const initialCandidates = [
    { name: 'Amit', votes: 0, voters: [] },
    { name: 'Sandeep', votes: 0, voters: [] },
    { name: 'Suraj', votes: 0, voters: [] }
  ];

  const [username, setUsername] = useState('');
  const [selectedCandidate, setSelectedCandidate] = useState('');
  const [candidates, setCandidates] = useState(initialCandidates);

  const handleVote = () => {
    if (!username || !selectedCandidate) return;

    const updatedCandidates = candidates.map(candidate => {
      if (candidate.name === selectedCandidate) {
        return {
          ...candidate,
          votes: candidate.votes + 1,
          voters: [...candidate.voters, username]
        };
      }
      return candidate;
    });

    setCandidates(updatedCandidates);
    setUsername('');
    setSelectedCandidate('');
  };

  const handleDelete = (voter) => {
    const updatedCandidates = candidates.map(candidate => {
      if (candidate.voters.includes(voter)) {
        return {
          ...candidate,
          votes: candidate.votes - 1,
          voters: candidate.voters.filter(name => name !== voter)
        };
      }
      return candidate;
    });

    setCandidates(updatedCandidates);
  };

  const totalVotes = candidates.reduce((total, candidate) => total + candidate.votes, 0);

  return (
    <div className="App">
      <h1 className="heading">Class Monitor Voting</h1>
      <p>Total Votes: {totalVotes}</p>

      <VotingForm 
        username={username} 
        setUsername={setUsername} 
        selectedCandidate={selectedCandidate} 
        setSelectedCandidate={setSelectedCandidate} 
        handleVote={handleVote} 
        candidates={candidates} 
      />

      <CandidateList users={candidates} onDelete={handleDelete} />
    </div>
  );
}

export default App;
