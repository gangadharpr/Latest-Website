import React from 'react'
import Navbar from './Navbar/Navbar'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Home from './Home/Home'
import Portfolio from './Portfolio/Portfolio'
import Admin from './Admin/Admin'
import Clients from './Clients/Clients'
let App=()=>{
        return (
            <div>
                <Router>
                    <Navbar />
                    <Routes>
                        <Route path="/Home" element={<Home />} />
                        <Route path="/Portfolio" element={<Portfolio />} />
                        <Route path="/Admin" element={<Admin />} />
                        <Route path="/Clients" element={<Clients />} />

                     </Routes>
                </Router>
            </div>
        )
    }

export default App
