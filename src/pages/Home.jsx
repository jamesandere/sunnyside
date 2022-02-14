import Header from '../components/Header';
import Main from '../components/Main';
import Navbar from '../components/Navbar';
import './home.css';

const Home = () => {
  return (
    <div className="home-container">
        <Navbar />
        <Header />
        <Main />
    </div>
  )
}

export default Home