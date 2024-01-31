import { Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home/home.jsx';
import { AboutUs } from './pages/AboutUs/aboutUs.jsx';
import { ContactUs } from './pages/ContactUs/contactUs.jsx';
import { useState } from 'react';

function App() {
    const[DB, setDB]= useState([
        {
            name: "youssef",
            email : "hello@gmail.com",
            phone : "0612345678",
            password : "hello",
            profile : "https://images.unsplash.com/photo-1705182798554-42ebefed64a6?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }
    ]);

    
    return (
        <>

            <Routes>

                <Route path="/" element={<Home DB={DB} setDB={setDB} />} />
                <Route path="/about-us" element={<AboutUs DB={DB} setDB={setDB}/>} />
                <Route path="/contact-us" element={<ContactUs DB={DB} setDB={setDB}/>} />

            </Routes>
        </>
    );
}

export default App;
