import './main.css';
import egg from '../assets/images/desktop/image-transform.jpg';
import cup from '../assets/images/desktop/image-stand-out.jpg';
import apples from '../assets/images/desktop/image-graphic-design.jpg';
import orange from '../assets/images/desktop/image-photography.jpg';

const Main = () => {
  return (
    <div className="main-container">
        <div className="main-cont words">
            <h1>Transform your brand</h1>
            <p className="wordP">We are a full-service creative agency specializing in 
            helping brands grow fast. Engage your clients through compelling 
            visuals that do most of the marketing for you</p>
            <div className="underline">
            <h2>Learn more</h2>
            <div className="under yel"></div>
            </div>
        </div>
        <img className="imgGrid" src={egg} />
        <img className="imgGrid" src={cup} />
        <div className="main-cont words">
        <h1>Stand out to the right audience</h1>
            <p className="wordP">Using a collaborative formula of designers, researchers, 
            photographers, videographers, and copywriters, we’ll build and 
            extend your brand in digital places.</p>
            <div className="underline">
            <h2>Learn more</h2>
            <div className="under pinky"></div>
            </div>
        </div>
        <div className="main-cont">
        <img className="imgGrid" src={apples} />
        <div className="ab words graph">
        <h1>Graphic Design</h1>
            <p>Great design makes you memorable. We deliver artwork that underscores 
            your brand message and captures potential clients’ attention</p>
        </div>
        </div>
        <div className="main-cont">
        <img className="imgGrid" src={orange} />
        <div className="ab words phot">
        <h1>Photography</h1>
            <p>Increase your credibility by getting the most stunning, high-quality 
            photos that improve your business image</p>
        </div>
        </div>
    </div>
  )
}

export default Main