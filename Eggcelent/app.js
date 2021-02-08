import './App.css';

import Navbar from './components/Navbar';
//import Hero from './components/Hero';
//import Content from './components/Content';
import Footer from './components/Footer';
import Dropdown from './components/Dropdown';

import {Switch, Route} from 'react-router-dom';
import Home from "./pages";
import About from "./pages/about";
import Menu from "./pages/menu";


function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);

  };

  return (
    <>
      <Navbar toggle={toggle} />
      <Dropdown isOpen={isOpen} toggle={toggle}/>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/About" component={About} />
        <Route path="/Menu" component={Menu} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
