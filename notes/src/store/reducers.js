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
		case NOTE_DELETED:
            return {...state};
                // , notes:action.payload};
		default:
			return state;
	}
};

