import React from 'react';

const Test = ({ name }) => {
  const clickHandler = () => {
    alert(name);
  }

  return (
    <div>
      <button onClick={clickHandler}>Click me!</button>
    </div>
  )
}

Test.propTypes = {
  name: React.PropTypes.string.isRequired,
}

export default Test;