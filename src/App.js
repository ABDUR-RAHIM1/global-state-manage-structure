 // App.js
import React from 'react';   
import { MyState } from './State/State'; 
import Home from './components/Home/Home';
function App() {
  return (
   <MyState>
       <Home/> 
   </MyState>
  );
}

export default App;
