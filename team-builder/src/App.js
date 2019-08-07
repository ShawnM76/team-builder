import React, { useState } from 'react';
import Form from "./Components/Form.js";
import EachMember from "./Components/EachMember.js";
import './App.css';

function App() {
  const [ team, setTeam] = useState([{ Name: "Shawn", Email: "x@gmail.com", Role: "Web Development"}]);
  

  const bringTeamMember = (user) => {
    return setTeam([...team, user]);

  }

  


  return (
    <div className="App">
      <header className="App-header">
          <h1>Team Members!</h1>
      </header>
      <div>
         <Form bringTeamMember={bringTeamMember} />
         {team.map(person => <EachMember person={person} />)}
      </div>
    </div>
  );
}

export default App;
