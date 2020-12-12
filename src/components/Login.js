import React from 'react'

class Login extends React.Component {
  constructor(){
    super()
    this.state = {
      username: ''
    }
  }

  handleChange = (e) => {
    this.setState({
      username: e.target.value
    })
  }

  handleLogin = (e) => {
    e.preventDefault()
    
    this.props.history.push(`/notes`)
    // debugger
    // fetch('https://localhost/users')
    // .then(resp => resp.json())
    // .then(data => {
    //   this.props.history.push(`/notes`)
    // })
  }

 render(){
   return (
     <div style={{ width : 150, height : 250, marginLeft : 570, marginTop : 30 }}>
    <form class="form-inline"  onSubmit={this.handleLogin}>
      Login Page
      <input class="form-control mr-2" type='text' placeholder= "Enter your username" value={this.state.username} onChange={this.handleChange}/>
      <input class="btn btn-outline-info" type='submit' />
    </form>
     </div>
  
   )
 }
}

export default Login