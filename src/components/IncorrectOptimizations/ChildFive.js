import React from 'react';

// const ChildFive = ({ name, person }) => {
const ChildFive = ({ name }) => {
  console.log('ChildFive Render');
  return (
    <div>
      {/*Hello {name} {person.fname} {person.lname}*/}
      Hello {name}
    </div>
  );
};

const MemoizedChildFive = React.memo(ChildFive);

export default MemoizedChildFive;
