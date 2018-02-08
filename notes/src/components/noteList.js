import React, { Component } from 'react';
// import { SSL_OP_PKCS1_CHECK_1 } from "constants";
import { connect } from 'react-redux';
import { getNotes } from '../store/actions';

class NoteList extends Component {
	componentDidMount() {
		this.props.getNotes();
	}
	render() {
		return
		<div>
			<h1>NoteList</h1>
			<ul>
				{this.props.notes.map((note) => {
					return <li>{note.text}</li>;
				})}
			</ul>
		</div>;
	}
}

const mapStateToProps = state => ({
	
		notes: state
});

export default connect(mapStateToProps, { getNotes })(NoteList);
