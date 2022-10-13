import React,{useEffect} from 'react'
import img1 from '../images/row-1-column-1.png'
import img2 from '../images/row-1-column-2.png'
import img3 from '../images/row-1-column-3.png'
import img4 from '../images/row-1-column-4.png'
import img5 from '../images/row-2-column-1.png'
import img6 from '../images/row-2-column-2.png'
import img7 from '../images/row-2-column-3.png'
import img8 from '../images/row-2-column-4.png'
import img9 from '../images/row-3-column-1.png'
import img10 from '../images/row-3-column-2.png'
import img11 from '../images/row-3-column-3.png'
import img12 from '../images/row-3-column-4.png'
import img13 from '../images/row-4-column-1.png'
import img14 from '../images/row-4-column-2.png'
import img15 from '../images/row-4-column-3.png'
import img16 from '../images/row-4-column-4.png'
import pdf from '../images/Présentation 6 (1).pdf'
import {GrCheckboxSelected} from 'react-icons/gr'
import Aos from 'aos'
import 'aos/dist/aos.css'


 function About() {
  useEffect(()=>{
    Aos.init({duration:1000})
  },[])
  return (
    <div id='about' className='about'>
    <h3>About</h3>
    
      <div className='row' style={{overflow:'hidden'}}>
     
        <div  data-aos="fade-right" className='About-desc col-12 col-md-6 ' style={{marginBottom:'20px'}}>
        <h5>About me</h5>
        <p> I'm a front-end developer with experience in building
        and designing websites. Whether you’re trying to win time or get a perfect service, I can help
        <br/>
        <GrCheckboxSelected/>I’m experienced in HTML and CSS 3, javascript, jQuery, react and bootstrap. <br/>
        <GrCheckboxSelected/>Regular communication is really important to me, so let’s keep in touch!” <br/>
        <GrCheckboxSelected/>I’ll finish your project on time and in the perfect way</p>
         <button> <a href={pdf} download>Download CV</a></button>
        </div>
        <div data-aos="fade-left"  className='about-img col-12 col-md-5 col-lg-4' style={{marginBottom:'20px'}}>
        <div className='overlay'></div>
      
          <img data-aos="flip-right"  data-aos-delay="50" src={img1} alt='img-one'/>
          <img data-aos="flip-left"  data-aos-delay="50" src={img2} alt='img-one'/>
          <img data-aos="flip-right"  data-aos-delay="50" src={img3} alt='img-one'/>
          <img data-aos="flip-left"  data-aos-delay="50" src={img4} alt='img-one'/>
          <img data-aos="flip-right"  data-aos-delay="50" src={img5} alt='img-one'/>
          <img data-aos="flip-left" src={img6} alt='img-one'/>
          <img data-aos="flip-right" src={img7} alt='img-one'/>
          <img data-aos="flip-left" src={img8} alt='img-one'/>
          <img data-aos="flip-right" src={img9} alt='img-one'/>
          <img data-aos="flip-left" src={img10} alt='img-one' />
          <img data-aos="flip-right" src={img11} alt='img-one'/>
          <img data-aos="flip-left" src={img12} alt='img-one'/>
          <img data-aos="flip-right" src={img13} alt='img-one'/>
          <img data-aos="flip-left" src={img14} alt='img-one'/>
          <img data-aos="flip-right" src={img15} alt='img-one'/>
          <img data-aos="flip-left" src={img16} alt='img-one'/>
        </div>
      </div>
    </div>
  )
}
export default About
