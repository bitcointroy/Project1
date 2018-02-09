import { GETTING_NOTES, NOTES_RECEIVED, DELETING_NOTE, NOTE_DELETED } from './actions';

const initialState = {
	notes: []
};

export const reducer = (state = initialState, action) => {
	switch (action.type) {
		case GETTING_NOTES:
			return state;
		case NOTES_RECEIVED:
            return {...state, notes:action.payload};
		case DELETING_NOTE:
			return state;
			// 	const noteID = action.data;	
			//  return state.filter(({ id }) => id !== action.id);
			// 	return {notes: state.notes.filter(notes => this.props.notes.id !== noteID)}
		case NOTE_DELETED:
			// const noteID = action.data;
			return {...state};
            // return {
			// 	notes: state.notes.filter(notes => this.props.notes.id !== noteID)}
			// , notes:action.payload};
		default:
			return state;
	}
};

