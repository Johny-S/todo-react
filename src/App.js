import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Alert } from './components/Alert';
import { Navbar } from './components/Navbar'
import { About } from './pages/About';
import { Home } from './pages/Home';

function App() {
  return (
    <Router>
      <Navbar />
      <div className='container pt-4'>
        <Alert alert={{text: 'тестовый текст', type: 'success'}}/>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/about' component={About} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
