import React from 'react'
import {motion} from 'framer-motion'

 function Header() {
  return (
    <motion.div
    initial={{y:'-100%'}}
    animate={{y:0}}
    transition={{duration:1}}
     className='header'>
      <div className='logo'>
        <h4>Amine</h4>
      </div>
      <nav>
      <ul>
      <li><a href='#home'>Home</a></li>
      <li><a href='#about'>About</a></li>
      <li><a href='#skills'>Skills</a></li>
      <li><a href='#project'>project</a></li>
      <li><a href='#contact'>contact</a></li>
      </ul>
      </nav>
    </motion.div>
  )
}

export default Header