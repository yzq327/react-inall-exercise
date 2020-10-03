import React, {Component} from 'react';
import {Route, BrowserRouter, Link, Switch} from "react-router-dom";
import Home from './Home';
import Calculator from './Calculator';
import Timer from './Timer';
import '../styles/app.less';

class App extends Component {
  render() {
    return (
      <div className="app">  
        <BrowserRouter>
          <div className="header">
            <div className='headerInfo'>
              <Link className="titleInfo" to='/timer'>在线倒数计时器</Link>
            </div>  
            <div className='headerInfo'>
              <Link className="titleInfo" to='/calculator'>在线计时器</Link>
            </div>
            <div className='headerInfo'>
              <Link className="titleInfo"  to='/'>HOME</Link>
            </div>  
          </div>
          <div className="body">
          </div>         
          <Switch>
            <Route exact path='/' component={Home}/>                 
            <Route path='/calculator' component={Calculator} />
            <Route path='/timer' component={Timer} />
            <Route component={Home} />
          </Switch>               
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
