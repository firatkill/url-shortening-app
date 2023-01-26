import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import SectionOne from "./Components/SectionOne/SectionOne";
import SectionTwo from "./Components/SectionTwo/SectionTwo";
import SectionThree from "./Components/SectionThree/SectionThree";
import Footer from "./Components/Footer/Footer";
import Shortener from "./Components/Shortener/Shortener";

function App() {
  return (
    <div className="App">
      <Navbar />
      <SectionOne />
      <Shortener />
      <SectionTwo />
      <SectionThree />
      <Footer />
    </div>
  );
}

export default App;
