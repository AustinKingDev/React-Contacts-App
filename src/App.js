import { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ContactList from './components/ContactList';
import Create from './components/Create';




function App() {

  const [contacts, setContacts] = useState([]);
  console.log(contacts)

  return (
    <div className="App">
      <br/>
      <Create contacts={contacts} />
    </div>
  );
}

export default App;
