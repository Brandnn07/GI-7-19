import logo from './logo.svg';
import './App.css';
import BasicInfo from './components/veryeasy';
import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      people: [{
        name: "Brandon Carter",
        phone: "111-222-3344",
        birthdate: "July 9th, 2001"
      },
      {
        name: "John Doe",
        phone: "222-333-4444",
        birthdate: "Jan 1st, 2000"
      }, 
      {
        name: "Mary Sue",
        phone: "333-444-5566",
        birthdate: "Jan 2nd, 2000"
      }

      ]
    }
  }

  
  render() {

    const { people } = this.state

    const mappedPeople = people.map((person, index) => {
      console.log(person.name)
      return (
        <BasicInfo
          key={index}
          name={person.name}
          phone={person.phone}
          birthdate={person.birthdate}
        />
      );
    });

    return (
      <div className="App">
        <>{mappedPeople}</>
      </div>
    );
  }
}

export default App;
