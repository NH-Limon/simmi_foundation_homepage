import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import '../styles/Speakers.css';

// import required modules
import { Pagination } from 'swiper';

export default function Speaker() {
	return (
		<section className='speakers'>
			<h1>Our Prominent Speakers</h1>
			<Swiper
				slidesPerView={3}
				spaceBetween={30}
				pagination={{
					clickable: true,
				}}
				modules={[Pagination]}
				className='mySwiper'
			>
				<div className='allSpeakers'>
					<SwiperSlide className='slide'>
						<img
							className='speaker_image'
							src={require('../images/sneha_agarwal.jpg')}
							alt=''
						/>
						<p className='name'>Sneha Vithalaniagarwa</p>
					</SwiperSlide>

					<SwiperSlide className='slide'>
						<img
							className='speaker_image'
							src={require('../images/major_nithi.jpg')}
							alt=''
						/>
						<p className='name'>Major Nithi Cj</p>
					</SwiperSlide>

					<SwiperSlide className='slide'>
						<img
							className='speaker_image'
							src={require('../images/megha_meelu.jpg')}
							alt=''
						/>
						<p className='name'>Megha Meelu</p>
					</SwiperSlide>

					<SwiperSlide className='slide'>
						<img
							className='speaker_image'
							src={require('../images/mohit_chillar.jpg')}
							alt=''
						/>
						<p className='name'>Mohit Chillar</p>
					</SwiperSlide>

					<SwiperSlide className='slide'>
						<img
							className='speaker_image'
							src={require('../images/amit_hooda.jpg')}
							alt=''
						/>
						<p className='name'>Amit Hooda</p>
					</SwiperSlide>

					<SwiperSlide className='slide'>
						<img
							className='speaker_image'
							src={require('../images/sneha_agarwal.jpg')}
							alt=''
						/>
						<p className='name'>Sneha Vithalaniagarwa</p>
					</SwiperSlide>

					<SwiperSlide className='slide'>
						<img
							className='speaker_image'
							src={require('../images/vikas_kandola.jpg')}
							alt=''
						/>
						<p className='name'>Vikash Kandola</p>
					</SwiperSlide>

					<SwiperSlide className='slide'>
						<img
							className='speaker_image'
							src={require('../images/naveen_kumar_goyat.jpg')}
							alt=''
						/>
						<p className='name'>Navin Kumar Guyat</p>
					</SwiperSlide>

					<SwiperSlide className='slide'>
						<img
							className='speaker_image'
							src={require('../images/rohan_naidu.jpg')}
							alt=''
						/>
						<p className='name'>K.Rohannaidu</p>
					</SwiperSlide>

					<SwiperSlide className='slide'>
						<img
							className='speaker_image'
							src={require('../images/abhimanyu.jpeg')}
							alt=''
						/>
						<p className='name'>Abhiyamanu Singh Raghav</p>
					</SwiperSlide>
				</div>
			</Swiper>
		</section>
	);
}
