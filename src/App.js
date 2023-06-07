import React, { useState } from 'react';
import Dialog from './components/Dialog';
import Characters from './components/Characters';
import './style/index.css';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const handleDialog = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <main>
        <Characters />
        <Dialog isOpen={isOpen} handleDialog={handleDialog} />
      </main>
    </>
  );
}

export default App;