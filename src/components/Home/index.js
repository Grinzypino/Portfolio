import LogoJ from '../../assets/logo-j.png'
import { Link } from 'react-router-dom'
import './index.scss'
import AnimatedLetters from'../AnimatedLetters'
import { useState, useEffect } from 'react'
import Logo from './Logo'
import Loader from 'react-loaders'

const Home = () =>{
    const [letterClass, setLetterClass]= useState('animated-text')
    const nameArray = ['e','e','t',' ','G','u','p','t','a']
    const jobArray = ['s','o','f','t','w','a','r','e',' ','d','e','v','e','l','o','p','e','r','.']

    useEffect(() => {
        setTimeout(() => {
        return setLetterClass('animated-text-hover')
        }, 4000)
      }, []);

    return (
    <>
        <div className="container">
            <div className="texts">
                <h1>
                <span className={`${letterClass} _9`}>H</span>
                <span className={`${letterClass} _10`}>i</span>
                <span className={`${letterClass} _11`}>,</span>
                <br />
                <span className={`${letterClass} _12`}>I</span>
                <span className={`${letterClass} _13`}>'</span>
                <span className={`${letterClass} _14`}>m</span>
                <img src={LogoJ} alt='biglogo'/>
                <AnimatedLetters letterClass={letterClass}
                strArray={nameArray}
                ind={15}/>
                <br/>
                <AnimatedLetters letterClass={letterClass}
                strArray={jobArray}
                ind={24}/>
                </h1>
                <h2> Front-end Developer / ReactJS Expert / Pen Ultimate Year @ IIT BHU</h2>
                <Link to='/contact' className='button'>CONTACT ME</Link>
                
                <Link to='https://drive.google.com/file/d/1HCH670_BRU2SU1yk_5Kzt3v6hVHv3ys_/view?usp=drive_link' className='button-cv'>CV / Resume</Link>
                

            </div>
            <Logo/>
        </div>
        <Loader type='pacman'/>
    </>
    )
}

export default Home

