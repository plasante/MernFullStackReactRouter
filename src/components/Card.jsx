import React from 'react';
import { useSelector } from "react-redux";

const Card = (props) => {

  // Connecting this component to the Redux store
  const cards = useSelector((state) => {
    // Getting the user from the URL
    let user = props.match.params.user
    return state.cards.find(card => card.title === user);
  });

  // Deconstructing the cards object
  const { title, body } = cards;

  return (
    <div>
      <div
        className={'ui raised very padded text container segment'}
        style={{marginTop: '80px'}}
      >
        <h3 className={'ui header'}>{title}</h3>
        <p>{body}</p>
      </div>
    </div>
  );
};

export default Card;