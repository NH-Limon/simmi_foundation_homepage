import React from 'react';
import { FaAngleRight } from 'react-icons/fa';
import '../styles/Fundraisers.css';
const Fundraisers = () => {
	return (
		<section className='fundraisers'>
			<h1>Fundraisers</h1>
			<p className='desc'>A little change makes all the difference.</p>

			<div className='funds'>
				<div className='single_fund'>
					<img
						className='fund_image'
						src={require('../images/Villagekid.jpg')}
						alt=''
					/>
					<div className='fund_text'>
						<h2>Test Fund Raiser Kavach</h2>
						<p className='fund_description'>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua. Nec
							sagittis aliquam malesuada bibendum arcu vitae elementum
							curabitur. Sit amet consectetur adipiscing elit duis tristique
						</p>
						<p className='range'>15000 raised of 30000</p>
						<div className='range-line1'>
							<div className='first'></div>
							<div className='second'></div>
						</div>
						<p>
							Read More <FaAngleRight />
						</p>
					</div>
				</div>

				<div className='single_fund'>
					<img
						className='fund_image'
						src={require('../images/fundRaiserKavach.jpeg')}
						alt=''
					/>
					<div className='fund_text'>
						<h2>Kavach Initiative</h2>
						<p className='fund_description'>
							Simmi Foundation has taken an initiative Kavach to donate shield
							masks to the workers who put their lives at risk daily. Let's make
							a change during this lockdown Let's make a change during this
							lockdown to help these workers who do not have the luxury to
						</p>
						<p className='range'>21000 raised of 150000</p>
						<div className='range-line2'>
							<div className='first'></div>
							<div className='second'></div>
						</div>
						<p>
							Read More <FaAngleRight />
						</p>
					</div>
				</div>

				<div className='single_fund'>
					<img
						className='fund_image'
						src={require('../images/wp8.jpeg')}
						alt=''
					/>
					<div className='fund_text third'>
						<h2>Donating Clothes</h2>
						<p className='fund_description'>
							SIMMI FOUNDATION Donated Clothes and blankets to almost 4500
							Underprivileged people. As we know how how important is clothes at
							this winter time, Hence SIMMI Foundation appeal you all to help us
							in this drive by donating the much you could have.
						</p>
						<p className='range'>10000 raised of 100000</p>
						<div className='range-line3'>
							<div className='first'></div>
							<div className='second'></div>
						</div>
						<p className='read_more_part'>
							Read More <FaAngleRight />
						</p>
					</div>
				</div>

				<div className='single_fund'>
					<img
						className='fund_image'
						src={require('../images/wp9.jpeg')}
						alt=''
					/>
					<div className='fund_text'>
						<h2>Education</h2>
						<p className='fund_description'>
							Smart India Multi Management Institute (SIMMI) Foundation working
							dedicatedly in providing education to underprivileged poor
							children free of cost. Meanwhile post covid situation our team
							working on giving Chaupal Classes and almost motivated almost
							4500+
						</p>
						<p className='range'>10000 raised of 500000</p>
						<div className='range-line4'>
							<div className='first'></div>
							<div className='second'></div>
						</div>
						<p>
							Read More <FaAngleRight />
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Fundraisers;
