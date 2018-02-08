import React, { Component } from 'react';
// import { SSL_OP_PKCS1_CHECK_1 } from "constants";
import { connect } from 'react-redux';
import { getNotes } from '../store/actions';

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
				return <li key={note.note_id}>{note.note_title}</li>;
				})}
			</ul>
    </div>
  )};
}

const mapStateToProps = state => ({
	
		notes: state.notes
});

export default connect(mapStateToProps, { getNotes })(NoteList);
