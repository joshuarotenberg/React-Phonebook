import React, { useState, useEffect } from 'react'
import Person from './Person'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Maria Nelson', phone: '(665) 316-1640' },
    { name: 'Stephen Rogers', phone: '(212) 248-8814' },
    { name: 'Keith Howard', phone: '(761) 217-9035' },
    { name: 'Rose Walker', phone: '(716) 677-2767' },
    { name: 'Juan Gray', phone: '(920) 316-5621' },
    { name: 'Tina Jenkins', phone: '(294) 782-1435' },
    { name: 'Aaron Hughes', phone: '(398) 777-9039' },
    { name: 'Katherine Butler', phone: '(294) 691-0794' },
    { name: 'Willie Hall', phone: '(402) 256-4930' },
    { name: 'Anna Baker', phone: '(594) 760-4177' },
  ])


  const [ newName, setNewName ] = useState('');
  const [ newPhone, setNewPhone ] = useState('');
  const [ searchTerm, setSearchTerm ] = useState('');
  const [ searchResults, setSearchResults ] = useState([]);

  const handleSearchChange = e => {
    setSearchTerm(e.target.value);
  }
  
  useEffect(() => {
    const people = persons;
    const results = people.filter(person =>
      person.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(results);
  }, [persons, searchTerm]);

  const addPerson = e => {
    e.preventDefault();
    console.log('button clicked', e.target);

    const checkName = persons.some(person => person.name === newName);
    console.log(checkName) 
    if (!checkName) {
      const personObject = {
        name: newName,
        phone: newPhone
       }
       setPersons(persons.concat(personObject));
       setNewName('')
       setNewPhone('')
    } else {
      alert(`Sorry ${newName} is already in your phonebook!`)
      setNewName('')
      setNewPhone('')
    }
   
  }

  const handleNameChange = e => {
    console.log(e.target.value);
    setNewName(e.target.value);
  }

  const handlePhoneChange = e => {
    console.log(e.target.value);
    setNewPhone(e.target.value);
  }


  const searchBox = () => {
    return (

      <div className="input-group mb-3">
        <div className="input-group-prepend">
          <span className="input-group-text" id="inputGroup-sizing-default">Filter Contacts</span>
        </div>
        <input type="text" className="form-control" aria-label="Filter" aria-describedby="inputGroup-sizing-default"
        name="search"
        placeholder="Contact name"
        value={searchTerm}
        onChange={handleSearchChange}
        />
      </div>
    )
  }
  

  return (
    <div className="container">
      <h3>Add a new:</h3>
      <form onSubmit={addPerson}>
        <div className="input-group">
          <div className="input-group-prepend">
            <span className="input-group-text">Name and Phone</span>
          </div>
          <input type="text" aria-label="Full Name" className="form-control" placeholder="Full Name"  value={newName} onChange={handleNameChange}/>
          <input type="text" aria-label="Phone" className="form-control" placeholder="(555) 555-5555"  value={newPhone} onChange={handlePhoneChange} />
          <div className="input-group-append">
            <button className="btn btn-outline-secondary" type="submit">Add Contact</button>
          </div>
        </div>
      </form>
      <div className="row no-gutters mt-5 d-flex flex-row justify-content-between align-items-center">
        <h2>Contacts</h2>
        <div>{searchBox()}</div>
      </div>
      <div className="row mt-3">
        {searchResults.map((person, index) => <Person key={index} person={person} />)}
      </div>
    </div>
  )
}

export default App