import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getNotes, deleteNote } from '../store/actions';

class NoteList extends Component {
	componentDidMount() {
    this.props.getNotes();
    console.log('PROPS:', this.props);
	}
	render() {
		return(
		<div>
			<h1>NoteList</h1>
			<ul>
				{this.props.notes.map((note) => {
        return <li key={note.id}>{note.note_title}  
        <button onClick={() => this.props.deleteNote(note.id)}>Delete</button></li>;
				})}
			</ul>
    </div>
  )};
}

const mapStateToProps = state => ({
		notes: state.notes
});

export default connect(mapStateToProps, { getNotes, deleteNote })(NoteList);
