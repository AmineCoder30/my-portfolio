import React from 'react'
import {motion} from 'framer-motion'
import {useInView} from 'react-hook-inview'
import CountUp from 'react-countup'


function Skills() {
  const allSkills = [
    {
      name:'Html',
      perc:95
    },
    {
      name:'Css',
      perc:90
    },
    {
      name:'javascript',
      perc:80
    },
    {
      name:'Bootstrap',
      perc:70
    },
    {
      name:'Juery',
      perc:60
    },
    {
      name:'Sass',
      perc:85
    },
    {
      name:'react',
      perc:70
    }

  ]




 const [ref,isVisible] = useInView({
  threshold:0.3,
 });



  return (
  <div ref={ref} className='skills' id='skills'>
    <h3>skills</h3>
    <div className='skill-box row'>
    {
      allSkills.map(el => (
        <div className='skill col-12 col-md-6' key={el.name}>
       
        <div className='per-skill'>
         <h2>{el.name}</h2>
         <h2>{isVisible?<CountUp start={0} end={el.perc} duration={2}/>:0}%</h2>
        </div>
          <div className='bar-skill'>
            <motion.div animate={isVisible?{scaleX:1}:{scaleX:0.1}} transition={{duration:2}} style={{width:`${el.perc}%`}} ></motion.div>
          </div>
          
      </div>
      ))
    }
   
  
  </div>
 </div>
  )
}

export default Skills