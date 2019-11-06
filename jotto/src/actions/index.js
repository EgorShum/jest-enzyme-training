import { getLatterMatchCount } from '../helpers';

export const actionTypes = {
  CORRECT_GUESS: 'CORRECT_GUESS',
  GUESS_WORD: 'GUESS_WORD'
};

/**
 * Returns Redux Thunk function that dispatches GUESS_WORD action
 * and (conditionally) CORRECT_GUESS action
 * @function guessWord
 * @param {string} guessedWord - Guessed word.
 * @return {function} - Redux Thunk function.
 */
export const guessWord = guessedWord => {
  return (dispatch, getState) => {
    const secretWord = getState().secretWord;
    const latterMatchCount = getLatterMatchCount(guessedWord, secretWord);

    dispatch({
      type: actionTypes.GUESS_WORD,
      payload: { guessedWord, latterMatchCount }
    });

    if (guessedWord === secretWord) {
      dispatch({ type: actionTypes.CORRECT_GUESS });
    }
  };
};
