import React,{useEffect} from 'react'
import img1 from '../images/Capture15.PNG'
import img3 from '../images/Capture.PNG'
import img4 from '../images/Capture16.PNG'
import img5 from '../images/Capture4.PNG'
import img6 from '../images/Capture5.PNG'
import img7 from '../images/Capture10.PNG'
import {GiAngryEyes} from 'react-icons/gi'
import {AiOutlineGithub} from 'react-icons/ai'
import Aos from 'aos'
import 'aos/dist/aos.css'


function Project() {
useEffect(()=>{
  Aos.init({duration:1000})
},[])
  return (
    <div className='projects' id='project' style={{width:'100%'}}>
    <h3>Projects</h3>
      <div className='project-box row' >
        <div className='project col-12 col-sm-6 col-md-4' data-aos="fade-up-right">
          <div>
         
          <img src={img1} alt='website project'/>
          <h5>Pop up</h5>
          <a className='eye' href='https://aminecoder30.github.io/pup-web/'> <p>Demo</p> <GiAngryEyes className="icon-eye"/></a>
          <a href='https://github.com/AmineCoder30/pup-web'> <p>Code</p> <AiOutlineGithub/>   </a>
          </div>
        </div>
        <div className='project col-12 col-sm-6 col-md-4' data-aos="fade-up-left">
        <div>
       
        <img src={img3} alt='website project'/>
        <h5>hallowen</h5>
        <a className='eye' href='https://aminecoder30.github.io/contries-app/'> <p>Demo</p> <GiAngryEyes className="icon-eye"/></a>
        <a href='https://github.com/AmineCoder30/contries-app'>  <p>Code</p> <AiOutlineGithub/>  </a>
        </div>
        
        </div>
        <div className='project col-12 col-sm-6 col-md-4' data-aos="fade-up-right">
          <div>
         
            <img src={img4} alt='website project'/>
            <h5>Mason</h5>
            <a className='eye' href='https://aminecoder30.github.io/'> <p>Demo</p> <GiAngryEyes className="icon-eye"/></a>
            <a href='https://github.com/AmineCoder30/web-mason'> <p>Code</p> <AiOutlineGithub/>   </a>
          </div>
      
        </div>
        <div className='project col-12 col-sm-6 col-md-4' data-aos="fade-up-left">
        <div>
        <img src={img5} alt='website project'/>
          <h5>Poomodoro timer</h5>
          <a className='eye' href='https://aminecoder30.github.io/pomodoro-timer/'> <p>Demo</p> <GiAngryEyes className="icon-eye"/></a>
          <a href='https://github.com/AmineCoder30/pomodoro-timer'> <p>Code</p> <AiOutlineGithub/>   </a>
        </div>
          
        </div>
        <div className='project col-12 col-sm-6 col-md-4' data-aos="fade-up-right">
        <div>
       
        <img src={img6} alt='website project'/>
        <h5>Preview</h5>
        <a className='eye' href='https://aminecoder30.github.io/Tasta_Tea/'> <p>Demo</p> <GiAngryEyes className="icon-eye"/></a>
        <a href='https://github.com/AmineCoder30/preview_templete'> <p>Code</p> <AiOutlineGithub/>   </a>
        </div>
         
        </div>
        <div className='project col-12 col-sm-6 col-md-4' data-aos="fade-up-left">
        <div>
       
        <img src={img7} alt='website project'/>
        <h5>Tasta Tea</h5>
        <a className='eye' href='https://aminecoder30.github.io/Tasta_Tea/'> <p>Demo</p> <GiAngryEyes className="icon-eye"/></a>
        <a href='https://github.com/AmineCoder30/Tasta_Tea'> <p>Code</p> <AiOutlineGithub/>  </a>
        </div>
        
        </div>
      </div>
    <div>
    </div>
   <button className='more' data-aos="fade-up-left"><a href='https://github.com/AmineCoder30' rel='noreferrer' target="_blank">More</a></button>
    </div>
  )
}

export default Project