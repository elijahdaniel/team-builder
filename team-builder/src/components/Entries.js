import React from 'react';

const Entries = props => {
  return (
    <div>
      {props.People.map(e => {
        return (
          <div className='card' key={e.id}>
            <h3>{e.fullname}</h3>
            <p>
              <i className='fas fa-envelope' /> &nbsp;
              {e.email}
            </p>
            <p>
              <i className='fas fa-briefcase' /> &nbsp; {e.role}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default Entries;
