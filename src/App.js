import './App.scss';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/layout';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/contact';

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home/>}>
        </Route>
        <Route path='About' element={<About/>}>
        </Route>
        <Route path='Contact' element={<Contact/>}>
        </Route>
      </Route>
    </Routes>
    </>
  )
}

export default App;
