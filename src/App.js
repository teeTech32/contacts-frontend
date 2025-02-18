import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { ContactProvider } from "./contexts/ContactContext";
import ContactPreview from "./components/Popups/ContactPreview";
import {ToastContainer} from "react-toastify"
import 'react-toastify/dist/ReactToastify.css'
import Profile from "./components/Popups/Profile";
import EditingForm from "./components/Popups/EditingForm";
import Home from './components/Layouts/Home';
import DeleteCaution from './components/Popups/DeleteCaution';
import ContactForm from './components/Popups/ContactForm';
import LandingPage from './components/Layouts/LandingPage'
import {useRef, useEffect, useState } from 'react';
import Spinner from './components/Layouts/Spinner';
import Login from './components/Popups/Login';
import SignUp from './components/Popups/SignUp';
import HomePage from './components/Layouts/HomePage';
import About from './components/Popups/About';
import User from './components/Popups/User';
import LogOut from './components/Popups/LogOut';
import Footer from './components/Layouts/Footer'
import AOS from "aos";
import "aos/dist/aos.css" ;


function App() {
 const [isloading, setIsloading] = useState(false)

 useEffect(()=>{
    AOS.init({
      offset: 100,
      duration: 100,
      easing: 'ease-in-sine',
      delay:100
    });
    AOS.refresh();
  },[]);
  

const isMounted = useRef(true)
useEffect(()=>{
  if(isMounted){
    setIsloading(true)
    setTimeout(()=>{setIsloading(false)
    },5000)
  }
  return ()=>{
    isMounted.current = false
  }
  //eslint-disable-next-line
},[])

  return isloading ? <Spinner/> : <div class="bg-blue-950/75 bg-opacity-50">
          <ContactProvider>
            <Router>
              <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/user/:username" element={<>
            <User />
            <LogOut />
                </>} />
                <Route path="/about" element={<About />} />
                <Route path="/login" element={<Login/>} />
                <Route path="/Homepage/" element={<HomePage/>} />
                <Route path="/signup" element={<SignUp/>} />
                <Route path="/contact/:username" element={<Home/>} />
                <Route path="/contac/:id" element={<DeleteCaution />} />
                <Route path="/contactForm/:username" element={<ContactForm />} />
                <Route path="/contact/contactEdit" element={<EditingForm />} />
              </Routes>
              <ContactPreview />
            </Router>
            <Profile />
            <Footer/>
          </ContactProvider>
          <ToastContainer/>
        </div>
}

export default App;
