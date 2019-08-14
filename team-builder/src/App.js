import React, { useState } from 'react';
import TeamList from './components/TeamList';

import './App.css';

function App() {
  
  const [teammate, setTeammate] = useState('');
  
  return (
    <div className="App">
      <TeamList teammate={teammate} />
    </div>
  );
}

export default App;
