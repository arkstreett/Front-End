import React from 'react';
import { connect } from 'react-redux';
import './App.css';
import { Route, Link, Switch } from 'react-router-dom'
import Header from './components/Header'
import NewSignUp from './components/NewSignUp'
import SignIn from './components/SignIn'
import Legal from './components/Legal'
import GlobalStlye from './styles/GlobalStyles'
import NewSignUp2 from './components/NewSignUp2'
import Header2 from './components/Header2'
import SearchConversations from './components/SearchConversations'



function App() {
  return (
    <div className="App">
       <Route exact path='/' component={NewSignUp} />
       <Route path='/welcome' component={SignIn} />
       <Route path='/emergency-contact' component={NewSignUp2} />
       <Route path='/legal' component={Legal} />
        
      
      <Route exact path='/welcome/conversations'>
        <Header2 />
      </Route>

      <Route path='/loggedin'>
        <Header2 />
      </Route>
      
    <Route exact path ='/loggedin/conversations'>
      <SearchConversations/>
    </Route>




      <GlobalStlye />

    </div>

  );
}





const mapStateToProps = (state) => {
  return {

  }
}

export default connect(mapStateToProps, {})(App);
