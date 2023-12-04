import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useState, useEffect } from 'react'
import Loader from 'react-loaders'
import {
    faBootstrap,
    faCss3,
    faGitAlt,
    faHtml5,
    faJsSquare,
    faReact,
  } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const About = () => {
    const [letterClass, setLetterClass]= useState('animated-text')

    useEffect(() => {
        setTimeout(() => {
        return setLetterClass('animated-text-hover')
        }, 3000)
      }, []);
    return(
        <>
        <div className='container about-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters
                    letterClass={letterClass}
                    strArray={['W', 'e', 'l', 'c', 'o', 'm', 'e', ' ','t', 'o', ' ', 'm', 'y', ' ', 'd', 'i','g', 'i', 't', 'a', 'l', ' ', 'a', 'b','o', 'd', 'e', '!']}
                    ind={15}
                    />
                </h1>
          <p align="LEFT">
          I am a proactive and ambitious student at the esteemed IIT BHU, 
          blending a strong academic foundation with a fervent passion for front-end and software development. My journey in the world of technology is marked by a commitment to crafting seamless,
           user-centric experiences through intuitive and visually compelling designs.
          </p>
          
          <p>
          Whether it's bringing a creative concept to life or diving into the intricacies of coding, 
          I thrive on the challenge of turning ideas into innovative solutions. As an IIT student, I am continuously honing my skills and staying abreast of 
          the latest industry trends.
          </p>
          
          <p>
          Join me on this exciting ride as we explore the intersection of design and technology, 
          and witness the magic of software development unfold.
          </p>
            </div>

            <div className='stage-cube-cont'>
            <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faBootstrap} color="#DD0031" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
            </div>
          </div>

            </div>
        </div>
        <Loader type='pacman'/>
        </>
    )
}

export default About