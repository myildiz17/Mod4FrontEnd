import React from 'react'
import { addNote } from '../actions/index'
import { connect } from 'react-redux'

class Form extends React.Component {
  state = {
    title: '',
    content: '',
    user_id: 3
  }

  handleChange = (e) => {
    this.setState({
        ...this.state,
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()

    const reqObj = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body:  JSON.stringify({
        ...this.state
      })
    }


    fetch('http://localhost:3000/notes', reqObj)
    .then(resp => resp.json())
    .then(newNote => {
        
      this.props.addNote(newNote)


      this.setState({
        title: '',
        content: ''
        // user: ''
      })
      this.props.history.push("/notes")
    })
  }

 render(){
   const formStyle = { border: '4px solid black', padding: '4%', width: '400px'}
//    style={{ width : 150, height : 250, marginLeft : 570 }}
   return (
   <div style={{ width : 150, height : 250, marginLeft : 270, marginTop : 30 }} >
     <form onSubmit={this.handleSubmit}>
        <label for="name">Title</label>
       <input class="form-control" type='text' name='title' onChange={this.handleChange} value={this.state.title} />
       <label for="name">Content</label>
       <input class="form-control" type='text' name='content' onChange={this.handleChange} value={this.state.content} />
       {/* <input type='text' name='user' onChange={this.handleChange} value={this.state.user} /> */}
       
       <br/>

       <input className= "btn btn-sm btn-primary" type='submit' />
     </form>
   </div>
   )
 }
}

export default connect(null, { addNote })(Form)