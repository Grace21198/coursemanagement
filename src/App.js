import { useState } from "react";
import About from "./components/About";
import Test from "./components/Test";
import TestMemo from "./components/TestMemo";
import { userContext } from "./components/userContext";



const title = {

  
}

function App() {

const[title,setTitle] = useState({
  color: 'red',
  width:'200px',
  backgroundColor:'blue',

})
    
  
  const updatecss = ()=>{
    setTitle({
      color: 'red',
  width:'200px',
  backgroundColor:'white'
})};
 
  return (

    <userContext.Provider value="React JS">
      <><h1 onClick = {updatecss} style = {title}>FITA</h1></>
      <TestMemo/>

      <About/>
    </userContext.Provider>
    
  );
  }

export default App;
