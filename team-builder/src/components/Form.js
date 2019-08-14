import React, { useState } from 'react';
import '../App.css';

const Form = props => {
  console.log(props);
  const [teammate, setTeammate] = useState({ 
    name:'', 
    email:'', 
    role:'' });

  const changeHandle = e => {
    // console.log(e.target.value);
    setTeammate({...teammate, [e.target.name]: e.target.value})
  }

  const submit = e => {
    e.preventDefault();
    props.newMember();
    };


  return(
    <form onSubmit={submit} className='form'>
      <label hidden htmlFor='name'>Name</label>
      <input 
      type='text'
      name='name'
      placeholder='Name'
      onChange={changeHandle}
      value={teammate.name}
      />

      <label hidden htmlFor='email'>Email</label>
      <input 
      type='email'
      name='email'
      placeholder='Email'
      value={teammate.email}
      onChange={changeHandle}
      />

      <label hidden htmlFor='role'>Role</label>
      <input 
      type='text'
      name='role'
      placeholder='Role'
      value={teammate.role}
      onChange={changeHandle}
      />
      <button type='submit'>Add Member</button>
    </form>
  );
}

export default Form;