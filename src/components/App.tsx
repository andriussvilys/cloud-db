import { useEffect, useState } from 'react';
import './App.css';
import { Booking, BookingProps } from './Bookings/Booking';
import { BookingList } from './Bookings/BookingList';

function App() {

  const [bookings, setBookings] = useState<BookingProps[]>([])

  useEffect(() => {

    fetch("http://localhost:5000/bookings", {method: "GET"})
    .then(res => {
      return res.text()
    })
    .then((res:any) => {
      console.log(JSON.parse(res))
      setBookings(JSON.parse(res))
    })

  }, [])

  return (
    <div className="App">
      {/* {(bookings as any)?.map((booking:any) => {

        return (
          <Booking key={booking._id} {...booking} />
        )
      })} */}
      {
        bookings ? <BookingList bookings={bookings} /> : null
      }
    </div>
  );
}

export default App;
