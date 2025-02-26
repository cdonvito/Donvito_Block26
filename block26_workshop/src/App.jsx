import { useState } from 'react';
import ContactList from './components/ContactList';
import ContactRow from './components/ContactRow.jsx';
import './App.css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <ContactList />
    </>
  )
}

export default App
