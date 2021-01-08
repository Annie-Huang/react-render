import React from 'react';

const ChildFive = ({ name }) => {
  console.log('ChildFive Render');
  return <div>Hello {name}</div>;
};

const MemoizedChildFive = React.memo(ChildFive);

export default MemoizedChildFive;
