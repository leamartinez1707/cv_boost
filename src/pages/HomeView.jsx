import Pricing from '../components/Pricing';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Stats from '../components/Stats';
import Testimonials from '../components/Testimonials';

function App() {
    return (
        <div className="min-h-screen bg-white">
            <Header />
            <Hero />
            <Stats />
            <Testimonials />
            <Pricing />
            <Footer />
        </div>
    );
}

export default App;