import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

import HomePage from './containers/HomePage'
import AboutPage from './containers/AboutPage'
import ContactPage from './containers/ContactPage'
import NotFoundPage from './containers/NotFoundPage'
import ItemDetailPage from './containers/ItemDetailPage'
import DashboardPage from './containers/DashboardPage'
import CounterPage from './containers/CounterPage'
import BookListPage from './containers/BookListPage'
import StatusPage from './containers/StatusPage'
import UsersPage from './containers/UsersPage'
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/dashboard" component={DashboardPage} />
          <Route path="/about" component={AboutPage} />
          <Route path="/contact" component={ContactPage} />
          <Route path="/counter" component={CounterPage} />
          <Route path="/booklist" component={BookListPage} />
          <Route path="/status" component={StatusPage} />
          <Route path="/users" component={UsersPage} />
          <Route path="/items/:id" component={ItemDetailPage} />
          <Route path="/notfoundpage" component={NotFoundPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
