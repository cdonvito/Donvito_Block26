import { useState } from "react";
import ContactList from "./components/ContactList";
import "./App.css";

function App() {
  const [selectedContactId, setSelectedContactId] = useState(null);

  return (
    <>{selectedContactId ? <div>selectedContactId</div> : <ContactList setSelectedContactId={setSelectedContactId}/>}</>
  );
}

export default App;
