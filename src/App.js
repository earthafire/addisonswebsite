import "./App.css";
import Navbar from "./Navbar";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Resume from "./pages/Resume";

function App() {
  let component;
  switch (window.location.pathname) {
    case "/":
      component = <Home />;
      break;
    case "/projects":
      component = <Projects />;
      break;
    case "/resume":
      component = <Resume />;
      break;
    case "/contact":
      component = <Contact />;
      break;
    default:
      break;
  }

  return (
    <>
      <Navbar />
      {component}
    </>
  );
}

export default App;
