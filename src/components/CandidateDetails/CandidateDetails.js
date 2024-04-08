import React from 'react';

const CandidateDetails = (props) => {
  return (
    <div className="candidate-details">
      <h2>{props.name}</h2>
      <p>Votes: {props.votes}</p>
      <ul>
        {props.votes > 0 && props.voters.map(voter => (
          <li key={voter}>
            {voter} 
            <button onClick={() => props.onDelete(voter)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default CandidateDetails;