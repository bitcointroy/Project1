import axios from 'axios';

export const GETTING_NOTES = 'GETTING_NOTES';
export const NOTES_RECEIVED = 'NOTES_RECEIVED';

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
