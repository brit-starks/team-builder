import React, { useState } from 'react';

const Form = props => {
  const [teammate, setTeammate] = useState({ name:'', email:'', role:'' });

  return(
    <form>
      <input 
      type='text'
      name='name'
      placeholder='Name'
      />

      <input 
      type='email'
      name='email'
      placeholder='Email'
      />

      <input 
      type='text'
      name='role'
      placeholder='Role'
      />
    </form>
  );
}

export default Form;