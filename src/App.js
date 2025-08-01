import React from 'react';
import Card from './components/Card'; // Importing the Card component

import Data from './data.json'; // Importing data from a JSON file

function App() {
  let items = [];
  for(let x=0; x<Data.length; x++){
    items.push(<Card titleText={Data[x].title} descText={Data[x].desc} />) // Creating Card components dynamically
  } // Getting the number of items in the data
  return <div>
    
  <h1 className="headingStyle">Todo App</h1>
  {items} {/* Rendering the Card components */}
  </div>
}

export default App;