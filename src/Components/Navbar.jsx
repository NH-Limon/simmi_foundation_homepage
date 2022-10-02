import React from 'react';
import '../styles/Navbar.css';
const Navbar = () => {
	return (
		<section className='navbar'>
			<div className='logo-part'>
                <img className='logo' src={require('../images/logo.png')} alt="Logo" />
                <span className='company-name'>SIMMI FOUNDATION</span>
            </div>

			<div className='menu-items'>
				<ul>
					<li>
						<a href='#home'>Home</a>
					</li>
					<li>
						<a href='#about'>About</a>
					</li>
					<li>
						<a href='#donate'>Donate</a>
					</li>
					<li>
						<a href='#blog'>Blog</a>
					</li>
					<li>
						<a href='#gallery'>Gallery</a>
					</li>
					<li>
						<a href='#volunteer'>Volunteer</a>
					</li>
					<li>
						<a href='#events'>Events</a>
					</li>
					<li>
						<a href='#career'>Career</a>
					</li>
					<li>
						<a href='#contact'>Contact</a>
					</li>
				</ul>
			</div>
		</section>
	);
};

export default Navbar;
