import React, {useEffect} from 'react';
import { useSelector, useDispatch } from "react-redux";
import {useNavigate, useParams} from "react-router-dom";
import { deleteCard, fetchUsers } from "../actions/cardActions";

const Card = (props) => {

  let { user } = useParams();

  const card = useSelector((state) => {
    return state.cards.find(card => card.title === user);
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { title, body } = card;

  const users = useSelector((state) => {
    return state.users.data;
  });

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  const onButtonClickHandler = (id) => {
    dispatch(deleteCard(id));
    navigate('/contact');
  }

  return (
    users && users.length > 0
      ? users.map((user, index) => (
        <div
          key={user.id || index}
          className='ui raised very padded text container segment'
          style={{marginTop: '80px'}}
        >
          <h3 className='ui header'>{user.name}</h3>
          <p>{user.email}</p>
          <button
            className='ui primary right floated button'
            onClick={() => onButtonClickHandler(user.id)}
          >
            Delete
          </button>
        </div>
      ))
      : <p>Loading...</p>
  );
}; // C'est ici que le composant Card est fermé

export default Card; // Je suppose que vous voulez exporter Card comme le composant par défaut