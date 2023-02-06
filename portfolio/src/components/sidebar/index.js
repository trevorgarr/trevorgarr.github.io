import './index.scss'
import {Link, NavLink} from 'react-router-dom'
import LogoT from '../../assets/images/logo-t.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faHome,faUser,faEnvelope} from '@fortawesome/free-solid-svg-icons'
import {faLinkedin,faGithub,faTwitter, faReadme} from '@fortawesome/free-brands-svg-icons'
import Resume from '../../assets/files/RESUME_2022.pdf'
import Resume23 from '../../assets/files/RESUME_2023.pdf'

const Sidebar = () => (
    <div className='nav-bar'>
        <Link className='logo' to='/'>
            <img src={LogoT} alt="logo"/>
        </Link>
        <nav>
            <NavLink exact="true" activeclassname="active" to="/">
                <FontAwesomeIcon icon={faHome} color = "#4d4d4e" />
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="about-link" to="/about">
                <FontAwesomeIcon icon={faUser} color = "#4d4d4e" />
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="contact-link" to="/contact">
                <FontAwesomeIcon icon={faEnvelope} color = "#4d4d4e" />
            </NavLink>
        </nav>
        <ul>
        <li>
          <a href="https://www.linkedin.com/in/trevor-garrood/" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" className="anchor-icon" alt="linkedin"/>
          </a>
        </li>
        <li>
          <a href="https://github.com/trevorgarr" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faGithub} color="#4d4d4e" className="anchor-icon" alt="github"/>
          </a>
        </li>
        <li>
          <a href="https://twitter.com/trevorgar" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faTwitter} color="#4d4d4e" className="anchor-icon" alt="twitter"/>
          </a>
        </li>
        <li>
          <a href={Resume} target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faReadme} color="#4d4d4e" className="anchor-icon" alt="resume"/>
          </a>
        </li>
      </ul>
    </div>
)

export default Sidebar