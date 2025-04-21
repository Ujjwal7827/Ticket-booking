import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const ROWS = 5;
const COLS = 8;

const moviePrices = {
  'Black Panther': 10,
  Gorakhpur: 8,
  Jaat: 9,
  Fateh: 7,
  'Hisaab Barabar': 6,
  Raid: 8,
  Superboys: 11,
  Sweetheart: 9,
};

const BookingPage = () => {
  const { movieName } = useParams();
  const navigate = useNavigate();
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [isPaymentStep, setIsPaymentStep] = useState(false);
  const [paymentInfo, setPaymentInfo] = useState({
    cardNumber: '',
    expiry: '',
    cvv: '',
  });
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  // Normalize movie name (handle hyphens and casing)
  const normalizeMovieName = (name) => {
    if (!name) return '';
    return name
      .split('-')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(' ');
  };

  const normalizedMovieName = normalizeMovieName(movieName);

  const pricePerSeat = moviePrices[normalizedMovieName] || 15;

  const totalPrice = pricePerSeat * selectedSeats.length;

  const toggleSeatSelection = (row, col) => {
    const seatId = `${row}-${col}`;
    setSelectedSeats((prevSelected) =>
      prevSelected.includes(seatId)
        ? prevSelected.filter((seat) => seat !== seatId)
        : [...prevSelected, seatId]
    );
  };

  const handleGoToPayment = (e) => {
    e.preventDefault();
    if (selectedSeats.length === 0) {
      alert('Please select at least one seat to proceed to payment.');
      return;
    }
    setIsPaymentStep(true);
  };

  const handlePaymentChange = (e) => {
    const { name, value } = e.target;
    setPaymentInfo((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handlePaymentSubmit = (e) => {
    e.preventDefault();
    if (!paymentInfo.cardNumber || !paymentInfo.expiry || !paymentInfo.cvv) {
      alert('Please fill in all payment details.');
      return;
    }
    setPaymentSuccess(true);
    setTimeout(() => {
      alert(`Payment successful! You booked seats: ${selectedSeats.join(
          ', '
        )} for ${movieName}. Total paid: $${totalPrice}`
      );
      navigate('/');
    }, 500);
  };

  if (paymentSuccess) {
    return (
      <div className='p-6 max-w-md mx-auto mt-10 border rounded shadow text-center'>
        <h2 className='text-2xl font-bold mb-4'>Payment Successful!</h2>
        <p>Thank you for your purchase.</p>
      </div>
    );
  }

  return (
    <div className='p-6 max-w-md mx-auto mt-10 border rounded shadow'>
      <h2 className='text-2xl font-bold mb-4'>Book Tickets for {movieName}</h2>
      {!isPaymentStep ? (
  <form onSubmit={handleGoToPayment}>
       <p className='mb-2'>Price per seat: ${pricePerSeat}</p>
 <div className='grid grid-cols-8 gap-2 mb-4'>
        {[...Array(ROWS)].map((_, row) =>
     [...Array(COLS)].map((_, col) => {
     const seatId = `${row + 1}-${col + 1}`;
       const isSelected = selectedSeats.includes(seatId);
      return (
          <button  type='button' key={seatId} onClick={() => toggleSeatSelection(row + 1, col + 1)}
           className={`w-8 h-8 rounded ${ isSelected ? 'bg-blue-600 text-white' : 'bg-gray-300' } hover:bg-blue-400`} aria-label={`Seat ${seatId}`}>
           {seatId} </button>
                );
              })
            )}
       </div>
    <p className='mb-2 font-semibold'>  Selected Seats: {selectedSeats.length}</p>{' '}
          {/* Display selected seats count */}
          <p className='mb-4 font-semibold'>Total Price: ${totalPrice}</p>{' '}
          {/* Display total price */}
          <button type='submit' className='mt-4 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700' >
            Go to Payment </button>
        </form>
      ) : (
        <form onSubmit={handlePaymentSubmit}>
          <div className='mb-4'>
            <label className='block mb-1 font-semibold' htmlFor='cardNumber'>
              Card Number
            </label>
            <input type='text' id='cardNumber' name='cardNumber' value={paymentInfo.cardNumber}  onChange={handlePaymentChange}
              className='w-full border rounded px-2 py-1'
              placeholder='1234 5678 9012 3456'
              required />
          </div>
          <div className='mb-4 flex gap-4'>
            <div className='flex-1'>
              <label className='block mb-1 font-semibold' htmlFor='expiry'>  Expiry Date </label>
       <input type='text' id='expiry' name='expiry' value={paymentInfo.expiry}  onChange={handlePaymentChange} className='w-full border rounded px-2 py-1'
                placeholder='MM/YY' required />
            </div>
            <div className='flex-1'>
              <label className='block mb-1 font-semibold' htmlFor='cvv'>  CVV
              </label>
              <input   type='password' id='cvv'  name='cvv'value={paymentInfo.cvv} onChange={handlePaymentChange}  className='w-full border rounded px-2 py-1'
                placeholder='123' required/>
            </div>
          </div>
          <button
            type='submit'
            className='bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700' > Pay Now</button>
        </form>
      )}
    </div>
  );
};

export default BookingPage;
