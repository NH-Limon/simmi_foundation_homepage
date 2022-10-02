import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import '../styles/Partners.css';

// import required modules
import { Pagination } from 'swiper';

export default function Partners() {
	return (
		<section className='partners'>
			<h1>Our Partners</h1>
			<Swiper
				slidesPerView={3}
				spaceBetween={30}
				pagination={{
					clickable: true,
				}}
				modules={[Pagination]}
				className='mySwiper'
			>
				<SwiperSlide className='slide'>
					<img
						className='partner_image'
						src={require('../images/sri_venkateswara_logo.jpeg')}
						alt=''
					/>
					<p className='name'>Sree Venkateshwara College, DU</p>
				</SwiperSlide>

				<SwiperSlide className='slide'>
					<img
						className='partner_image'
						src={require('../images/tiss_logo.png')}
						alt=''
					/>
					<p className='name'>TISS, Hyderabad</p>
				</SwiperSlide>

				<SwiperSlide className='slide'>
					<img
						className='partner_image'
						src={require('../images/iitbhilai_logo.png')}
						alt=''
					/>
					<p className='name'>IIT Bhilai</p>
				</SwiperSlide>

				<SwiperSlide className='slide'>
					<img
						className='partner_image'
						src={require('../images/gargi_logo.jpeg')}
						alt=''
					/>
					<p className='name'>Gargi College, DU</p>
				</SwiperSlide>

				<SwiperSlide className='slide'>
					<img
						className='partner_image'
						src={require('../images/dyalsingh_logo.jpeg')}
						alt=''
					/>
					<p className='name'>Dyal Singh College, DU</p>
				</SwiperSlide>

				<SwiperSlide className='slide'>
					<img
						className='partner_image'
						src={require('../images/sgtb_logo.png')}
						alt=''
					/>
					<p className='name'>Shree Guru Teg Bahadur Khalsa College, DU</p>
				</SwiperSlide>

				<SwiperSlide className='slide'>
					<img
						className='partner_image'
						src={require('../images/mca_logo.png')}
						alt=''
					/>
					<p className='name'>Mount Carmel College, Bangalore</p>
				</SwiperSlide>

				<SwiperSlide className='slide'>
					<img
						className='partner_image'
						src={require('../images/simsree_logo.png')}
						alt=''
					/>
					<p className='name'>SIMSREE, Mumbai</p>
				</SwiperSlide>

				<SwiperSlide className='slide'>
					<img
						className='partner_image'
						src={require('../images/amity_logo.png')}
						alt=''
					/>
					<p className='name'>Amity University</p>
				</SwiperSlide>

				<SwiperSlide className='slide'>
					<img
						className='partner_image'
						src={require('../images/igu_logo.jpeg')}
						alt=''
					/>
					<p className='name'>IGU Meerpur University, Haryana</p>
				</SwiperSlide>

				<SwiperSlide className='slide'>
					<img
						className='partner_image'
						src={require('../images/lpu_logo.png')}
						alt=''
					/>
					<p className='name'>LPU, Punjab</p>
				</SwiperSlide>

				<SwiperSlide className='slide'>
					<img
						className='partner_image'
						src={require('../images/mirandahouse_logo.png')}
						alt=''
					/>
					<p className='name'>Miranda House, DU</p>
				</SwiperSlide>

				<SwiperSlide className='slide'>
					<img
						className='partner_image'
						src={require('../images/upes_logo.png')}
						alt=''
					/>
					<p className='name'>UPES, Dehradun</p>
				</SwiperSlide>
			</Swiper>
		</section>
	);
}
