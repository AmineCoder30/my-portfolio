import React,{useState} from 'react'
import {AiOutlineHome} from 'react-icons/ai'
import {BsPersonCircle} from 'react-icons/bs'
import {BsPuzzle} from 'react-icons/bs'
import {CgWebsite} from 'react-icons/cg'
import {BiPhoneCall} from 'react-icons/bi'
function NavBar(){
    const [activeNav,setActiveNav] = useState('#home')
return(
    <div className='navbar'>
    <nav>
        <a href='#home' onClick={()=>{setActiveNav('#home')}} className={activeNav === '#home'?'active':''}><AiOutlineHome/></a>
        <a href='#about' onClick={()=>{setActiveNav('#about')}} className={activeNav === '#about'?'active':''}><BsPersonCircle/></a>
        <a href='#skills' onClick={()=>{setActiveNav('#skills')}} className={activeNav === '#skills'?'active':''}><BsPuzzle/></a>
        <a href='#project' onClick={()=>{setActiveNav('#project')}} className={activeNav === '#project'?'active':''}><CgWebsite/></a>
        <a href='#contact' onClick={()=>{setActiveNav('#contact')}} className={activeNav === '#contact'?'active':''}><BiPhoneCall/></a>
    </nav>
    
    </div>
)

}
export default NavBar