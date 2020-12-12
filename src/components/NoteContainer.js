import React, { Component } from 'react';
import { connect } from 'react-redux'
import { fetchNotesSuccess } from '../actions/index.js'
import Note from './Note.js';


class NoteContainer extends React.Component {
  
rendernotes = () => {
  return this.props.notes.map(note => {
    return <Note
      key={note.id}
      note={note}
    />
  });
}

  render() {
    
    console.log(this.props)
    return (
        <div>
            <div>
                <h1 style={{marginLeft : 670 }}>Notes</h1>
                <div className="items">{this.rendernotes()}</div>
            </div>
        </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    notes: state.notes
  }
}

export default connect(mapStateToProps, null)(NoteContainer)