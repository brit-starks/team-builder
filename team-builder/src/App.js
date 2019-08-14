import React, { useState } from 'react';
import TeamList from './components/TeamList';
import Form from './components/Form';

import './App.css';

function App() {
  
  const [teammate, setTeammate] = useState('');
  
  const newMember = member => {
    setTeammate([...teammate, member]);
  }

  return (
    <div className="App">
      <TeamList teammate={teammate} />
      <Form newMember={newMember}/>
    </div>
  );
}

export default App;
