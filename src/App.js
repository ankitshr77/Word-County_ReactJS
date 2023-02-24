import './App.css';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } 
        from "react-router-dom";
import About from './components/About';
import { useState } from 'react';
import Alert from './components/Alert';

function App() {

  const [dtext, setDtext] = useState("Enable Dark Mode");
  const [mode, setMode] = useState("light")
  const [alert, setAlert] = useState(null)

  const showAlert = (message,type) =>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }

  const toggleMode = ()=>{
    if(mode==='light'){
      setMode('dark');
      setDtext("Disable Dark Mode")
      document.body.style.backgroundColor = "black";
      document.body.style.color = "white";
      showAlert("Dark Mode has been enabled.", "success : ")
    }
    else{
      setMode('light');
      setDtext("Enable Dark Mode")
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      showAlert("Dark Mode has been disabled.", "success : ")
    }
    
  }



  return (
    <>
    <Router>
      
        <Navbar title="WORD COUNTY" dtext={dtext} toggleMode={toggleMode}/>
        <Alert alert={alert}/>
          
        <Routes>
          <Route exact path='/' element={<Hero herotitle="WELCOME TO WORD COUNTY APP" slogan="'Making counting easier than ever'"/>}/>
          <Route exact path='/aboutus' element={<About mode={mode}/>}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;
