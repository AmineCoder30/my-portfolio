import React, { useRef,useEffect } from 'react';
import {BsFacebook,BsWhatsapp} from 'react-icons/bs'
import {SiGmail} from 'react-icons/si'
import emailjs from '@emailjs/browser';
import Aos from 'aos'
import 'aos/dist/aos.css'

function Contact() {
  useEffect(()=>{
    Aos.init({duration:1000})
  },[])
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('amine-moha_med', 'template_3sle9uj', form.current, 'N2p0RIF8WwzA_BzXk')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div className='contact' id='contact'>
      <h3>Contact</h3>
      <div className='row'>
        <form ref={form} onSubmit={sendEmail} className='col-12 col-sm-6' style={{marginBottom:'20px'}}>
          <input type='name' placeholder='name' name='from_name' data-aos="fade-up-right"></input>
          <input type='email' placeholder='email' name='to_name' data-aos="fade-up-right"></input>
          <textarea placeholder='message' name='message' data-aos="fade-up-right"></textarea>
          <button type='submit' data-aos="fade-up-right">send</button>
        </form>
        <div className='col-12 col-sm-6' style={{marginBottom:'20px'}} data-aos="fade-up-left" >
        <svg width="500"  viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="500" height="500" fill="#F5F5F5"/>
        <g id="Mention-amico 2">
        <g id="freepik--Floor--inject-7">
        <path id="freepik--SUELO--inject-7" d="M110 426C190.1 464.17 319.9 464.17 400 426C480.1 387.83 480 326 400 287.83C320 249.66 190.14 249.67 110.08 287.83C30.02 325.99 30 387.85 110 426Z" fill="#EBEBEB"/>
        </g>
        <g id="freepik--Cloud--inject-7">
        <path id="freepik--nube--inject-7" d="M368.08 142.3L371.76 139.47V131.37C371.76 124.96 376.87 117.51 382.43 114.3C387.99 111.09 392.5 113.69 392.5 120.11V121.28C393.669 119.382 395.265 117.783 397.16 116.61V116.61C401.16 114.3 404.41 116.17 404.41 120.79V121.33L411.77 117.08C414.4 115.56 416.54 116.79 416.54 119.83C416.45 121.485 415.971 123.095 415.142 124.53C414.313 125.965 413.158 127.185 411.77 128.09L368.08 153.31C365.45 154.83 363.31 153.6 363.31 150.56C363.4 148.905 363.879 147.295 364.708 145.86C365.537 144.425 366.692 143.205 368.08 142.3V142.3Z" fill="#EBEBEB"/>
        </g>
        <g id="freepik--Plants--inject-7">
        <g id="freepik--HOJAS--inject-7">
        <path id="Vector" d="M104.09 362.44C103.57 362.35 103.02 362.19 102.4 362.03C100.31 361.469 98.2511 360.802 96.23 360.03C92.199 358.567 88.3973 356.537 84.94 354C83.0439 352.652 81.4218 350.955 80.16 349C78.8989 347.021 78.4511 344.631 78.91 342.33C79.1641 341.194 79.7378 340.155 80.5635 339.334C81.3892 338.514 82.4325 337.947 83.57 337.7C84.64 337.53 85.75 337.7 86.82 337.51C87.3679 337.466 87.8874 337.248 88.3029 336.889C88.7184 336.529 89.0082 336.046 89.13 335.51C89.1343 334.897 88.9681 334.294 88.65 333.77C86.7071 330.211 85.0357 326.511 83.65 322.7C82.4901 319.3 82.4201 315.622 83.45 312.18C84.3245 308.755 86.1972 305.668 88.83 303.31C90.03 302.31 91.69 301.45 93.14 302.08C93.601 302.315 94.0059 302.646 94.327 303.052C94.648 303.457 94.8776 303.927 95 304.43C95.2238 305.435 95.3378 306.461 95.34 307.49C95.4828 309.705 95.9062 311.892 96.6 314C96.9105 315.317 97.6665 316.486 98.74 317.31C100.6 318.47 103.16 317.56 105.14 318.5C107.12 319.44 107.8 321.6 107.89 323.64C107.98 325.68 107.57 327.74 107.8 329.77C107.84 330.41 108.043 331.03 108.39 331.57C108.941 332.16 109.578 332.662 110.28 333.06C111.202 333.823 111.942 334.783 112.444 335.87C112.946 336.957 113.197 338.143 113.18 339.34C113.119 341.732 112.663 344.097 111.83 346.34C110.912 349.476 110.243 352.679 109.83 355.92C109.504 357.906 108.663 359.771 107.39 361.33C107.013 361.822 106.497 362.19 105.909 362.388C105.321 362.586 104.688 362.604 104.09 362.44V362.44Z" fill="#68C872"/>
        <path id="Vector_2" d="M107.41 360.78C107.351 360.779 107.293 360.763 107.243 360.733C107.192 360.704 107.149 360.661 107.12 360.61C95.45 340.93 91.76 327.07 90.71 318.9C89.56 310 91.18 305.83 91.25 305.66C91.2664 305.618 91.291 305.58 91.3222 305.547C91.3534 305.515 91.3908 305.488 91.4321 305.47C91.4734 305.452 91.5179 305.442 91.563 305.442C91.6081 305.441 91.653 305.449 91.695 305.465C91.737 305.481 91.7754 305.506 91.8079 305.537C91.8405 305.568 91.8666 305.606 91.8847 305.647C91.9028 305.688 91.9126 305.733 91.9135 305.778C91.9144 305.823 91.9064 305.868 91.89 305.91C91.89 305.98 90.27 310.17 91.4 318.91C92.4 327 96.14 340.74 107.71 360.27C107.733 360.309 107.749 360.352 107.755 360.396C107.762 360.441 107.76 360.486 107.749 360.53C107.737 360.574 107.718 360.615 107.69 360.651C107.663 360.687 107.629 360.717 107.59 360.74C107.534 360.767 107.472 360.781 107.41 360.78V360.78Z" fill="white"/>
        <path id="Vector_3" d="M101.17 349.37C86.95 347.81 82.93 343.14 82.76 342.94C82.6965 342.876 82.6608 342.79 82.6608 342.7C82.6608 342.61 82.6965 342.524 82.76 342.46C82.7908 342.427 82.828 342.401 82.8693 342.383C82.9106 342.366 82.9551 342.357 83 342.357C83.0449 342.357 83.0894 342.366 83.1307 342.383C83.172 342.401 83.2092 342.427 83.24 342.46V342.46C83.24 342.51 87.3 347.12 101.19 348.65C101.271 348.664 101.345 348.706 101.399 348.769C101.452 348.832 101.481 348.912 101.481 348.995C101.481 349.078 101.452 349.158 101.399 349.221C101.345 349.284 101.271 349.326 101.19 349.34L101.17 349.37Z" fill="white"/>
        <path id="Vector_4" d="M97.16 340.51C97.0843 340.51 97.0106 340.485 96.95 340.44C96.9143 340.413 96.8844 340.378 96.8621 340.339C96.8397 340.3 96.8253 340.257 96.8197 340.213C96.8142 340.168 96.8175 340.123 96.8296 340.079C96.8416 340.036 96.8622 339.995 96.89 339.96C101.4 334.03 101.69 324.31 101.7 324.21C101.7 324.165 101.709 324.12 101.727 324.079C101.745 324.038 101.771 324 101.804 323.969C101.836 323.938 101.875 323.914 101.918 323.899C101.96 323.884 102.005 323.877 102.05 323.88C102.095 323.88 102.14 323.889 102.181 323.907C102.222 323.925 102.26 323.951 102.291 323.984C102.322 324.016 102.346 324.055 102.361 324.098C102.376 324.14 102.383 324.185 102.38 324.23C102.38 324.64 102.08 334.23 97.44 340.37C97.4074 340.413 97.3651 340.449 97.3165 340.473C97.2679 340.497 97.2143 340.51 97.16 340.51Z" fill="white"/>
        <path id="Vector_5" d="M388.6 301.66C389.98 292.36 390 281.01 383.17 264.43C376.34 247.85 378.46 239.16 385.78 236.79C393.1 234.42 409.32 247.01 408.72 268.18C408.13 288.62 394.32 305.5 394.32 305.5L388.6 301.66Z" fill="#68C872"/>
        <path id="Vector_6" opacity="0.1" d="M388.6 301.66C389.98 292.36 390 281.01 383.17 264.43C376.34 247.85 378.46 239.16 385.78 236.79C393.1 234.42 409.32 247.01 408.72 268.18C408.13 288.62 394.32 305.5 394.32 305.5L388.6 301.66Z" fill="black"/>
        <path id="Vector_7" d="M392.17 304.4C392.127 304.409 392.083 304.409 392.04 304.4C391.997 304.384 391.959 304.359 391.926 304.327C391.894 304.295 391.868 304.257 391.852 304.214C391.835 304.172 391.827 304.127 391.828 304.081C391.83 304.036 391.84 303.991 391.86 303.95C391.93 303.78 399.41 286.31 398.86 270.45C398.24 252.2 388.13 242.16 388.03 242.06C387.998 242.028 387.972 241.991 387.954 241.949C387.937 241.908 387.928 241.864 387.927 241.819C387.927 241.773 387.935 241.729 387.952 241.687C387.969 241.645 387.993 241.607 388.025 241.575C388.056 241.543 388.094 241.517 388.135 241.499C388.177 241.482 388.221 241.472 388.266 241.472C388.312 241.472 388.356 241.48 388.398 241.497C388.44 241.514 388.478 241.538 388.51 241.57C388.61 241.67 398.91 251.88 399.51 270.43C400.06 286.43 392.51 304.05 392.45 304.22C392.422 304.271 392.382 304.314 392.333 304.345C392.284 304.377 392.228 304.396 392.17 304.4V304.4Z" fill="white"/>
        <path id="Vector_8" d="M389 309.91C389 309.91 392.86 287.43 406.56 274.51C420.26 261.59 443.1 259.13 450.26 266.03C457.42 272.93 452.83 279.64 442.74 281.97C431.34 284.6 424.35 289.2 431.34 292.72C437.83 295.98 437.1 303.05 430.34 306.44C419.54 311.86 400.04 306.7 395.34 317.36L389 309.91Z" fill="#68C872"/>
        <path id="Vector_9" d="M391.9 314.67H391.79C391.705 314.638 391.635 314.575 391.596 314.493C391.557 314.41 391.551 314.316 391.58 314.23C394.738 305.439 399.605 297.361 405.9 290.46C410.834 285.124 416.611 280.634 423 277.17C429.348 273.667 436.258 271.298 443.42 270.17C443.511 270.162 443.602 270.189 443.673 270.247C443.744 270.305 443.79 270.389 443.8 270.48C443.806 270.525 443.802 270.57 443.79 270.613C443.778 270.657 443.757 270.697 443.729 270.733C443.702 270.768 443.667 270.798 443.627 270.819C443.588 270.841 443.545 270.855 443.5 270.86C436.41 271.999 429.574 274.368 423.3 277.86C413.3 283.29 399.73 294.06 392.2 314.51C392.167 314.559 392.122 314.6 392.07 314.628C392.018 314.656 391.959 314.67 391.9 314.67V314.67Z" fill="white"/>
        <path id="Vector_10" d="M398.85 300.53C398.778 300.53 398.708 300.508 398.649 300.467C398.59 300.426 398.545 300.368 398.52 300.3C398.491 300.214 398.497 300.12 398.536 300.037C398.575 299.955 398.645 299.892 398.73 299.86C410.42 295.78 427.18 297.92 427.35 297.94C427.395 297.946 427.438 297.961 427.477 297.983C427.516 298.006 427.55 298.036 427.577 298.071C427.605 298.107 427.625 298.148 427.636 298.191C427.648 298.235 427.651 298.28 427.645 298.325C427.639 298.37 427.624 298.413 427.602 298.452C427.579 298.491 427.549 298.525 427.514 298.552C427.478 298.58 427.437 298.6 427.394 298.611C427.35 298.623 427.305 298.626 427.26 298.62C427.1 298.62 410.49 296.48 398.96 300.51C398.926 300.526 398.888 300.533 398.85 300.53V300.53Z" fill="white"/>
        </g>
        </g>
        <g id="freepik--social-media--inject-7">
        <g id="freepik--redes-sociales--inject-7">
        <path id="trans" d="M118.45 70C118.366 68.4556 117.92 66.9526 117.147 65.613C116.374 64.2734 115.295 63.135 114 62.29L110.37 60.19C108.991 59.4899 107.466 59.1251 105.92 59.1251C104.374 59.1251 102.849 59.4899 101.47 60.19L72.76 76.76C71.3927 77.6192 70.2754 78.8227 69.52 80.25C68.8696 81.384 68.461 82.6404 68.32 83.94C68.32 84.12 68.32 84.3 68.32 84.48V117.62C68.4047 119.165 68.8527 120.669 69.6277 122.009C70.4026 123.348 71.4826 124.486 72.78 125.33L76.4 127.43L76.86 127.67L77.03 127.74L77.34 127.87L77.58 127.96L77.84 128.05L78.13 128.13L78.35 128.19L78.69 128.27H78.86L79.27 128.34H79.35C81.4001 128.676 83.504 128.343 85.35 127.39L114 110.86C115.298 110.014 116.378 108.874 117.152 107.533C117.927 106.192 118.375 104.687 118.46 103.14L118.45 70Z" fill="#00317A"/>
        <path id="trans_2" opacity="0.4" d="M82.14 87.33C81.6258 88.1816 81.2416 89.105 81 90.07C81.597 87.5706 83.1332 85.397 85.29 84L114 67.43C116.46 66.01 118.46 67.16 118.46 70C118.375 68.4547 117.927 66.9511 117.152 65.6115C116.377 64.2718 115.297 63.1339 114 62.29L110.37 60.19C108.991 59.4899 107.466 59.1251 105.92 59.1251C104.374 59.1251 102.849 59.4899 101.47 60.19L72.76 76.76C71.3927 77.6192 70.2754 78.8227 69.52 80.25L69.61 80.09L82.14 87.33Z" fill="white"/>
        <path id="trans_3" opacity="0.1" d="M84.37 127.85L84.16 127.91L83.8 127.98H83.46H83.11C82.6965 127.95 82.3006 127.8 81.97 127.55V127.55L81.81 127.4L81.72 127.32L81.6 127.17L81.5 127.04L81.4 126.88L81.31 126.72C81.31 126.72 81.31 126.61 81.24 126.55C81.2091 126.489 81.1824 126.425 81.16 126.36L81 126.2V126C81 125.94 81 125.88 81 125.82C80.9945 125.723 80.9945 125.627 81 125.53C80.9945 125.477 80.9945 125.423 81 125.37C81 125.22 81 125.06 81 124.89V91.72C81.0006 91.3615 81.0307 91.0036 81.09 90.65V90.65C81.09 90.52 81.09 90.38 81.17 90.25V90.09C81.3991 89.1273 81.7698 88.2039 82.27 87.35L69.61 80.09L69.52 80.25C68.8696 81.384 68.461 82.6404 68.32 83.94C68.32 84.12 68.32 84.3 68.32 84.48V117.62C68.4047 119.165 68.8527 120.669 69.6277 122.009C70.4026 123.348 71.4826 124.486 72.78 125.33L76.4 127.43L76.86 127.67L77.03 127.74L77.34 127.87L77.58 127.96L77.84 128.05L78.13 128.13L78.35 128.19L78.69 128.27H78.86L79.27 128.34H79.35C81.038 128.596 82.7634 128.428 84.37 127.85V127.85Z" fill="black"/>
        <path id="trans_4" d="M105.91 100.39C107.828 96.1064 108.809 91.4631 108.79 86.77C109.727 85.3166 110.514 83.772 111.14 82.16C110.333 83.1066 109.424 83.9617 108.43 84.71C109.439 83.3002 110.143 81.6964 110.5 80C109.635 81.2032 108.627 82.2978 107.5 83.26C107.001 82.8891 106.396 82.6887 105.775 82.6887C105.154 82.6887 104.549 82.8891 104.05 83.26C101.05 85.02 98.77 90.1 99.46 93.64C95.54 95.64 92.06 95.14 89.74 92.64C88.5 96.18 89.1 99.54 91.2 100.19C90.5574 100.576 89.8036 100.734 89.06 100.64C89.06 103.64 90.57 105.41 92.84 104.7C92.2383 105.299 91.5107 105.757 90.71 106.04C91.31 108.19 93.05 109.04 95.12 107.87C93.5086 110.735 91.0685 113.046 88.12 114.5C90.2 115.08 92.68 114.69 95.35 113.15C100.01 110.46 103.59 105.59 105.88 100.32" fill="white"/>
        <path id="trans_5" d="M118.45 190.67C118.36 189.132 117.911 187.637 117.138 186.305C116.365 184.973 115.29 183.841 114 183L110.37 180.9C108.991 180.2 107.466 179.835 105.92 179.835C104.374 179.835 102.849 180.2 101.47 180.9L72.77 197.47C71.4027 198.329 70.2854 199.533 69.53 200.96C68.8796 202.094 68.471 203.35 68.33 204.65C68.33 204.83 68.33 205.01 68.33 205.19V238.33C68.4175 239.866 68.8639 241.36 69.6332 242.692C70.4025 244.024 71.4735 245.157 72.76 246L76.38 248.1L76.84 248.33L77.01 248.41L77.32 248.54L77.56 248.63L77.82 248.72L78.11 248.8L78.33 248.86L78.67 248.94H78.84L79.25 249.01H79.33C81.3855 249.331 83.4896 248.98 85.33 248.01L114 231.53C115.298 230.684 116.378 229.544 117.152 228.203C117.927 226.862 118.375 225.357 118.46 223.81L118.45 190.67Z" fill="#00317A"/>
        <path id="trans_6" opacity="0.4" d="M82.14 208C81.6398 208.854 81.2691 209.777 81.04 210.74C81.6271 208.247 83.1483 206.074 85.29 204.67L114 188.1C116.46 186.68 118.46 187.83 118.46 190.67C118.369 189.132 117.918 187.636 117.144 186.304C116.369 184.972 115.292 183.84 114 183L110.37 180.9C108.991 180.2 107.466 179.835 105.92 179.835C104.374 179.835 102.849 180.2 101.47 180.9L72.77 197.47C71.4027 198.329 70.2854 199.533 69.53 200.96L69.62 200.8L82.14 208Z" fill="white"/>
        <path id="trans_7" opacity="0.1" d="M84.37 248.52L84.16 248.58C84.0423 248.616 83.9219 248.643 83.8 248.66V248.66H83.46H83.11C82.6965 248.63 82.3006 248.48 81.97 248.23V248.23L81.81 248.08L81.72 248L81.6 247.84L81.5 247.72L81.4 247.56L81.31 247.4C81.31 247.34 81.31 247.29 81.24 247.23C81.2073 247.166 81.1806 247.099 81.16 247.03L81.1 246.86L81.04 246.62C81.04 246.62 81.04 246.51 81.04 246.45C81.0345 246.353 81.0345 246.257 81.04 246.16C81.0345 246.107 81.0345 246.053 81.04 246C81.04 245.85 81.04 245.68 81.04 245.51V212.39C81.0406 212.031 81.0707 211.674 81.13 211.32V211.32C81.13 211.18 81.13 211.05 81.21 210.92V210.76C81.4391 209.797 81.8098 208.874 82.31 208.02L69.78 200.78L69.69 200.94C69.0396 202.074 68.631 203.33 68.49 204.63C68.49 204.81 68.49 204.99 68.49 205.17V238.31C68.5564 239.835 68.9768 241.324 69.7179 242.659C70.459 243.993 71.5005 245.137 72.76 246L76.38 248.1L76.84 248.33L77.01 248.41L77.32 248.54L77.56 248.63L77.82 248.72L78.11 248.8L78.33 248.86L78.67 248.94H78.84L79.25 249.01H79.33C81.0246 249.27 82.7572 249.101 84.37 248.52V248.52Z" fill="black"/>
        <path id="trans_8" d="M99.64 206C102.58 204.3 102.93 204.12 104.09 203.52C104.701 203.153 105.383 202.922 106.09 202.84C106.542 202.794 106.994 202.927 107.35 203.21C107.75 203.513 108.041 203.938 108.18 204.42C108.438 205.232 108.566 206.079 108.56 206.93C108.61 208.44 108.62 208.93 108.62 212.82C108.62 216.71 108.62 217.2 108.56 218.82C108.542 219.811 108.415 220.797 108.18 221.76C107.999 222.513 107.72 223.239 107.35 223.92C107.018 224.586 106.594 225.202 106.09 225.75C105.502 226.398 104.829 226.963 104.09 227.43C102.93 228.17 102.58 228.43 99.64 230.08C96.7 231.73 96.36 231.97 95.2 232.57C94.5886 232.933 93.9067 233.161 93.2 233.24C92.7447 233.287 92.2891 233.154 91.93 232.87C91.536 232.563 91.249 232.14 91.11 231.66C90.8529 230.852 90.7247 230.008 90.73 229.16C90.73 227.64 90.66 227.16 90.66 223.27C90.66 219.38 90.66 218.88 90.73 217.27C90.7448 216.259 90.8723 215.253 91.11 214.27C91.2937 213.519 91.5691 212.794 91.93 212.11C92.2701 211.446 92.6972 210.831 93.2 210.28C93.7857 209.63 94.4588 209.065 95.2 208.6C96.36 207.86 96.71 207.6 99.64 205.95M99.64 203.31C96.64 205.03 96.28 205.31 95.11 206.01C94.1221 206.628 93.2238 207.378 92.44 208.24C91.6456 209.079 90.9724 210.025 90.44 211.05C89.8824 212.104 89.4559 213.222 89.17 214.38C88.8588 215.644 88.6878 216.939 88.66 218.24C88.66 219.83 88.59 220.34 88.59 224.32C88.59 228.3 88.59 228.8 88.66 230.32C88.6602 231.43 88.8322 232.533 89.17 233.59C89.3916 234.326 89.8351 234.976 90.44 235.45C91.0073 235.893 91.7246 236.097 92.44 236.02C93.3811 235.927 94.2914 235.634 95.11 235.16C96.28 234.55 96.65 234.35 99.64 232.63C102.63 230.91 103 230.63 104.18 229.92C106.146 228.704 107.743 226.975 108.8 224.92C109.356 223.866 109.779 222.748 110.06 221.59C110.375 220.33 110.55 219.039 110.58 217.74C110.58 216.14 110.64 215.63 110.64 211.65C110.64 207.67 110.64 207.18 110.58 205.65C110.579 204.543 110.403 203.443 110.06 202.39C109.84 201.653 109.4 201.001 108.8 200.52C108.232 200.079 107.514 199.878 106.8 199.96C105.858 200.048 104.947 200.342 104.13 200.82C102.95 201.42 102.58 201.62 99.59 203.35M99.59 210.48C96.47 212.28 93.94 217.11 93.94 221.27C93.94 225.43 96.47 227.34 99.59 225.54C102.71 223.74 105.24 218.91 105.24 214.75C105.24 210.59 102.71 208.68 99.59 210.48ZM99.59 222.9C97.59 224.07 95.93 222.83 95.93 220.13C95.93 217.43 97.57 214.29 99.59 213.13C101.61 211.97 103.26 213.2 103.26 215.91C103.26 218.62 101.62 221.74 99.59 222.91M106.78 206.04C106.78 205.04 106.19 204.62 105.46 205.04C105.057 205.329 104.727 205.708 104.498 206.148C104.269 206.587 104.146 207.074 104.14 207.57C104.14 208.57 104.73 208.98 105.46 208.57C105.862 208.282 106.19 207.905 106.42 207.467C106.649 207.029 106.772 206.544 106.78 206.05" fill="white"/>
        <path id="trans_9" d="M168.41 113.51C168.332 111.969 167.892 110.468 167.125 109.129C166.359 107.789 165.289 106.649 164 105.8L160.37 103.7C158.989 103 157.463 102.635 155.915 102.635C154.367 102.635 152.841 103 151.46 103.7L122.76 120.27C121.546 121.075 120.522 122.134 119.757 123.374C118.992 124.613 118.505 126.004 118.33 127.45C118.33 127.63 118.33 127.81 118.33 127.99V161.13C118.413 162.675 118.859 164.178 119.632 165.518C120.405 166.857 121.484 167.996 122.78 168.84L126.41 170.94L126.87 171.18L127.04 171.25L127.35 171.38L127.58 171.47L127.85 171.56L128.13 171.64L128.36 171.7L128.7 171.78H128.87L129.28 171.85H129.36C131.41 172.185 133.514 171.852 135.36 170.9L164 154.37C165.296 153.523 166.375 152.383 167.148 151.042C167.921 149.701 168.367 148.196 168.45 146.65L168.41 113.51Z" fill="#00317A"/>
        <path id="trans_10" opacity="0.4" d="M132.11 130.84C131.611 131.696 131.237 132.618 131 133.58C131.59 131.085 133.115 128.913 135.26 127.51L164 110.94C166.46 109.52 168.45 110.67 168.45 113.51C168.367 111.965 167.921 110.462 167.148 109.122C166.375 107.783 165.296 106.644 164 105.8L160.37 103.7C158.989 103 157.463 102.635 155.915 102.635C154.367 102.635 152.841 103 151.46 103.7L122.76 120.27C121.398 121.132 120.285 122.335 119.53 123.76L119.61 123.6L132.11 130.84Z" fill="white"/>
        <path id="trans_11" opacity="0.1" d="M134.34 171.36L134.12 171.42C134.006 171.456 133.889 171.483 133.77 171.5V171.5H133.44H133C132.59 171.468 132.197 171.319 131.87 171.07V171.07L131.71 170.92L131.62 170.84L131.49 170.68L131.4 170.56C131.361 170.51 131.327 170.457 131.3 170.4L131.21 170.24C131.21 170.19 131.21 170.13 131.13 170.07L131.06 169.88L131 169.7C131 169.627 130.98 169.547 130.94 169.46C130.934 169.403 130.934 169.347 130.94 169.29C130.934 169.193 130.934 169.097 130.94 169C130.935 168.947 130.935 168.893 130.94 168.84C130.93 168.68 130.93 168.52 130.94 168.36V135.23C130.946 134.872 130.976 134.514 131.03 134.16V134.16C131.03 134.02 131.03 133.89 131.1 133.76C131.104 133.707 131.104 133.653 131.1 133.6C131.337 132.638 131.711 131.716 132.21 130.86L119.67 123.62L119.59 123.78C118.935 124.912 118.526 126.169 118.39 127.47C118.39 127.65 118.39 127.83 118.39 128.01V161.15C118.473 162.695 118.919 164.198 119.692 165.538C120.465 166.877 121.544 168.016 122.84 168.86L126.47 170.96L126.93 171.2L127.1 171.27L127.41 171.4L127.64 171.49L127.91 171.58L128.19 171.66L128.42 171.72L128.76 171.8H128.93L129.34 171.87H129.42C131.077 172.103 132.766 171.928 134.34 171.36Z" fill="black"/>
        <path id="trans_12" d="M146.51 159.32L151.3 156.55V140.55L154.64 138.62L154.99 133.06L151.3 135.19V132.14C151.3 130.88 151.49 130.27 152.4 129.75L154.99 128.25V122.69L151.68 124.61C150.042 125.473 148.686 126.787 147.77 128.395C146.854 130.004 146.417 131.841 146.51 133.69V138L144 139.41V144.83L146.49 143.4L146.51 159.32Z" fill="white"/>
        </g>
        </g>
        <g id="freepik--Device--inject-7">
        <g id="freepik--M&#195;&#147;VIL--inject-7">
        <path id="freepik--sombra-movil--inject-7" d="M103.56 368L218.29 434.22C219.638 434.905 221.128 435.262 222.64 435.262C224.152 435.262 225.642 434.905 226.99 434.22L405.91 330.93C408.31 329.54 408.31 327.3 405.91 325.93L291.18 259.67C289.834 258.985 288.345 258.628 286.835 258.628C285.325 258.628 283.836 258.985 282.49 259.67L103.56 363C101.16 364.36 101.16 366.6 103.56 368Z" fill="#E0E0E0"/>
        <path id="Vector_11" d="M107.17 352L218.65 416.37C220.012 417.061 221.518 417.42 223.045 417.42C224.572 417.42 226.078 417.061 227.44 416.37L404.19 314.34C406.62 312.94 406.62 310.67 404.19 309.27L292.7 244.9C291.338 244.209 289.832 243.85 288.305 243.85C286.778 243.85 285.272 244.209 283.91 244.9L107.17 347C104.74 348.35 104.74 350.62 107.17 352Z" fill="#37474F"/>
        <path id="Vector_12" d="M218.65 416.39L107.17 352C105 350.75 104.77 348.8 106.48 347.4C105.393 348.261 104.501 349.343 103.862 350.573C103.222 351.804 102.85 353.156 102.77 354.54V358.67C102.853 360.196 103.295 361.682 104.059 363.006C104.824 364.33 105.89 365.455 107.17 366.29L218.65 430.65C220.003 431.369 221.518 431.73 223.05 431.7V417.44C221.518 417.47 220.003 417.109 218.65 416.39V416.39Z" fill="#455A64"/>
        <path id="Vector_13" d="M404.19 328.62C405.469 327.786 406.533 326.663 407.296 325.34C408.059 324.018 408.499 322.534 408.58 321.01V316.88C408.5 315.496 408.128 314.144 407.489 312.913C406.85 311.682 405.957 310.601 404.87 309.74C406.58 311.14 406.36 313.09 404.19 314.34L227.44 416.39C226.09 417.107 224.579 417.469 223.05 417.44V431.72C224.579 431.749 226.09 431.387 227.44 430.67L404.19 328.62Z" fill="#263238"/>
        <path id="Vector_14" d="M167 381.73C168.891 382.692 170.983 383.193 173.105 383.193C175.227 383.193 177.319 382.692 179.21 381.73C182.58 379.73 182.58 376.63 179.21 374.68C177.317 373.724 175.226 373.226 173.105 373.226C170.984 373.226 168.893 373.724 167 374.68C163.67 376.63 163.67 379.79 167 381.73Z" fill="#263238"/>
        <path id="Vector_15" d="M236 402.73L129.29 341.08C127.84 340.24 127.84 338.87 129.29 338.03L268.29 257.75C269.107 257.336 270.009 257.121 270.925 257.121C271.841 257.121 272.743 257.336 273.56 257.75L380.27 319.4C381.73 320.24 381.73 321.6 380.27 322.4L241.27 402.69C240.456 403.11 239.555 403.333 238.64 403.339C237.724 403.346 236.82 403.138 236 402.73V402.73Z" fill="white"/>
        <path id="Vector_16" d="M340.38 281.61C340.859 281.852 341.388 281.978 341.925 281.978C342.462 281.978 342.991 281.852 343.47 281.61C343.636 281.527 343.776 281.399 343.874 281.241C343.972 281.083 344.024 280.901 344.024 280.715C344.024 280.529 343.972 280.347 343.874 280.189C343.776 280.031 343.636 279.903 343.47 279.82C342.991 279.578 342.462 279.452 341.925 279.452C341.388 279.452 340.859 279.578 340.38 279.82C339.52 280.31 339.52 281.11 340.38 281.61Z" fill="#263238"/>
        <path id="Vector_17" d="M345.32 295.63C346.278 296.113 347.337 296.365 348.41 296.365C349.483 296.365 350.542 296.113 351.5 295.63C353.21 294.63 353.21 293.04 351.5 292.06C350.543 291.572 349.484 291.317 348.41 291.317C347.336 291.317 346.277 291.572 345.32 292.06C343.61 293 343.61 294.64 345.32 295.63Z" fill="#263238"/>
        <path id="Vector_18" d="M341 289.41C342.14 288.76 342.08 287.66 340.86 286.96L320.52 275.21C319.866 274.863 319.14 274.675 318.4 274.661C317.659 274.647 316.926 274.808 316.26 275.13C315.12 275.79 315.18 276.89 316.4 277.59L336.74 289.34C337.395 289.686 338.121 289.872 338.862 289.884C339.602 289.896 340.334 289.734 341 289.41Z" fill="#263238"/>
        <path id="Vector_19" d="M266.49 274.33C265.03 275.17 265.03 276.53 266.49 277.33L347.79 324.28C348.608 324.694 349.513 324.91 350.43 324.91C351.347 324.91 352.252 324.694 353.07 324.28L371.07 313.91L284.49 263.91L266.49 274.33Z" fill="#EBEBEB"/>
        <path id="Vector_20" d="M267.09 282.48L260.6 278.74C260.329 278.602 260.029 278.53 259.725 278.53C259.421 278.53 259.121 278.602 258.85 278.74L254.76 281.1C254.27 281.38 254.27 281.83 254.76 282.1L255.32 282.43L253.25 283.53C253.01 283.66 253.03 283.74 253.31 283.72L256.95 283.37L261.25 285.85C261.524 285.984 261.825 286.054 262.13 286.054C262.435 286.054 262.736 285.984 263.01 285.85L267.09 283.49C267.193 283.451 267.281 283.382 267.343 283.292C267.405 283.202 267.439 283.095 267.439 282.985C267.439 282.875 267.405 282.768 267.343 282.678C267.281 282.588 267.193 282.519 267.09 282.48Z" fill="#EBEBEB"/>
        <path id="Vector_21" d="M269 292.24L268.52 291.24C267.9 289.93 267.52 288.15 269.32 287.12C270.002 286.775 270.756 286.595 271.52 286.595C272.284 286.595 273.038 286.775 273.72 287.12C274.66 287.66 274.87 288.47 274.35 289.12C275.517 288.8 276.762 288.929 277.84 289.48C278.107 289.567 278.34 289.736 278.505 289.963C278.67 290.19 278.759 290.464 278.759 290.745C278.759 291.026 278.67 291.3 278.505 291.527C278.34 291.754 278.107 291.923 277.84 292.01C276.08 293.01 273 292.83 270.73 292.48L269 292.24Z" fill="#EBEBEB"/>
        <path id="Vector_22" d="M179.9 327.36L261.21 374.31C262.028 374.724 262.933 374.94 263.85 374.94C264.767 374.94 265.672 374.724 266.49 374.31L329.81 337.74C331.26 336.9 331.26 335.54 329.81 334.74L248.5 287.75C247.682 287.336 246.777 287.12 245.86 287.12C244.943 287.12 244.038 287.336 243.22 287.75L179.9 324.32C178.44 325.16 178.44 326.52 179.9 327.36Z" fill="#EBEBEB"/>
        <path id="Vector_23" d="M180.52 332.47L174 328.72C173.726 328.586 173.425 328.516 173.12 328.516C172.815 328.516 172.514 328.586 172.24 328.72L168.15 331.08C168.051 331.121 167.966 331.19 167.906 331.279C167.846 331.368 167.814 331.473 167.814 331.58C167.814 331.687 167.846 331.792 167.906 331.881C167.966 331.97 168.051 332.039 168.15 332.08L168.72 332.41L166.65 333.5C166.4 333.63 166.43 333.72 166.65 333.69L170.29 333.35L174.59 335.83C174.864 335.964 175.165 336.034 175.47 336.034C175.775 336.034 176.076 335.964 176.35 335.83L180.44 333.46C180.544 333.431 180.636 333.37 180.705 333.286C180.774 333.203 180.815 333.1 180.824 332.993C180.832 332.885 180.808 332.777 180.754 332.684C180.699 332.59 180.618 332.516 180.52 332.47V332.47Z" fill="#EBEBEB"/>
        <path id="Vector_24" d="M182.38 342.22L181.91 341.22C181.28 339.91 180.91 338.13 182.71 337.09C183.39 336.745 184.142 336.565 184.905 336.565C185.668 336.565 186.42 336.745 187.1 337.09C188.1 337.64 188.26 338.45 187.73 339.09C188.902 338.782 190.145 338.91 191.23 339.45C191.496 339.54 191.727 339.71 191.891 339.938C192.054 340.166 192.143 340.439 192.143 340.72C192.143 341.001 192.054 341.274 191.891 341.502C191.727 341.73 191.496 341.9 191.23 341.99C189.47 342.99 186.39 342.81 184.11 342.46L182.38 342.22Z" fill="#EBEBEB"/>
        <path id="Vector_25" d="M156.65 337.74C157.468 337.326 158.373 337.11 159.29 337.11C160.207 337.11 161.112 337.326 161.93 337.74L243.23 384.68C244.69 385.52 244.69 386.89 243.23 387.73L226.64 397.31L140.08 347.31L156.65 337.74Z" fill="#EBEBEB"/>
        <path id="Vector_26" d="M247 326.93L200.72 339.36L261.23 374.3C262.048 374.714 262.953 374.93 263.87 374.93C264.787 374.93 265.692 374.714 266.51 374.3L267.82 373.54L293.93 335.23L238.48 346.11L247 326.93Z" fill="#E0E0E0"/>
        <path id="Vector_27" d="M269.79 300.05L248.5 287.75C247.682 287.336 246.777 287.12 245.86 287.12C244.943 287.12 244.038 287.336 243.22 287.75L219.42 301.5C220.51 303.57 222.76 305.5 226.17 307.17C236.17 311.95 252.45 311.95 262.48 307.17C266.68 305.17 269.11 302.65 269.79 300.05Z" fill="#E0E0E0"/>
        <path id="Vector_28" opacity="0.2" d="M372.46 295.72L265.74 234.08C264.923 233.666 264.021 233.451 263.105 233.451C262.189 233.451 261.287 233.666 260.47 234.08L121.47 314.36C120.02 315.2 120.02 316.56 121.47 317.36L144.03 330.36L228.22 378.99C229.037 379.404 229.939 379.619 230.855 379.619C231.771 379.619 232.673 379.404 233.49 378.99L358.61 306.7L372.45 298.7C373.92 297.93 373.92 296.56 372.46 295.72Z" fill="white"/>
        <path id="Vector_29" d="M372.72 295.28L284.48 244.28L266 233.64C265.106 233.182 264.115 232.943 263.11 232.943C262.105 232.943 261.114 233.182 260.22 233.64L121.22 313.92C120.824 314.072 120.483 314.341 120.243 314.691C120.003 315.041 119.874 315.456 119.874 315.88C119.874 316.304 120.003 316.719 120.243 317.069C120.483 317.419 120.824 317.688 121.22 317.84L143.78 330.84L228 379.5C228.894 379.96 229.885 380.199 230.89 380.199C231.895 380.199 232.886 379.96 233.78 379.5L358.89 307.21L372.74 299.21C373.135 299.055 373.475 298.785 373.714 298.435C373.953 298.084 374.081 297.669 374.081 297.245C374.081 296.821 373.953 296.406 373.714 296.055C373.475 295.705 373.135 295.435 372.74 295.28H372.72ZM372.21 298.33L358.36 306.33L233.25 378.62C232.509 378.99 231.693 379.182 230.865 379.182C230.037 379.182 229.221 378.99 228.48 378.62L144.29 330L121.74 317C121.499 316.938 121.286 316.798 121.133 316.602C120.981 316.405 120.898 316.164 120.898 315.915C120.898 315.666 120.981 315.425 121.133 315.228C121.286 315.032 121.499 314.892 121.74 314.83L260.74 234.55C261.481 234.182 262.298 233.991 263.125 233.991C263.952 233.991 264.769 234.182 265.51 234.55L284 245.2L372.24 296.2C372.481 296.262 372.694 296.402 372.847 296.598C372.999 296.795 373.082 297.036 373.082 297.285C373.082 297.534 372.999 297.775 372.847 297.972C372.694 298.168 372.481 298.308 372.24 298.37L372.21 298.33Z" fill="white"/>
        </g>
        </g>
        <g id="freepik--speech-bubble--inject-7">
        <path id="Vector_30" d="M324.57 45.74C326.04 44.89 327.24 45.58 327.24 47.28V243.87C327.188 244.797 326.92 245.699 326.456 246.503C325.992 247.307 325.346 247.991 324.57 248.5L247.85 292.8L238.85 322.8C238.04 325.52 236.42 325.64 235.24 323.05L227 304.86L204.6 317.79C203.13 318.64 201.93 317.95 201.93 316.25V119.66C201.98 118.733 202.248 117.83 202.712 117.026C203.176 116.222 203.823 115.538 204.6 115.03L324.57 45.74Z" fill="#00317A"/>
        <path id="Vector_31" d="M314.77 197.5C314.678 198.773 314.287 200.006 313.629 201.099C312.97 202.192 312.063 203.114 310.98 203.79L268.83 228.13C266.74 229.33 265.04 228.48 265.04 226.21C265.135 224.938 265.527 223.706 266.185 222.613C266.844 221.521 267.75 220.598 268.83 219.92L311 195.59C313.08 194.38 314.77 195.24 314.77 197.5Z" fill="white"/>
        <path id="Vector_32" d="M307 221.81C306.906 223.082 306.514 224.315 305.856 225.407C305.197 226.5 304.291 227.422 303.21 228.1L268.2 248.34C266.11 249.55 264.42 248.69 264.42 246.42C264.512 245.15 264.902 243.919 265.559 242.828C266.216 241.737 267.121 240.816 268.2 240.14L303.25 219.9C305.34 218.69 307 219.55 307 221.81Z" fill="white"/>
        <path id="Vector_33" d="M243.85 256.39L243.76 255.21C241.85 260.03 238.97 263.49 235.76 265.34C230.09 268.62 225.02 265.71 225.02 257.03C225.02 248.85 229.02 239.88 235.25 236.31C239.34 233.95 242.13 235.69 242.59 236.72V234.72C242.59 233.61 243.72 232.06 245.1 231.26C246.48 230.46 247.62 231.19 247.62 232.9V251.45C247.62 253.81 248.5 254.29 249.75 253.56C252.03 252.25 254.13 246.64 254.13 240.25C254.13 227.91 247.66 222.16 237.34 228.12C227.67 233.7 220 247.8 220 260.12C220 272.21 227.25 276.82 236.74 271.35C239.465 269.657 241.88 267.509 243.88 265C244.96 263.68 246.14 263.28 246.66 264.22C247.18 265.16 246.86 267.1 245.79 268.42C243.26 271.595 240.218 274.326 236.79 276.5C224.98 283.31 216.05 277.37 216.05 262.43C216.05 247.17 225.4 230.06 237.39 223.13C249.38 216.2 258.17 222.36 258.17 237.8C258.17 247.16 254.5 255.36 249.29 258.36C246.41 259.94 244.36 259.57 243.85 256.39ZM230.46 253.58C230.46 258.36 232.78 260.98 236.32 258.94C239.86 256.9 242.32 251.66 242.32 246.83C242.32 242.18 239.95 239.83 236.27 241.95C232.78 243.93 230.46 249 230.46 253.58V253.58Z" fill="white"/>
        </g>
        <g id="freepik--Character--inject-7">
        <path id="Vector_34" d="M264.56 109C285.27 97 302.05 106.74 302.05 130.65C302.05 154.56 285.27 183.65 264.56 195.59C243.85 207.53 227.07 197.85 227.07 173.94C227.07 150.03 243.85 121 264.56 109Z" fill="white"/>
        <path id="Vector_35" d="M264.56 109C285.27 97 302.05 106.74 302.05 130.65C302.05 154.56 285.27 183.65 264.56 195.59C243.85 207.53 227.07 197.85 227.07 173.94C227.07 150.03 243.85 121 264.56 109Z" fill="#F5F5F5"/>
        <g id="Group">
        <path id="Vector_36" d="M250.89 140.75C249.172 141.047 247.637 142.001 246.61 143.41C244.77 145.78 245.15 149.16 246.61 156.77L252.3 155.9L250.89 140.75Z" fill="#263238"/>
        <path id="Vector_37" d="M284.05 129.55C285.328 129.209 286.534 128.64 287.61 127.87C289.36 126.4 289.81 128.27 288.85 130.25C288.213 131.661 287.303 132.933 286.172 133.99C285.041 135.047 283.711 135.87 282.26 136.41C282.2 136.17 280.62 132.41 280.62 132.41L284.05 129.55Z" fill="#263238"/>
        <path id="Vector_38" d="M254.16 180C254.16 180 243.56 186.84 241.26 189.25C238.96 191.66 238.01 199.17 237.16 208.36C237.16 208.36 249.23 213.45 268.16 204.08C287.09 194.71 288.8 187.3 288.8 187.3C288.8 187.3 286.35 176.17 285.44 173.08C284.29 169.17 282.07 166.35 269.16 172.21L254.16 180Z" fill="#263238"/>
        <path id="Vector_39" d="M253.56 155.57C252.71 156.3 251.51 155 250.47 154.19C249.43 153.38 246.03 152.8 244.33 156.83C242.63 160.86 246.53 164.72 248.83 165.71C249.617 166.041 250.483 166.136 251.323 165.983C252.163 165.83 252.94 165.437 253.56 164.85L254.16 180C254.16 180 257.16 185.19 265.36 184.11C273.56 183.03 271.85 174.79 269.17 172.21V169.09C269.17 169.09 273.4 168.81 275.39 167.75C276.46 167.18 279 163.42 280.64 159.54C284.022 152.393 284.793 144.287 282.82 136.63C279.89 124.95 266.5 128.16 258.52 135.32C250.54 142.48 253.56 155.57 253.56 155.57Z" fill="#FFA8A7"/>
        <path id="Vector_40" d="M286.36 117.83C285.64 115.47 285.2 115.89 279.41 119.96C274.988 123.074 270.053 125.385 264.83 126.79C260.75 128.03 255.17 129.01 252.3 132.79C251.066 134.416 250.436 136.421 250.52 138.46C250.277 138.234 249.981 138.073 249.66 137.99C248.25 137.61 246.52 138.64 245.79 140.3L250.79 141.63C250.4 144.51 249.28 153.4 250.5 154.18C251.55 154.85 253.16 157.1 253.59 156.98C255.02 156.57 255.59 150.23 256.37 146.39C257.22 142.02 257.55 140.39 259.12 140.21C264.219 139.406 269.238 138.158 274.12 136.48C279.52 134.37 281.07 132.58 281.07 132.58L283.95 130.75C285.236 128.886 286.114 126.772 286.53 124.546C286.945 122.321 286.887 120.032 286.36 117.83V117.83Z" fill="#263238"/>
        <path id="Vector_41" d="M269.15 169.09C269.15 169.09 261.58 169.6 258.94 168.9C257.419 168.538 256.104 167.589 255.28 166.26C255.654 167.65 256.369 168.925 257.36 169.97C259.29 171.97 269.15 171.11 269.15 171.11V169.09Z" fill="#F28F8F"/>
        <path id="Vector_42" d="M267.22 160.3L270.68 160.67C270.538 161.183 270.23 161.635 269.806 161.957C269.381 162.279 268.863 162.452 268.33 162.45C267.37 162.35 266.88 161.39 267.22 160.3Z" fill="#F28F8F"/>
        <path id="Vector_43" d="M272.22 146.8L272.72 155.79L277.49 152.9L272.22 146.8Z" fill="#F28F8F"/>
        <path id="Vector_44" d="M267.33 150C267.32 150.45 267.169 150.885 266.898 151.244C266.627 151.603 266.25 151.868 265.82 152C265.64 152.062 265.448 152.078 265.261 152.047C265.073 152.016 264.896 151.939 264.746 151.823C264.595 151.708 264.476 151.556 264.398 151.383C264.32 151.209 264.286 151.02 264.3 150.83C264.312 150.379 264.465 149.944 264.738 149.585C265.01 149.226 265.389 148.962 265.82 148.83C265.999 148.768 266.191 148.751 266.378 148.782C266.566 148.813 266.742 148.89 266.892 149.006C267.042 149.122 267.161 149.274 267.237 149.447C267.314 149.621 267.345 149.811 267.33 150Z" fill="#263238"/>
        <path id="Vector_45" d="M265.72 144.69L262.48 147.35C262.27 146.868 262.231 146.329 262.369 145.821C262.508 145.314 262.815 144.869 263.24 144.56C263.399 144.384 263.596 144.245 263.816 144.154C264.036 144.063 264.273 144.022 264.511 144.035C264.748 144.047 264.98 144.113 265.189 144.226C265.399 144.339 265.58 144.498 265.72 144.69V144.69Z" fill="#263238"/>
        <path id="Vector_46" d="M280.86 141.89L277.86 140.41C278.086 139.947 278.471 139.582 278.946 139.381C279.42 139.181 279.951 139.159 280.44 139.32C280.644 139.455 280.819 139.63 280.952 139.835C281.085 140.041 281.174 140.271 281.214 140.513C281.253 140.754 281.242 141.001 281.181 141.239C281.12 141.476 281.011 141.697 280.86 141.89Z" fill="#263238"/>
        <path id="Vector_47" d="M280 146.17C279.988 146.619 279.835 147.053 279.565 147.411C279.294 147.77 278.918 148.035 278.49 148.17C278.31 148.232 278.118 148.248 277.931 148.217C277.743 148.186 277.566 148.109 277.416 147.993C277.265 147.878 277.146 147.726 277.068 147.553C276.99 147.379 276.956 147.19 276.97 147C276.982 146.549 277.135 146.114 277.408 145.755C277.68 145.396 278.059 145.132 278.49 145C278.669 144.938 278.861 144.921 279.048 144.952C279.236 144.983 279.412 145.06 279.562 145.176C279.712 145.292 279.831 145.444 279.907 145.617C279.984 145.791 280.015 145.981 280 146.17V146.17Z" fill="#263238"/>
        </g>
        </g>
        </g>
        </svg>
       
        </div>
      </div>
      <div className='social-media' data-aos="fade-up-left">
      <a href='https://api.whatsapp.com/send?phone+212651167495' target='_blank' rel='noreferrer'>
       <div className='icon'><BsWhatsapp/></div>
       <p>whatsapp</p>
      </a>
      <a href='mailto:code30a@gmail.com' target='_blank' rel='noreferrer'>
       <div className='icon'><SiGmail/></div>
       <p>code30a@gmail.com</p>
      </a>
      <a href='https://m.me/100022436844351' target='_blank' rel='noreferrer'>
       <div className='icon'><BsFacebook/></div>
       <p>Amine Mohamed</p>
      </a>
     </div>
    </div>
  )
}
export default Contact