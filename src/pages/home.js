import React from 'react'
import "./home.css";
//import { FontAwesomeIcon } from '@fortawesome/fontawesome-svg-core';
/* import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' */


const Home = () => {
  return (
    <div>

        <div className='main'>
            <div className='navbar1'>
            <logo>
                <a href='#1' className='monito'>Monito</a>
            </logo>

            <ul>
                <li><a href='/'>Home</a></li>
                <li><a href='/'>Category</a></li>
                <li><a href='/'>About</a></li>
                <li><a href='/'>Contact</a></li>
            </ul>
            </div>

        </div>




        <header className='header'>
            <logo>
                <a href='#1' className='monito'>Monito</a>
            </logo>
            <nav className='navbar'>
                <a href='/'>Home</a>
                <a href='/'>Category</a>
                <a href='/'>About</a>
                <a href='/'>Contact</a>
                
            </nav>

            <div className='searchbar'>
                <input type='text' placeholder='Search Something Hear'></input>
                {/* <FontAwesomeIcon icon={faEnvelope} /> */}
            </div>

            <button className='navbtn'>Join the Community</button>

            <div className='vnd'>
                <h3>VND</h3>
            </div>
        </header>


        <div className='opensection'>

        </div>
    </div>
  )
}

export default Home