import {useState} from 'react';
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom';
import Header from './Components/header'
import Footer from './Components/Footer'
import NewsView from './Components/NewsComponent'
import EventView from './Components/EventComponent'
import Video from './Components/VideoComponent'
import AboutAASTU from './Components/Routes/AboutUs';
import Admission from './Components/Routes/Admission';
import UniversityLife from './Components/Routes/UniversityLife';
import Research from './Components/ResearchComponent';
import SignIn from './Components/Routes/SignIn';
import Academics from './Components/Routes/Academics';
import './App.css';

export default function App() {
  const [hoverDivStyle,setHoverDivStyle] = useState();
  return (
    <div onMouseOver={()=>{setHoverDivStyle({display:'none'})}}>
    <Router>
      <Header style={hoverDivStyle} setHoverDisplay={setHoverDivStyle}/>
    <Routes>
    <Route path={'/'} exact element={<><Video/>
    <NewsView/>
    <EventView/></>}/>
    <Route path={'/about-aastu'} element={<AboutAASTU/>}/>
    <Route path={'/admissions'} element={<Admission/>}/>
    <Route path={'/academics'} element={<Academics/>}/>
    <Route path={'/university-life'} element={<UniversityLife/>}/>
    <Route path={'/research'} element={<Research/>}/>
    <Route path={"/login"} element={<SignIn/>}/>
    </Routes>
    <Footer/>
     </Router>
    </div>
  );
}