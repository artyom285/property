import './App.css';
import Home from './pages/home/Home';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import { useState } from 'react';

function App() {
  const [sidebar, setSidebar] = useState(false);

  const sidebarFunc = () => {
    setSidebar(!sidebar);
  }

  return (
    <div className="App">
      <Sidebar effect={sidebar} side={sidebarFunc}></Sidebar>
      <Home></Home>
      <Navbar side={sidebarFunc}></Navbar>
    </div>
  )
}

export default App
