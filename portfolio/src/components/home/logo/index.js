import './index.scss'
import me from '../../../assets/images/me.png'

const Logo = () => {
    return (
        <div className="logo-container">
            <img className="solid-logo" src={me} alt="JavaScript,  Developer"/>
        </div>
    )
}

export default Logo