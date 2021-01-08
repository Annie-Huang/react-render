import React from 'react';

const ChildTwo = () => {
  console.log('ChildTwo Render');
  return <div>Child component</div>;
};

const MemoizedChildTwo = React.memo(ChildTwo);

export default MemoizedChildTwo;
