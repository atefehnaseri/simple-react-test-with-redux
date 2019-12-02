import {mockData} from "../../mockData";
// Actions
export const DELETE_CARD_INFO = 'card/DELETE';

// Reducer
const cardInitial = {cardInfo: mockData};
export default (state = cardInitial, action) => {
  switch (action.type) {
    case DELETE_CARD_INFO:
      const newCardInfo = state.cardInfo.filter(card => card.id !== action.payload);
      return {cardInfo: newCardInfo};
    default:
      return state;
  }
};

// Action Creators
export const deleteCardInfo = (payload) => {
  return {
    type: DELETE_CARD_INFO,
    payload,
  };
};
