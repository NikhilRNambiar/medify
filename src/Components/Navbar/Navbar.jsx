import React from 'react';
import Logo from "../../Assets/Logo.png";
import { Link } from 'react-router-dom';
import './Navbar.css';


function Navbar({type}) {
    const navLinks = ["Find Doctors", "Hospitals", "Medicines", "Surgeries", "Software for Provider", "Facilities"];

    const displayLinks = () => {
        return navLinks.map((item,index) => {
            // let goto = "#"
            // if(item == "Find Doctors") goto = "/find"
            return (
                
                <div className='navLink' key={index}>
                    {/* // <Link to={goto}> */}
                    <p>{item}</p>
                {/* // </Link> */}
                </div>
            )
        })
    }

  return (
    <div className={type==='search'?'nav-container-search':'nav-container'}>
        <div style={{marginLeft:'100px'}}>
            <Link to="/">
                <img src={Logo} alt="logo" style={{ height: '27px', width: '92px' }} />
            </Link>
        </div>
        <div className='navDiv'>
            {displayLinks()}
            <button className='button'><Link to="/bookings" style={{ textDecoration: 'none',color:'white' }}>My Bookings</Link></button>
        </div>
    </div>
  )
}

export default Navbar