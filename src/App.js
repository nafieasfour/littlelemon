import './App.css';
import { Route, Routes, BrowserRouter } from "react-router-dom";
import BookingPage from "./components/BookingPage.js";
import ReservationConfirmed from './components/ReservationConfirmed.js';
import HomePage from "./components/HomePage.js"

function App() {
  return (
    <BrowserRouter>
      <>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/booking" element={<BookingPage />}></Route>
          <Route path="/reservationconfirmed" element={<ReservationConfirmed/>}></Route>
        </Routes>
      </>
    </BrowserRouter>
  );
}

export default App;
