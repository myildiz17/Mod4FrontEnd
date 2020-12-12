import React from 'react';
import { connect } from 'react-redux'
import { deleteNote } from '../actions/index.js'
import { Link } from 'react-router-dom'

class NoteView extends React.Component {

    constructor(){
        super()
        this.state = {
            note: null
        }
    }

  
//   handleDelete = () => {
//     this.props.deleteNote(this.props.note.id)

//     fetch(`http://localhost:3000/notes/${this.props.note.id}`, {method: 'DELETE'})
//     .then(res => res.json())
//     .then(notes => {
//       // this.props.deleteNote(this.props.note.id)
//   }) 
//    }
// rendernotes = () => {
//     return this.props.notes.map(note => {
//       return <Note
//         key={note.id}
//         note={note}
//       />
//     });
//   }

 componentDidMount(){
    let noteIdToShow = parseInt(this.props.match.params.id)
    const noteToShow =  this.props.notes.find(note => note.id === noteIdToShow)
    // debugger
    this.setState({
        note: noteToShow
    })
    
  }
  
  render() {
    const noteStyle = {border: '1px solid black', padding: '2%', margin: '15px 100px 15px 100px'}
    
// debugger

    return (
        <div>
        { this.state.note ? 
        (
            <div style={noteStyle}>
                {/* {this.props.match.params.id} */}
                {/* {this.props.notes} */}
                {/* {/* <h4>Item: {this.props.note.title}</h4> */}
                <h4>Content: {this.state.note.content} </h4>
                <h4>Title: {this.state.note.title} </h4>
                <h4>User Name: {this.state.note.user.name} </h4>
                <Link classname='item' to={`/notes/edit/${this.state.note.id}`} > 
                  <button class="btn btn-outline-danger" onClick={this.handleView}>Edit</button>
                </Link>
                {/* <h4>User: {this.props.note.user? this.props.note.user.name : null}</h4> */}
                {/* <button onClick={this.handleDelete}>delete</button>
                <button onClick={this.handleView}>View</button>
                <div className="ui items"></div> */}
            </div>
        )
         :
        null}
        </div>
        
    );
  }
}

const mapStateToProps = (state) => {
    return {
      notes: state.notes
    }
  }
  
export default connect(mapStateToProps, null)(NoteView)
