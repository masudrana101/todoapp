import React from 'react';
import Card from './components/Card'; // Importing the Card component

import Data from './data.json'; // Importing data from a JSON file

function App() {
  console.log(Data); // Logging the imported data to the console
  return <div>
    
  <h1 className="headingStyle">Todo App</h1>
  <div className="cardContainer">
    <Card titleText={Data[0].title} descText={Data[0].desc}/>
    <Card titleText={Data[1].title} descText={Data[1].desc}/>
    <Card titleText={Data[2].title} descText={Data[2].desc}/>
    <Card titleText={Data[3].title} descText={Data[3].desc}/>
</div>
  </div>
}

export default App;