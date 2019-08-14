import React, { useState } from 'react';

const Forms = props => {
  const [state, setstate] = useState({ fullname: '', email: '', role: '' });

  const changeState = e => {
    setstate({ ...state, [e.target.name]: e.target.value });
  };

  const submitForm = e => {
    e.preventDefault();
    const newState = {
      ...state,
      id: Date.now()
    };
    props.addNewState(newState);
  };

  return (
    <div>
      <form onSubmit={submitForm}>
        <label htmlFor='fullname'>Full Name</label>
        <input
          type='text'
          name='fullname'
          placeholder='Enter Your Full Name'
          value={state.fullname}
          onChange={changeState}
        />

        <label htmlFor='email'>Email</label>
        <input
          type='text'
          name='email'
          placeholder='Email'
          value={state.email}
          onChange={changeState}
        />

        <label htmlFor='role'>Full Name</label>
        <input
          type='text'
          name='role'
          placeholder='Role'
          value={state.role}
          onChange={changeState}
        />

        <button type='submit'>Submit</button>
      </form>
    </div>
  );
};

export default Forms;
