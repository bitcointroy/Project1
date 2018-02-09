import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import nock from 'nock';
import { expect } from 'chai';

import {
  HOME_FETCH_NOTE_LIST_BEGIN,
  HOME_FETCH_NOTE_LIST_SUCCESS,
  HOME_FETCH_NOTE_LIST_FAILURE,
  HOME_FETCH_NOTE_LIST_DISMISS_ERROR,
} from 'src/features/home/redux/constants';

import {
  fetchNoteList,
  dismissFetchNoteListError,
  reducer,
} from 'src/features/home/redux/fetchNoteList';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('home/redux/fetchNoteList', () => {
  afterEach(() => {
    nock.cleanAll();
  });

  it('dispatches success action when fetchNoteList succeeds', () => {
    const store = mockStore({});

    return store.dispatch(fetchNoteList())
      .then(() => {
        const actions = store.getActions();
        expect(actions[0]).to.have.property('type', HOME_FETCH_NOTE_LIST_BEGIN);
        expect(actions[1]).to.have.property('type', HOME_FETCH_NOTE_LIST_SUCCESS);
      });
  });

  it('dispatches failure action when fetchNoteList fails', () => {
    const store = mockStore({});

    return store.dispatch(fetchNoteList({ error: true }))
      .catch(() => {
        const actions = store.getActions();
        expect(actions[0]).to.have.property('type', HOME_FETCH_NOTE_LIST_BEGIN);
        expect(actions[1]).to.have.property('type', HOME_FETCH_NOTE_LIST_FAILURE);
        expect(actions[1]).to.have.nested.property('data.error').that.exist;
      });
  });

  it('returns correct action by dismissFetchNoteListError', () => {
    const expectedAction = {
      type: HOME_FETCH_NOTE_LIST_DISMISS_ERROR,
    };
    expect(dismissFetchNoteListError()).to.deep.equal(expectedAction);
  });

  it('handles action type HOME_FETCH_NOTE_LIST_BEGIN correctly', () => {
    const prevState = { fetchNoteListPending: false };
    const state = reducer(
      prevState,
      { type: HOME_FETCH_NOTE_LIST_BEGIN }
    );
    expect(state).to.not.equal(prevState); // should be immutable
    expect(state.fetchNoteListPending).to.be.true;
  });

  it('handles action type HOME_FETCH_NOTE_LIST_SUCCESS correctly', () => {
    const prevState = { fetchNoteListPending: true };
    const state = reducer(
      prevState,
      { type: HOME_FETCH_NOTE_LIST_SUCCESS, data: {} }
    );
    expect(state).to.not.equal(prevState); // should be immutable
    expect(state.fetchNoteListPending).to.be.false;
  });

  it('handles action type HOME_FETCH_NOTE_LIST_FAILURE correctly', () => {
    const prevState = { fetchNoteListPending: true };
    const state = reducer(
      prevState,
      { type: HOME_FETCH_NOTE_LIST_FAILURE, data: { error: new Error('some error') } }
    );
    expect(state).to.not.equal(prevState); // should be immutable
    expect(state.fetchNoteListPending).to.be.false;
    expect(state.fetchNoteListError).to.exist;
  });

  it('handles action type HOME_FETCH_NOTE_LIST_DISMISS_ERROR correctly', () => {
    const prevState = { fetchNoteListError: new Error('some error') };
    const state = reducer(
      prevState,
      { type: HOME_FETCH_NOTE_LIST_DISMISS_ERROR }
    );
    expect(state).to.not.equal(prevState); // should be immutable
    expect(state.fetchNoteListError).to.be.null;
  });
});
