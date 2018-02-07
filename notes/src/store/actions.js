import axios from 'axios';

export const GETTING_NOTES = 'GETTING_NOTES';
export const NOTES_RECEIVED = 'NOTES_RECEIVED';

const getUrl = "http://localhost:8080/notes";

export const getNotes = () => {
  return dispatch => {
    dispatch({
      type: GETTING_NOTES
    });
    axios.get(getUrl)
      .then(({
        data
      }) => {
        dispatch({
          type: NOTES_RECEIVED,
          payload: data
        });
      })
      .catch(err => console.log(err));
  };
};