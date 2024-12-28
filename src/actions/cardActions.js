import axios from "axios";

export const deleteCard = (id) => {
  return {
    type: 'DELETE_CARD',
    id
  }
};

export const fetchUsers = () => {
  return(dispatch) => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then((response) => {
        // response.data est maintenant les données de l'utilisateur
        dispatch({type: 'FETCH_USERS', payload: response.data});
      })
      .catch(error => {
        console.error("Erreur pendant l'appel API", error);
      });
  }
}