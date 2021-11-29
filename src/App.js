
import './App.css';
// import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import React, { useState } from 'react';
import Alert from './Components/Alert';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";

function App() {
  const [Mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);  // to initialize alert message its default value is 'null'.
  
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  };

  const removeBodyClass = () => {
    document.body.classList.remove('bg-light');
    document.body.classList.remove('bg-warning');
    document.body.classList.remove('bg-success');
    document.body.classList.remove('bg-danger');
    document.body.classList.remove('bg-dark');
    document.body.classList.remove('bg-primary');
}
  const toggleMode = (cls) => {
    removeBodyClass();
    // console.log(cls);
    document.body.classList.add('bg-' + cls);
     if (Mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = '#020421';
      // document.getElementById('myBox').style.backgroundColor = '#151313';
       showAlert('Dark mode enabled', 'success');
       // when the dark mode activated add the value this in title:
       document.title = 'TextUtils-Dark mode';
       // after clicking toggle mode and other mode show this as blinking in title section:
      setInterval(() => {
        document.title='Install TextUtils'
      }, 2000);
      setInterval(() => {
        document.title='Hurry Up'
      }, 1500);
    }
    else {
      setMode('light')
      document.body.style.backgroundColor = 'white';
      // document.getElementById('myBox').style.backgroundColor = 'white';
      showAlert('Light mode enabled', 'success');
       document.title = 'TextUtils-Home';
       setInterval(() => {
        document.title='Install TextUtils'
      }, 2000);
    }
    
  }
 
  return (
    <>
     {/* <Navbar title='textUtils' aboutText='About'/> */}
      {/* <Navbar/> */}
  {/* <Router> */}
      <Navbar title='textUtils' mode={Mode} toggleMode={toggleMode} />
      <Alert alert={alert}/>
      <div className="container my-3">
        {/* <Switch>
          <Route exact path="/about">
             <About />
           </Route> */}
          {/* <Route exact path="/"> */}
          <TextForm heading='Enter text for below for Analyse' mode={Mode} showAlert={showAlert}/>
          {/* </Route>
        </Switch> */}
        </div>
    {/* </Router> */}
    
      
    </>
  );
}

export default App;

