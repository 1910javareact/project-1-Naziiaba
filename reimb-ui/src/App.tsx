import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LoginComponent from './components/login-component/LoginContainer';
import  UsersDisplayComponent  from './components/users-display/UsersDisplayContainer';

const App: React.FC = () => {
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
      
            <Switch>
              <Route path='/login' component={LoginComponent} />
              <Route path='/users/display' component={UsersDisplayComponent} />
              <Route path='/'>
              </Route>
            </Switch>
        </Router>
      </Provider>
    </div>

  );
}

export default App;

