import React from 'react'

function Counter() {
  const [count, setCount] = React.useState(0)
  return (
    <div>
      <button onClick={() => setCount((count) => count + 1)}>Increment</button>
      <div>Current count {count}</div>
      <button onClick={() => setCount((count) => count - 1)}>Decrement</button>
    </div>
  )
}

export default Counter
