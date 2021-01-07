import React, { useState } from 'react';

const ParentOne = ({ chilren }) => {
  const [count, setCount] = useState(0);

  console.log('ParentOne Render');
  return (
    <div>
      <button onClick={() => setCount((c) => c + 1)}>Count - {count}</button>
      {chilren}
    </div>
  );
};

export default ParentOne;
