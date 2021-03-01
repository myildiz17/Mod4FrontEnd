import React from 'react';
import Navbar from './components/Navbar';
import NoteContainer from './components/NoteContainer';
import Login from './components/Login';
import { Route, Switch } from 'react-router-dom'
import { fetchNotesSuccess } from './actions/index.js'
import { connect } from 'react-redux'
import NoteView from './components/NoteView';
import Form from './components/Form';
import Edit from './components/Edit';

class App extends React.Component {

  componentDidMount(){
    fetch('http://localhost:3000/notes')
    .then(res => res.json())
    .then(notes => {
        this.props.fetchNotesSuccess(notes)  
        
  })
}

  render(){
    return (
      <div className="App">
        <Navbar icon="paint brush" title="Painterest" description="out app" />
        <Switch>
          {/* <Route exact component={Login} path='/notes' /> */}
          <Route exact component={NoteContainer} path='/notes' />
          {/* <Route component={NoteContainer} path='/notes/:id' /> */}
          <Route exact component={Login} path='/login'  />
          <Route exact component={Edit} path='/notes/edit/:id'  />
          <Route exact component={Form} path='/notes/new'  />
          <Route exact component={NoteView} path='/notes/:id'  />
          {/* <Route component={Component404} path='*' /> */}
        </Switch>
      </div>
    );
  }
  
};


const mapDispatchToProps = {
  fetchNotesSuccess: fetchNotesSuccess
}
// export default App;
export default connect(null, mapDispatchToProps)(App)