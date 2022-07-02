import './App.css';
import Home from './Pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import About from './Pages/About';
import ContactUs from './Pages/ContactUs';
import Courses from './Pages/Courses';
import Page404 from './Pages/Page404';
import GalleryPage from './Pages/GalleryPage';
import ScrollToTop from './components/ScrollToTop';
import CoursesCard from './components/CoursesCard';

function App() {
  return (
    <Router>
      <ScrollToTop/>
      <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/Courses/:CourseTitle' element={<Courses/>}></Route>
          <Route path='#Courses' element={<CoursesCard/>}></Route>
          <Route path='#AboutUs' element={<About/>}></Route>
          <Route path='#Contactus' element={<ContactUs/>}></Route>
          <Route path='/Gallery' element={<GalleryPage/>}></Route>
          <Route path='/*' element={<Page404/>}></Route>
      </Routes>
 </Router>
  );
}

export default App;
