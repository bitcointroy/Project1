import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getNotes, deleteNote } from '../store/actions';

class NoteList extends Component {
	componentDidMount() {
    this.props.getNotes();
    console.log('PROPS:', this.props);
	}

	deleteANote = (e, index) => {
		this.props.deleteNote(index);
		this.props.getNotes();
	}

	// componentWillReceiveProps(nextState) {
	// 	this.props.getNotes();
	// 	console.log('Updated PROPS:', this.props);
	// }

	render() {
		return(
		<div>
			<h1>NoteList</h1>
			<ul>
				{this.props.notes.map((note) => {
        return <li className="notelist" key={note.id}>{note.note_title}  
        <button onClick={(e) => this.deleteANote(e, note.id)}>Delete</button></li>;
				})}
			</ul>
    </div>
  )};
}

const mapStateToProps = state => ({
		notes: state.notes
});

export default connect(mapStateToProps, { getNotes, deleteNote })(NoteList);
