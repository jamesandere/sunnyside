import Header from '../components/Header';
import Main from '../components/Main';
import Navbar from '../components/Navbar';
import Testimonials from '../components/Testimonials';
import './home.css';

const Home = () => {
  return (
    <div className="home-container">
        <Navbar />
        <Header />
        <Main />
        <Testimonials />
    </div>
  )
}

export default Home