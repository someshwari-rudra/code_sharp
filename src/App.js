import './App.css';
import Home from './Pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import About from './Pages/About';
import ContactUs from './Pages/ContactUs';
import Courses from './Pages/Courses';
import Page404 from './Pages/Page404';
import Gallery from './Pages/Gallery';
import NavBar from './components/NavBar';

function App() {
  return (
    <Router>
      <NavBar/>
      <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/Courses/:CourseTitle' element={<Courses/>}></Route>
          <Route path='/About_us' element={<About/>}></Route>
          <Route path='/Contact_us' element={<ContactUs/>}></Route>
          <Route path='/Gallery' element={<Gallery/>}></Route>
          <Route path='/*' element={<Page404/>}></Route>
      </Routes>
 </Router>
  );
}

export default App;
