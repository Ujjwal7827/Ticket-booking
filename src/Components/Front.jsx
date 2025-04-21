import React from 'react'
import jaat from '../assets/jaat-2025.jpg'
import Sweetheart from '../assets/Sweetheart.jpg'
import fateh from '../assets/Poster-Fateh-2025.jpg'
import Raid from '../assets/Poster-Raid-2018.jpg'
import Hisab from  '../assets/Poster-Hisaab-Barabar-2025.jpg'
import Gorakhpur from  '../assets/gorakhpur-2024.jpg'
import Superboys from '../assets/Superboys-2025.jpg'
import Panther from  '../assets/blackPanther.jpg'
import { useNavigate } from 'react-router-dom'

const Front = () => {
  const navigate = useNavigate()

  const handleBookClick = (movieName) => {
    navigate(`/booking/${encodeURIComponent(movieName)}`)
  }

  return (
    <div className='  sm:m-4 overflow-hidden  flex-col md:flex-row '>
       
       <div className='flex mt-5 gap-4 sm:m-4 overflow-hidden flex-col md:flex-row justify-center items-center  ' >

       <div className='border-1 p-5 mt-15  '>
         <img src={jaat} className="h-70 " alt="" /> 
         <span className=''>jaat 2025</span>
         <button 
           onClick={() => handleBookClick('jaat 2025')}
           className='border-1 mt-5 ml-5 pl-2 pr-2 rounded-2xl hover:bg-amber-500 hover:scale-105'
         >
           book
         </button>
         <p> 
          releasing on : 11 April
         </p>
       </div>
       <div className='border-1 p-5 mt-15'>
         <img  src={Sweetheart} className=" h-70"   alt="" /> 
         <span className=''> Sweetheart 2025</span>
         <button 
           onClick={() => handleBookClick('Sweetheart 2025')}
           className='border-1 mt-5 ml-5 pl-2 pr-2 rounded-2xl hover:bg-amber-500 hover:scale-105'
         >
           book
         </button>
         <p> 
          releasing on : 2025
         </p> 
       </div>
       <div className='border-1 p-5 mt-15  '>
         <img src={fateh} className="h-70 " alt="" /> 
         <span className=''>Fateh2025</span>
         <button 
           onClick={() => handleBookClick('Fateh2025')}
           className='border-1 mt-5 ml-5 pl-2 pr-2 rounded-2xl hover:bg-amber-500 hover:scale-105'
         >
           book
         </button>
         <p> 
          releasing on : 10 jan 2025
         </p>
       </div>
       <div className='border-1 p-5 mt-15'>
         <img  src={Raid} className=" h-70"   alt="" /> 
         <span className=''> Raid 2025</span>
         <button 
           onClick={() => handleBookClick('Raid 2025')}
           className='border-1 mt-5 ml-5 pl-2 pr-2 rounded-2xl hover:bg-amber-500 hover:scale-105'
         >
           book
         </button>
         <p> 
          releasing on : 16 March
         </p>
       </div>
       </div>


       <div className='flex mt-5 gap-4 sm:m-4 overflow-hidden flex-col md:flex-row justify-center items-center  ' >
       <div className='border-1 p-5 mt-15  '>
         <img src={Hisab} className="h-70 " alt="" /> 
         <span className=''>Hisab-barabar 2025</span>
         <button 
           onClick={() => handleBookClick('Hisab-barabar 2025')}
           className='border-1 mt-5 ml-5 pl-2 pr-2 rounded-2xl hover:bg-amber-500 hover:scale-105'
         >
           book
         </button>
         <p> 
          releasing on : 28 jan
         </p>
       </div>


       <div className='border-1 p-5 mt-15'>
         <img  src={Gorakhpur} className=" h-70"   alt="" /> 
         <span className=''>Gorakhpur 2025</span>
         <button 
           onClick={() => handleBookClick('Gorakhpur 2025')}
           className='border-1 mt-5 ml-5 pl-2 pr-2 rounded-2xl hover:bg-amber-500 hover:scale-105'
         >
           book
         </button>
         <p> 
          releasing on : 2024
         </p> 
       </div>
       <div className='border-1 p-5 mt-15  '>
         <img src={Superboys} className="h-70 " alt="" /> 
         <span className=''>Super-boys 2025</span>
         <button 
           onClick={() => handleBookClick('Super-boys 2025')}
           className='border-1 mt-5 ml-5 pl-2 pr-2 rounded-2xl hover:bg-amber-500 hover:scale-105'
         >
           book
         </button>
         <p> 
          releasing on : 14 April
         </p>
       </div>
       <div className='border-1 p-5 mt-15'>
         <img  src={Panther} className=" h-70"   alt="" /> 
         <span className=''> Black-Panther</span>
         <button 
           onClick={() => handleBookClick('Black-Panther')}
           className='border-1 mt-5 ml-5 pl-2 pr-2 rounded-2xl hover:bg-amber-500 hover:scale-105'
         >
           book
         </button>
         <p> 
          releasing on : 2018
         </p>
       </div>
       </div>
    </div>
  )
}

export default Front
