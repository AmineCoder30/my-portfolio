
import React,{useState,useEffect} from 'react';
import './bootstrap.css'
import './App.css';
import Home from './component/Home';
import About from './component/About';
import Skills from './component/Skills'
import Project from './component/Project'
import Contact from './component/Contact'
import Loading from './component/Loading';
import NavBar from './component/NavBar';


function App() {
  const [isLoading,setisLoading]=useState(true)
  useEffect(()=>{
    setTimeout(()=>{ setisLoading(false)},7000)
  },[])
  return (
   
    
      isLoading ? <Loading/> : <div className="App container">
      <Home/>
      <About/>
      <Skills/>
      <Project/>
      <Contact/>
      <NavBar/>
      </div>
    
      
    
    
  );
}


export default App;
