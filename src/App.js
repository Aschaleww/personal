import Navbar from "./components/Navbar/navbar";
import Introduction from "./components/Introduction/intro";
import Skills from "./components/Skills/skills";
import Personal from "./components/Portofolio/personal";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Introduction />
      <Skills />
      <Personal />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
