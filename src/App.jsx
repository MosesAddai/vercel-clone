import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Companies from "./components/Companies";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";

function App() {
	return (
		<div className="bg-black text-white">
			<Navbar />
			<Hero />
			<Features />
			<Companies />
			<Testimonials />
			<Footer />
		</div>
	);
}

export default App;
