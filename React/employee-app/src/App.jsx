import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Header from './components/Header';
import EmployeeList from './components/EmployeeList';


function App() {
  
  return (
    <div className='app'>
      <Header />
      <main>
        <EmployeeList />
      </main>
    </div>)
  
}

export default App
