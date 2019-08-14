import React from 'react';

const Entries = props => {
  return (
    <div>
      {props.People.map(e => {
        return (
          <div key={e.id}>
            <h3>{e.fullname}</h3>
            <p>{e.email}</p>
            <p>{e.role}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Entries;
