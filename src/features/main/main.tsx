import React from 'react';

const Main = (props) => {
  const { history } = props;

  const handleClick = () => history.push("/users");
  
  return (
    <div>
      <button onClick={handleClick}>Users</button>
      <h1>Main</h1>
    </div>
  );
}

export default Main;
