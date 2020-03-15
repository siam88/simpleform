import React from 'react';
import logo from './logo.svg';
import './App.css';
import Form1 from "./form/functionBaseForm";
import Form2 from "./form/classbaseForm"
function App() {

  return (
    <div className="App">
      <h1>function base</h1>
      <Form1 />
      <br /><br />
      <h1>class base</h1>
      <Form2 />

    </div >
  );
}

export default App;
