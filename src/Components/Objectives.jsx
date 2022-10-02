import React from 'react';
import { Fade } from 'react-awesome-reveal';
import { BsArrowRightShort } from 'react-icons/bs';
import '../styles/Objectives.css';
const Objectives = () => {
	return (
		<section className='objectives'>
			<h1>Objectives</h1>
			<div className='all-objectives'>
				<Fade direction='left'>
					<div className='objective'>
						<img
							className='obj-img'
							src={require('../images/education.jpg')}
							alt=''
						/>
						<div className='objective-text'>
							<h2>Education</h2>
							<p className='obj-text'>
								We provide free academic education, scholarship, training and
								other incentives to the children.
							</p>
							<p className='read-more-text'>
								Read More
								<span>
									<BsArrowRightShort className='icon' />
								</span>
							</p>
						</div>
					</div>
				</Fade>

				<Fade direction='right'>
					<div className='objective'>
						<img
							className='obj-img'
							src={require('../images/livelihood.jpg')}
							alt=''
						/>
						<div className='objective-text'>
							<h2>Livelihood</h2>
							<p className='obj-text'>
								We implement various schemes to provide livelihood and uplift
								the poor in society.
							</p>
							<p className='read-more-text'>
								Read More
								<span>
									<BsArrowRightShort className='icon' />
								</span>
							</p>
						</div>
					</div>
				</Fade>

				<Fade direction='down'>
					<div className='objective'>
						<img
							className='obj-img'
							src={require('../images/healthcare.jpg')}
							alt=''
						/>
						<div className='objective-text healthcare'>
							<h2>Healthcare</h2>
							<p className='obj-text'>
								We are increasing awareness on Sanitization and providing people
								with access to better nutrition, clean water and toilets.
							</p>
							<p className='read-more-text'>
								Read More
								<span>
									<BsArrowRightShort className='icon' />
								</span>
							</p>
						</div>
					</div>
				</Fade>

				<Fade direction='right'>
					<div className='objective'>
						<img
							className='obj-img'
							src={require('../images/women empowerment.jpg')}
							alt=''
						/>
						<div className='objective-text'>
							<h2>Women and Youth Empowerment</h2>
							<p className='obj-text'>
								We focus on providing equal opportunities for women in the work
								field.
							</p>
							<p className='read-more-text'>
								Read More
								<span>
									<BsArrowRightShort className='icon' />
								</span>
							</p>
						</div>
					</div>
				</Fade>
			</div>
		</section>
	);
};

export default Objectives;
