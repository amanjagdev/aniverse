import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

// import Components
import Home from './components/Home/Home'
import Search from './components/Search/Search'
import Character from './components/Character/Character'
import Anime from './components/Anime/Anime'

//Importing HOC
import Footer from './HOC/Footer/Footer'
import Header from './HOC/Header/Header'

const App = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/search" exact component={Search} />
        <Route path="/character" exact component={Character} />
        <Route path="/anime" exact component={Anime} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
