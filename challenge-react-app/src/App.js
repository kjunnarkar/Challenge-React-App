import React, { useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ActionContext from './contexts/ActionContext';
import ActionMap from './components/ActionMap';
import AddAction from './components/AddAction';
import EditAction from './components/EditAction';
import './App.css';

function App() {

  const [action, setAction] = useState([
    {
      project_id: '',
      description: '',
      notes: '',
      completed: ''
    }
  ]);


  return (
    <div className="App">
      <header className="App-header">
       <h1>Project Manager</h1>
      </header>
      <ActionContext.Provider value={{ action, setAction }}>
        <Router>
          <Route exact path='/' component={ActionMap} />
          <Route path='/add' component={AddAction} />
          <Route path='/:id' component={EditAction} />
        </Router>
      </ActionContext.Provider>
    </div>
  );
}

export default App;
