import About from "./Components/About";
import Contact from "./Components/Contatct";
import Experience from "./Components/Experience";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Nav from "./Components/Nav";
import Portfolio from "./Components/Portfolio";
import "./index.css"
function App() {
  return (
    <div className="bg-slate-900 text-white m-0 p-0 border-0 outline-0 box-border list-none no-underline">
      <Header />
      <Nav />
      <About />
      <Experience />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
