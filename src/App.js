import './App.css';
import { Header } from './component/Header';
import HomePage from './component/HomePage';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ItemPage from './component/PostDetail';
import React from 'react';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <div  className='px-5 py-5 lg:px-10 lg:py-10 xl:px-32 xl:py-32' >
        <Route exact path="/" component={HomePage} />
        <Route path="/post/:id" component={ItemPage} />
        </div>
      </Switch>
    </Router>
  );
}

export default App;
