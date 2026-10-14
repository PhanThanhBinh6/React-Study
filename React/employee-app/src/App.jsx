import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Header from './components/Header';
import EmployeeList from './components/EmployeeList';


function App() {  
  const employees = [
    {
        id: 1,
        name: "Yamada",
        department: "IT",
        salary: 400000
    },
    {
        id: 2,
        name: "Tanaka",
        department: "HR",
        salary: 300000
    },
    {
        id: 3,
        name: "Oda",
        department: "IT", 
        salary: 500000,
    },
    {
        id: 4,
        name: "Saka",
        department: "PM", 
        salary: 700000,
    }
  ];
  return (
    <div className="app">
      <Header />
      <main>
        <EmployeeList employees={employees} />
      </main>
    </div>)
  
}

export default App
