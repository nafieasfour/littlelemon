import Header from "./components/Header";
import Nav from "./components/Nav";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Specials from "./components/Specials";
import './App.css';
import Testimonials from "./components/Testimonials";
import Chicago from "./components/Chicago";

function App() {
  return (
    <>
      <Nav />
      <Header />
      <Specials />
      <Testimonials/>
      <Main />
      <Chicago/>
      <Footer />
    </>
  );
}

export default App;
