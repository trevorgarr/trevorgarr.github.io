import './index.scss'
import { useEffect, useState } from 'react'
import {
  faAws,
  faGitAlt,
  faPython,
  faJava,
  faJsSquare,
  faHtml5,
} from '@fortawesome/free-brands-svg-icons'
import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const About = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        setTimeout(() => {
          setLetterClass('text-animate-hover')
        }, 2000)
    }, [])

    return (
        <>
        <div className="container about-page">
            <div className="text-zone">
                <h1>
                <AnimatedLetters letterClass={letterClass} strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']} idx={15}/>
                </h1>
                <p>
                    TODO: more about me and desires
                </p>
                <p align="LEFT">
                    TODO: something about me
                </p>
                <p>
                    TODO: something fun here
                </p>
            </div>
            <div className="stage-cube-cont">
                <div className="cubespinner">
                    <div className="face1">
                        <FontAwesomeIcon icon={faJava} color="#ED1D25" />
                    </div>
                    <div className="face2">
                        <FontAwesomeIcon icon={faPython} color="#4584b6" />
                    </div>
                    <div className="face3">
                        <FontAwesomeIcon icon={faAws} color="#FF9900" />
                    </div>
                    <div className="face4">
                        <FontAwesomeIcon icon={faHtml5} color="#F06529" />
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
        </>
    )
}

export default About