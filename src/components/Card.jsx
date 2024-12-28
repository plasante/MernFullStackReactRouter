import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import {useNavigate, useParams} from "react-router-dom";

// Attaching store state to a component
const Card = (props) => {

  let { user } = useParams();

  // Connecting this component to the Redux store using the useSelector
  const card = useSelector((state) => {
    // Getting the user from the URL
    //let user = props.match.params.user
    return state.cards.find(card => card.title === user);
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();


  // Deconstructing the cards object
  const { title, body } = card;

  const onButtonClickHandler = () => {
    let id = card.id;
    dispatch({ type: "DELETE_CARD", id: id });
    navigate('/contact')
  }

  return (
    <div>
      <div
        className={'ui raised very padded text container segment'}
        style={{marginTop: '80px'}}
      >
        <h3 className={'ui header'}>{title}</h3>
        <p>{body}</p>
        <button
          className={'ui primary right floated button'}
          onClick={onButtonClickHandler}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default Card;