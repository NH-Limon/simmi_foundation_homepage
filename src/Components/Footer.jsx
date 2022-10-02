import React from 'react';
import { BiMap, BiPhoneCall } from 'react-icons/bi';
import { FaEnvelope } from 'react-icons/fa';
import '../styles/Footer.css';

const Footer = () => {
	return (
		<section className='footer'>
			<div className='footer-first'>
				<div className='about'>
					<h3>ABOUT US</h3>
					<div className='line'></div>
					<p>
						We envisions to develop a society based on legitimate rights,
						equity, justice, honesty, social sensitivity and a culture of
						service in which all are self-reliant.
					</p>
				</div>

				<div className='initiatives'>
					<h2>INITIATIVES</h2>
					<div className='line'></div>
					<p>Khel Sangathan</p>
					<p>Sukon Parikram</p>
					<p>Simmi Olympiads</p>
					<p>Kaalakar Manch</p>
				</div>

				<div className='more'>
					<p>Sanskritik Setu</p>
					<p>Sambhav Madad</p>
				</div>

				<div className='questions'>
					<p>HAVE QUESTIONS?</p>
					<div className='line'></div>
					<p>
						<BiMap />
						<span>
							{' '}
							479, Baspadamka, Tehsil Pataudi, Gurugram, Haryana - 122503, India
						</span>
					</p>
					<p>
						<BiPhoneCall />
						<span>(+91) 70152 - 95025</span>
					</p>
					<p>
						<FaEnvelope />
						<span>support@simmifoundation.org</span>
					</p>
				</div>
			</div>

			<div className='footer-second'>
				<div className='logos'>
					<img src={require('../images/logo.png')} alt='' />
					<img src={require('../images/NITI-Aayog-logo.png')} alt='' />
				</div>
				<div className='footer-text'>
					<p>Our Registration number : 085953/2020</p>
					<p>Niti Aayog (Govt. Of India ) Unique Id : HR/2020/0258148</p>
					<p>
						Copyright ©2022 All rights reserved | Simmi Foundation{' '}
						<span className='heart'>&#10084;</span>
					</p>
				</div>
			</div>
		</section>
	);
};

export default Footer;
