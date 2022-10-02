import React from 'react';
import { Fade } from 'react-awesome-reveal';
const Welcome = () => {
	return (
		<section className='welcome'>
			<Fade direction='top'>
				<div className='welcome-text'>
					<h1>
						Welcome to <span>SIMMI</span>
					</h1>
					<p>
						Smart India Multi Management Institute is a pan India NGO registered
						in Haryana, India; carrying out welfare projects on education,
						healthcare, livelihood and women empowerment. We believe that unless
						members of the civil society are involved proactively in the process
						of development, sustainable change will not happen. Based on this,
						Simmi Foundation sensitizes and engages the civil society, making it
						an active partner in all its welfare initiatives.
					</p>
				</div>
			</Fade>
            
			<Fade direction='right'>
				<div className='map-image'>
					<img className='map' src={require('../images/map-dark.png')} alt='' />
				</div>
			</Fade>
		</section>
	);
};

export default Welcome;
