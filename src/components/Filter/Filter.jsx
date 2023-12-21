import React from 'react';

const Filter = ({change}) => {
  return (
    <div>
      <h3>Find contacts bye name</h3>
      <input onChange={change} type="text" />
    </div>
  );
};

export default Filter;
