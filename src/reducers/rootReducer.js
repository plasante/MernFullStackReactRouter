const initialState = {
  cards: [
    {
      id: 1,
      title: 'Pierre',
      body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto consequatur cumque ducimus earum eum eveniet excepturi facere fugiat inventore, laboriosam libero maiores, modi nemo odio quam quidem recusandae soluta tempora'
    },
    {
      id: 2,
      title: 'Karo',
      body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto consequatur cumque ducimus earum eum eveniet excepturi facere fugiat inventore, laboriosam libero maiores, modi nemo odio quam quidem recusandae soluta tempora'
    },
    {
      id: 3,
      title: 'Juby',
      body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto consequatur cumque ducimus earum eum eveniet excepturi facere fugiat inventore, laboriosam libero maiores, modi nemo odio quam quidem recusandae soluta tempora'
    },
  ]

}
const rootReducer = (state = initialState, action) => {
  console.log('action.id = ', action.id);
  switch (action.type) {
    case 'DELETE_CARD':
      if(action.id && action.id !== undefined) {
        return {
          ...state,
          cards: state.cards.filter(card => card.id !== action.id)
        }
      }
      return state;
    case 'ADD_CARD':
      return {
        ...state,
        cards: [...state.cards, action.payload]
      };
    default:
      return state;
  }
}

export default rootReducer;