import React, { useState } from 'react'
import { hot } from 'react-hot-loader'

const JustLazy = React.lazy(() => import('./JustLazy'))

const App = () => {
  const [state, setState] = useState(0)
  return (
    <div>
      <h1>Counter Example</h1>
      <button onClick={() => setState((state) => --state)}>-</button>
      <h2>{state}</h2>
      <button onClick={() => setState((state) => ++state)}>+</button>
      {state > 5 ? (
        <React.Suspense fallback={<h1>loading...</h1>}>
          <JustLazy />
        </React.Suspense>
      ) : null}
    </div>
  )
}

export default hot(module)(App)
