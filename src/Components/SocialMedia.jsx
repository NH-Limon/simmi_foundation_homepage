import React from 'react';
import '../styles/SocialMedia.css';
const SocialMedia = () => {
	return (
		<section className='social-media'>
			<h1>Social Media Handle</h1>
			<div className='socialPart'>
				<div>
					<img src={require('../images/fb.png')} alt='' />
				</div>

				<div>
					<img src={require('../images/tweets.png')} alt='' />
				</div>
			</div>
		</section>
	);
};

export default SocialMedia;
