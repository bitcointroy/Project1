import axios from 'axios';

export const GETTING_NOTES = 'GETTING_NOTES';
export const NOTES_RECEIVED = 'NOTES_RECEIVED';
export const DELETING_NOTE = 'DELETING_NOTE';
export const NOTE_DELETED = 'NOTE_DELETED';

const getUrl = 'http://localhost:3000/notes';

export const getNotes = () => {
	return (dispatch) => {
		dispatch({
			type: GETTING_NOTES
		});
		axios
			.get(getUrl)
			.then(({ data }) => {
        console.log('ACTIONS HERE');
				dispatch({
					type: NOTES_RECEIVED,
					payload: data
				});
			})
			.catch((err) => console.log(err));
	};
};

// export const deleteNote = (id) => {
// 	return (dispatch) => {
// 		dispatch({
// 			type: DELETING_NOTE
// 		});
// 		axios
// 			.get(getUrl)
// 			.then(({ data }) => {
//         console.log('Preparing to Filter');
				
//       })
//       .then(({data})) => {
//         data.filter()
//         dispatch({
// 					type: NOTES_RECEIVED,
// 					payload: data
// 				});
//       }
// 			.catch((err) => console.log(err));
// 	};
// };


export const deleteNote = (id) => {
  const deleteUrl = `http://localhost:3000/notes/${id}`;
	return (dispatch) => {
		dispatch({
			type: DELETING_NOTE
		});
		axios
			.delete(deleteUrl)
			.then(({ data }) => {
        console.log('delete ACTIONS HERE');
				dispatch({
					type: NOTE_DELETED,
					payload: data
        });
        console.log(data);
      })
      .then(({ data }) => dispatch({
        type: NOTES_RECEIVED,
        payload: data
      }))
			.catch((err) => console.log(err));
  };
};
