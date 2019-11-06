import { actionTypes } from '../actions';
/**
 * @function secretWordReducer
 * @param {string} state - secret words.
 * @param {object} action - action to be reduced.
 * @returns {string} - new secretWord.
 */
export default (state = null, action) => {
  switch (action.type) {
    case actionTypes.SET_SECRET_WORD:
      return action.payload;
    default:
      return state;
  }
};
