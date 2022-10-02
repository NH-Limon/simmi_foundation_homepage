import React from 'react';
import { Fade } from 'react-awesome-reveal';
import { BsArrowRightShort } from 'react-icons/bs';
import '../styles/Help.css';
const Help = () => {
	return (
		<section className='help-section'>
			<Fade direction='up'>
				<h1>How can you help us</h1>
			</Fade>
			<div className='helping-items'>
				<Fade direction='left'>
					<div className='item'>
						<h3>Collaborate</h3>
						<p className='help-text'>
							Simmi Foundation serves in the collaboration with schools,
							colleges and other institutions.
						</p>
						<p className='more'>
							Collaborate with us{' '}
							<span className='icon'>
								<BsArrowRightShort />
							</span>
						</p>
					</div>
				</Fade>

				<Fade direction='up'>
					<div className='item'>
						<h3>Donate Money</h3>
						<p className='help-text'>
							Your donation will further our mission of ensuring a happy and
							healthy life of those in need.
						</p>
						<p className='more'>
							Collaborate with us{' '}
							<span className='icon'>
								<BsArrowRightShort />
							</span>
						</p>
					</div>
				</Fade>

				<Fade direction='right'>
					<div className='item'>
						<h3>Be a Volunteer</h3>
						<p className='help-text'>
							Even the all-powerful Pointing has no control about the blind
							texts.
						</p>
						<p className='more'>
							Collaborate with us{' '}
							<span className='icon'>
								<BsArrowRightShort />
							</span>
						</p>
					</div>
				</Fade>
			</div>
		</section>
	);
};

export default Help;
