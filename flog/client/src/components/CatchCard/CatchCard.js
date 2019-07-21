import React from 'react';
import './CatchCard.css';

const CatchCard = props => (
  <div className='catch-card card flex-fill h-75 mb-3 mt-3'>
        <div>{props.location}</div>
        <div>{props.dateCaught}</div>
        <div>{props.note}</div>
    </div>
);

export default CatchCard;
