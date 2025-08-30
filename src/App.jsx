import About from "./Components/About";
import ContactUs from "./Components/ContactUs";
import Header from "./Components/Header";
import Navbar from "./Components/Navbar";
import Projects from "./Components/Projects";
import Testimonials from "./Components/Testimonials";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <div>
      <ToastContainer />
      <Header />
      <About />
      <Projects />
      <Testimonials />
      <ContactUs />
    </div>
  );
};

export default App;
