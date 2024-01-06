import Header from "./components/Header";
import Nav from "./components/Nav";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Specials from "./components/Specials";
import './App.css';
import Testimonials from "./components/Testimonials";
import Chicago from "./components/Chicago";
import { Route, Routes } from "react-router-dom";
import BookingPage from "./components/BookingPage";

function App() {
  return (
    <>
        <Nav />
        <Header />
        <Specials />
        <Testimonials />
        <Main />
        <Chicago />
        <Footer />
        <switch>
        <Routes>
        <Route path="/booking" Component={BookingPage}/>
        </Routes>
      </switch>
    </>
  );
}

export default App;
