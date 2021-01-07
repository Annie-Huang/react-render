import React, { useState } from 'react';

const initState = ['Bruce', 'Wayne'];

const ArrayUseState = () => {
  const [persons, setPersons] = useState(initState);

  const handleClick = () => {
    const newPersons = [...persons];
    newPersons.push('Clark');
    newPersons.push('Kent');
    setPersons(newPersons);
  };

  console.log('ArrayUseState Render');

  return (
    <div>
      <button onClick={handleClick}>Click</button>
      {persons.map((person) => (
        <div key={person}>{person}</div>
      ))}
    </div>
  );
};

export default ArrayUseState;
