import React, { useState } from 'react';
import "../styles.css"
function Example() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);

  return (
    <div className='out'>
      <p>You clicked {count} times</p>
      <button className="bu" onClick={() => setCount(count + 1)}>
        Click me
        
      </button>
    </div>
  );
}
export default Example;