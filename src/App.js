import { BrowserRouter as Router,Route,Routes } from "react-router-dom";
import Header from "./components/Header";

import './styles/App.scss'
import './styles/Header.scss'
import './styles/Home.scss'
import './styles/Footer.scss'
import './styles/Contact.scss'
import './styles/mediaquery.scss'
import Home from "./components/Home";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Service from "./components/Service";

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/contact" element={<Contact/>} />
          <Route exact path="/service" element={<Service/>} />
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
