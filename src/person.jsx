import { useState } from "react";

export function Person() {
  const [person, setPerson] = useState({ firstName: "John", lastName: '', age: 100 });
    const [firstName, setFirstName] = useState('')
    const [lastname, setLastName] = useState('')
    
    const fullName = firstName + ' ' + lastname;

    function handleFirstNameChange(e) {
        setFirstName(e.target.value);
    }

    function handleLastNameChange(e) {
        setLastName(e.target.value);
    }


  const handleIncreaseAge = () => {
    setPerson((prevPerson) => ({ ...prevPerson, age: prevPerson.age + 1}));
    };

  return (
    <>
        <label>
            First name:{'  '}
            <input
                value = {firstname}
                onChange = {handleFirstNameChange}
            />
        </label>

        <label>
            Last name:{'  '}
            <input
                value = {lastName}
                onChange={handleLastNameChange}
            />
        </label>

        <h1>{fullName}</h1>
      <h1>{person.name}</h1>
      <h2>{person.age}</h2>
      <button onClick={handleIncreaseAge}>Increase age</button>
    </>
  );
}
