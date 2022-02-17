import Header from '../components/Header';
import Items from '../components/Items';
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
        <Items />
    </div>
  )
}

export default Home