import React from 'react'
import Hello from './Hello'

const App = () => {
  return (
<<<<<<< Updated upstream
    <div>
      <Hello/>
      <h2>readme</h2>
      <h3>very improtant and complex thing have done ok</h3>
      <h5> made changes in hundreds of files</h5>
    </div>
=======
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
        hello
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
>>>>>>> Stashed changes
  )
}

export default App
