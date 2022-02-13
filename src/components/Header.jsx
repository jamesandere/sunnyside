import '../components/header.css';
import headerImage from '../assets/images/desktop/image-header.jpg';

const Header = () => {
  return (
    <div className="header-container">
        <div className="cont">
        <h1>We Are Creatives</h1>
        <img src={headerImage} />
        </div>
    </div>
  )
}

export default Header