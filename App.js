import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import PhotoList from './components/PhotoList';
import PhotoDetail from './components/PhotoDetail';
import Categories from './components/Categories';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/" exact component={PhotoList} />
          <Route path="/category/:categoryName" component={Categories} />
          <Route path="/photo/:id" component={PhotoDetail} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
