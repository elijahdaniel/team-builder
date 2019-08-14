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
          value={state.fullname}
          onChange={changeState}
          style={{
            border: '1px solid black',
            outline: '0',
            fontSize: '1rem',
            width: '400px',
            margin: '0 auto'
          }}
          required
        />

        <label htmlFor='email'>Email</label>
        <input
          type='text'
          name='email'
          value={state.email}
          onChange={changeState}
          style={{
            border: '1px solid black',
            outline: '0',
            fontSize: '1rem',
            width: '400px',
            margin: '0 auto'
          }}
          required
        />

        <label htmlFor='role'>Role</label>
        <input
          type='text'
          name='role'
          value={state.role}
          onChange={changeState}
          style={{
            border: '1px solid black',
            outline: '0',
            fontSize: '1rem',
            width: '400px',
            margin: '0 auto'
          }}
          required
        />

        <button type='submit'>Submit</button>
      </form>
    </div>
  );
};

export default Forms;
