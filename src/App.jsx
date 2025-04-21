import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Front from './Components/Front'
import BookingPage from './Components/BookingPage'
import Footer from './Components/Footer'

const App = () => {
  return (
    <Router>
      <div className=" min-h-screen w-full overflow-x-hidden">
        
        <div className="flex justify-center items-center mt-5">
          <h1 className="text-2xl font-bold">Welcome to Movie Booking App</h1>
        </div>
        <div className="flex justify-center items-center mt-5">
          <h2 className="text-xl font-semibold">Book your favorite movies</h2>
        </div>
        <div className="flex justify-center items-center mt-5">
          <h3 className="text-lg font-medium">Select a movie to book tickets</h3>
        </div>

        
        
        <Routes>
          <Route path="/" element={<Front />} />
          <Route path="/booking/:movieName" element={<BookingPage />} />
        </Routes>
        <Footer/>
      </div>
    </Router>
  )
}

export default App
