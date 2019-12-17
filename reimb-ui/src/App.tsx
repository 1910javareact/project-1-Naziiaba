import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LoginComponent from './components/login-component/LoginContainer';
import  UsersDisplayComponent  from './components/users-display/UsersDisplayContainer';
import { Provider } from 'react-redux';
import { store } from './Store';
import { Home } from './components/home/Home';
import UserNavBar from './components/navbar/UserNavBar';
// import { ReimbursementsDisplayComponent } from './components/reimbursements-display/ReimbursementsDisplayComponent';

const App: React.FC = () => {
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
           {/* here comes navbar */}
           <nav>
              <UserNavBar/>
            </nav>
            <Switch>
              <Route path='/login' component={LoginComponent} />
              <Route path='/users/display' component={UsersDisplayComponent} />
              {/* <Route path='/reimbursements' component={ReimbursementsDisplayComponent} /> */}
              <Route path='/'>
                <Home/>
              </Route>
            </Switch>
        </Router>
      </Provider>
    </div>

  );
}

export default App;

