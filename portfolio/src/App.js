import './App.scss';
import {Routes, Route} from 'react-router-dom';
import Layout from "./components/layout";
import Home from "./components/home";
import About from './components/about';
import Contact from './components/contact';
import Fragment from 'react'

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" index element={<About />} />
        <Route path="contact" index element={<Contact />} />
      </Route>
    </Routes>
    </>
  );
}

export default App;
