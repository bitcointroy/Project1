import { GETTING_NOTES, NOTES_RECEIVED } from './actions';

const initialState = {
	notes: []
};
export const reducer = (state = initialState, action) => {
	switch (action.type) {
		case GETTING_NOTES:
			return state;
		case NOTES_RECEIVED:
			return {...state, notes: action.payload};
		default:
			return state;
	}
};

