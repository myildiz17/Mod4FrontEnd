import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { updateNote } from '../actions/index.js'


class Edit extends React.Component {

  constructor(){
    super()
    this.state = {
      id: null,
      title:"",
      content:"",
      user_id: null
    }
  }

  

  componentDidMount(){
    let noteIdToEdit = parseInt(this.props.match.params.id)
    const noteToEdit =  this.props.notes.find(note => note.id === noteIdToEdit)
    // debugger
    this.setState({
        id: noteToEdit.id,
        title: noteToEdit.title,
        content: noteToEdit.content,
        user_id: noteToEdit.user_id,
        
    })
    
  }

  handleChange = (e) => {
    // e.preventDefault()
    // debugger
    this.setState({
      ...this.state,
    [e.target.name]: e.target.value
  })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    // debugger
    const reqObj = {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json'
        },
        body:  JSON.stringify(
          // this.state
         {
          title: this.state.title,
          content: this.state.content
         } 
        )
      }
  
  
      fetch(`http://localhost:3000/notes/${this.props.match.params.id}`, reqObj)
      .then(resp => resp.json())
      .then(updatedNote => {
          
        this.props.updateNote(updatedNote)
  
  
        // this.setState({
        //   title: '',
        //   content: '',
        //   // user_id: null,
        //   // id: null,
        // })

        this.props.history.push("/notes")
       
      })

  }

 render(){
    //  debugger
   return (
       <div>
           { this.state.id ?
            (
            <div style={{ width : 750, height : 950, marginLeft : 570, marginTop : 30 }}>
                
            <form class="input-group" onSubmit={this.handleSubmit}  >
                <label for="name">Title </label>
                <input class="form-control" type='text' name='title' onChange={this.handleChange} value={this.state.title} placeholder="" />
   
                <label for="name">Content </label>
                <input class="form-control" type='text' name='content' onChange={this.handleChange} value={this.state.content} placeholder=""/>
                <input className= "btn btn-sm btn-primary" type='submit' />
            </form>
            </div>
            )
            :
            null}  
       </div>
   )
 }
}

const mapStateToProps = (state) => {
    return {
      notes: state.notes
    }
  }

  const mapDispatchToProps = {
    updateNote: updateNote,
  }
  
export default connect(mapStateToProps, mapDispatchToProps)(Edit)
