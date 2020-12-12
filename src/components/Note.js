import React from 'react';
import { connect } from 'react-redux'
import { deleteNote } from '../actions/index.js'
import { Link } from 'react-router-dom'


class Note extends React.Component {
  
  handleDelete = () => {
    this.props.deleteNote(this.props.note.id)
    
    fetch(`http://localhost:3000/notes/${this.props.note.id}`, {method: 'DELETE'})
    .then(res => res.json())
    .then(notes => {
      // this.props.deleteNote(this.props.note.id)
  }) 
  }

  handleView = () => {
    // console.log(this.context.history)



    // const reqObj = {
    //   method: 'PATCH',
    //   headers: {
    //     'Content-Type': 'application/json'
    //   },
    //   body:  JSON.stringify({
    //     picked: true
    //   })
    // }

    // fetch(`http://localhost:3000/notes/${this.props.note.id}`, reqObj)
    // .then(resp => resp.json())
    // .then(pickedNote => {
    //   // debugger
    //   this.props.pickedNote(pickedNote)
    // })

  }

  render() {
    const noteStyle = {border: '1px solid black', padding: '2%', margin: '15px 100px 15px 100px'}
    console.log(this.props)

    return (
        <div>
            <div style={noteStyle}>
                <h4>Item: {this.props.note.title}</h4>
                <h4 class="text-justify"> Content: {this.props.note.content}</h4>
                <h4>User: {this.props.note.user? this.props.note.user.name : null}</h4>
                <button class="btn btn-outline-success" onClick={this.handleDelete}>delete</button> 
                <Link classname='item' to={`/notes/${this.props.note.id}`} > 
                  <button class="btn btn-outline-danger" onClick={this.handleView}>View</button>
                </Link>
                {/* <Link>
                    to={{
                      pathname: `/notes/${this.props.note.id}`,
      
                    }}
                     <button class="btn btn-outline-danger" onClick={this.handleView}>View</button>
                </Link> */}
                <div className="item"></div>
            </div>
        </div>
    );
  }
}

const mapDispatchToProps = {
  deleteNote: deleteNote,
}
export default connect(null, mapDispatchToProps)(Note)
