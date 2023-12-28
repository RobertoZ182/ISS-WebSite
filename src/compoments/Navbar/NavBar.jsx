import React, { useState } from 'react';
import './Navbar.css';
import logo from '../../images/1.png'
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { IoMenu } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";

const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);
    const [clicked, setClicked] = useState(false);
    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };
    const handleClick = () =>{
        setClicked(!clicked);
    }
    return (
        <header>
            <div>
                <div className={clicked ? "contact active" : "contact"}> 
                    <h2 className='mobileText'>Contact</h2>
                    <div className="info"><FaPhone /><p>01726766794</p></div>
                    <div className="info"><FaLocationDot id="dot"/><a href="https://www.google.com/maps/place/Potsdamer+Platz+10%2FHaus+2,+10785+Berlin/@52.5083369,13.3744956,17z/data=!3m1!4b1!4m5!3m4!1s0x47a8510a2194fe8b:0x28f56b6cbd637b14!8m2!3d52.5083369!4d13.3770705?entry=ttu" target="_blank">Potsdamer Platz 10, 10785 Berlin Haus 2</a></div>
                    <div className="info"><MdEmail /><p>josifstoica60@gmail.com </p></div>
                </div>
                <nav className="navbar">
                    <img src={logo} alt="logo" className="logo" />
                    <ul className={clicked ? "dienst active" : "dienst"}>
                        <h2 className='mobileText'>Menu</h2>
                        <Link to={"/"} className="homeLink" onClick={handleClick}><li>Home</li></Link>
                        <div className="dropdown">
                            <li className="dropdown-btn" onClick={toggleDropdown}>
                                Leistungen
                            </li>
                            {isOpen && (
                                <div className="dropdown-content">
                                    <Link to={'/winterdienst'} onClick={() =>{toggleDropdown(); handleClick()}}> Winterdienst</Link>
                                    <Link to={'/reinigung'} onClick={() =>{toggleDropdown(); handleClick()}}>Reinigung</Link>
                                    <Link to={'/gartenpflege'} onClick={() =>{toggleDropdown(); handleClick()}}>Gartenpflege</Link>
                                </div>
                            )}
                        </div>
                        <Link to={"/kontakt"} className="homeLink" onClick={handleClick}><li>Kontakt</li></Link>
                    </ul>
                    <div id="mobile">
                        {clicked ? <IoMdClose onClick={handleClick}/> : <IoMenu onClick={handleClick}/>} 
                    </div>
                </nav>
            </div>
        </header>

    )
}

export default Navbar;