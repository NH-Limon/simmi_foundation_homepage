import 'swiper/css/bundle';
import './App.css';
import Counter from './Components/Counter';
import data from './Components/data/data.json';
import Events from './Components/Events';
import Footer from './Components/Footer';
import Fundraisers from './Components/Fundraisers';
import Help from './Components/Help';
import UncontrolledExample from './Components/HomepageCarousel';
import MarqueeComponent from './Components/MarqueeComponent';
import Navbar from './Components/Navbar';
import Objectives from './Components/Objectives';
import Partners from './Components/Partners';
import SocialMedia from './Components/SocialMedia';
import Speaker from './Components/Speakers';
import Welcome from './Components/Welcome';
import './styles/Speakers.css';

function App() {
	return (
		<div className='App'>
			{/* <br/>
			<br/>
			<br/>
			<br/> */}
			<Navbar />
			<MarqueeComponent />
			<UncontrolledExample />
			<Welcome />
			<Objectives />
			<Help />
			<Events />
			<div className='counter'>
				{data.counts.map((count) => (
					<Counter key={count.id} data={count} />
				))}
			</div>
			<Fundraisers />
			<Speaker />
			<SocialMedia />
			<Partners />
			<Footer />
		</div>
	);
}

export default App;
