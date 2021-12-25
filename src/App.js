import React, { useState } from 'react';
import Navigation from './components/Navigation'
import Field from './components/Field'
import Button from './components/Button'
import ManipulationPanel from './components/ManipulationPanel'
import { initFields } from './utils'

const initialValues = initFields(35)

function App() {
  const [fields, setFields] = useState(initialValues)

  return (
    <div className="App">
      <header className="header">
        <div className="title-container">
          <h1 className="title">Snake Game</h1>
        </div>
        <Navigation />
      </header>
      <main className="main">
        <Field fields={fields} />
      </main>
      <footer className="footer">
        <Button />
        <ManipulationPanel />
      </footer>
    </div>
  );
}

export default App;
