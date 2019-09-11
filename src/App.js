import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

//registering routes
import Home from './components/home';
import Personnel from './components/personnel';
import Task from './components/task';

class App extends Component {
  render() {
    return (
      <Router>
        <div className='container'>
          <h3>Welcome to React Js and Node Js Full stack</h3>
          <nav className='navbar navbar-expand-lg navbar-light bg-light'>
            <ul className='navbar-nav mr-auto'>
              <li>
                <Link to={'/'} className='nav-link'>
                  {' '}
                  Home{' '}
                </Link>
              </li>
              <li>
                <Link to={'/task'} className='nav-link'>
                  Tasks
                </Link>
              </li>
              <li>
                <Link to={'/personnel'} className='nav-link'>
                  Personnel
                </Link>
              </li>
            </ul>

            {/* Trial user account profile */}
            <ul className='nav navbar-nav navbar-right'>
              <li className='dropdown'>
                <a href='#' className='dropdown-toggle' data-toggle='dropdown'>
                  <span className='glyphicon glyphicon-user'></span> 
                  <FontAwesomeIcon icon={faUser} />
                  <strong>Mahesh</strong>
                  <span className='glyphicon glyphicon-chevron-down'></span>
                </a>
                <ul className='dropdown-menu'>
                  <li>
                    <div className='navbar-login'>
                      <div className='row'>
                        <div className='col-lg-4'>
                          <p className='text-center'>
                            <span className='glyphicon glyphicon-user icon-size'></span>
                          </p>
                        </div>
                        <div className='col-lg-8'>
                          <p className='text-left'>
                            <strong>Mahesh</strong>
                          </p>
                          <p className='text-left small'>justdemo@gmail.com</p>
                          <p className='text-left'>
                            <a
                              href='#'
                              className='btn btn-primary btn-block btn-sm'
                            >
                              Logout
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className='divider'></li>
                  <li>
                    <div className='navbar-login navbar-login-session'>
                      <div className='row'>
                        <div className='col-lg-12'>
                          <p>
                            <a href='#' className='btn btn-primary btn-block'>
                              My Profile
                            </a>
                            <a href='#' className='btn btn-danger btn-block'>
                              Change Password
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </li>
            </ul>
          </nav>
          <hr />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/task' component={Task} />
            <Route path='/personnel' component={Personnel} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
