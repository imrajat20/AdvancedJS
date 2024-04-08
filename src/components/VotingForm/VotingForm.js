import React from 'react';

const VotingForm = (props) => {
  
  const handleUsernameChange = (e) => props.setUsername(e.target.value);
  const handleCandidateChange = (e) => props.setSelectedCandidate(e.target.value);

  return (
    <div className="voting-form">
      <input type="text" placeholder="Enter your name" value={props.username} onChange={handleUsernameChange} />
      <select value={props.selectedCandidate} onChange={handleCandidateChange}>
        <option value="">Select a candidate</option>
        {props.candidates.map(candidate => (
          <option key={candidate.name} value={candidate.name}>{candidate.name}</option>
        ))}
      </select>
      <button type="button" onClick={props.handleVote}>Vote</button>
    </div>
  );
}

export default VotingForm;