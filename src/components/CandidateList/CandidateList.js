import React from 'react';
import CandidateDetails from '../CandidateDetails/CandidateDetails';

const CandidateList = (props) => {
  return (
    <div className="candidate-list">
      {props.users.map(candidate => (
        <CandidateDetails
          key={candidate.name} 
          name={candidate.name} 
          votes={candidate.votes} 
          voters={candidate.voters} 
          onDelete={props.onDelete} 
        />
      ))}
    </div>
  );
}

export default CandidateList;
