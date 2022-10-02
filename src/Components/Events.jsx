import React from 'react';
import { Fade } from 'react-awesome-reveal';
import { BsFillCalendarWeekFill } from 'react-icons/bs';
import { FaAngleRight } from 'react-icons/fa';
import { GrMapLocation } from 'react-icons/gr';
import { MdOutlineWatchLater } from 'react-icons/md';
import '../styles/Events.css';
const Events = () => {
	return (
		<section className='events'>
			<h1 className='event-heading'>Current and Upcoming events</h1>
			<div className='all_events'>
				<Fade direction='down' delay={500}>
					<div className='single_event first-event'>
						<img
							className='event_image'
							src={require('../images/bg_3.jpg')}
							alt=''
						/>
						<div className='event-texts'>
							<h3>Marathon Event</h3>
							<p className='place'>
								<GrMapLocation className='eventicon mapicon' />{' '}
								<span>Delhi</span>
							</p>
							<span className='time'>
								<MdOutlineWatchLater className='eventicon' />{' '}
								<span>22:25:00 - 23:25:00</span>
							</span>
							<span className='date'>
								<BsFillCalendarWeekFill className='eventicon' />{' '}
								<span>2020-07-09</span>
							</span>
							<p className='description'>
								Lorem Ipsum generator a baeeLorem Ipsum generator a baee Lorem
								Ipsum generator a baee Lorem Ipsum generator a baee Lorem Ipsum
								generator a baee
							</p>
							<a href='#readmore' className='read-more-link'>
								Read More <FaAngleRight className='eventicon' />
							</a>
						</div>
					</div>
				</Fade>

				<Fade direction='down' delay={500}>
					<div className='single_event second-event'>
						<img
							className='event_image'
							src={require('../images/Image(17).jpeg')}
							alt=''
						/>
						<div className='event-texts'>
							<h3>event-til</h3>
							<p className='place'>
								<GrMapLocation className='eventicon' /> <span>india</span>
							</p>
							<span className='time'>
								<MdOutlineWatchLater className='eventicon' />{' '}
								<span>02:13:00 - 02:43:00</span>
							</span>
							<span className='date'>
								<BsFillCalendarWeekFill className='eventicon' />{' '}
								<span>2021-06-30</span>
							</span>
							<p className='description'>
								event-descevent-descevent-descevent-descevent-descevent-descevent-descevent-descevent-descevent-descevent-descevent-descevent-descevent-descevent-descevent-desc
							</p>
							<a href='#readmore' className='read-more-link'>
								Read More <FaAngleRight className='eventicon' />
							</a>
						</div>
					</div>
				</Fade>

				<Fade direction='down' delay={500}>
					<div className='single_event'>
						<img
							className='event_image'
							src={require('../images/LIVE SESSION DOCTOR.jpg')}
							alt=''
						/>
						<div className='event-texts'>
							<h3>"Know your heart better" By Dr. Rahul Katariya</h3>
							<p className='place'>
								<GrMapLocation className='eventicon' /> <span>India</span>
							</p>
							<span className='time'>
								<MdOutlineWatchLater className='eventicon' />{' '}
								<span>16:00:00 - 17:00:00 </span>
							</span>
							<span className='date'>
								<BsFillCalendarWeekFill className='eventicon' />{' '}
								<span>2021-12-13</span>
							</span>
							<p className='description'>
								"Know your heart better" Catch Dr. Rahul Katariya speak live on
								the topic cardiac pain on SIMMI foundation's official instagram
								handle. Link : https://instagram.com/simmifoundation/
								#simmifounda
							</p>
							<a href='#readmore' className='read-more-link'>
								Read More <FaAngleRight className='eventicon' />
							</a>
						</div>
					</div>
				</Fade>

				<Fade direction='down' delay={500}>
					<div className='single_event'>
						<img
							className='event_image'
							src={require('../images/wp1.jpeg')}
							alt=''
						/>
						<div className='event-texts'>
							<h3>Coronavirus and the country</h3>
							<p className='place'>
								<GrMapLocation className='eventicon' /> <span>Instagram</span>
							</p>
							<span className='time'>
								<MdOutlineWatchLater className='eventicon' />{' '}
								<span>15:00:00 - 15:30:00</span>
							</span>
							<span className='date'>
								<BsFillCalendarWeekFill className='eventicon' />{' '}
								<span>2022-01-17</span>
							</span>
							<p className='description'>
								The SIMMI FOUNDATION introduces Dr. Arnab Mandal! Dr. Mandal is
								an MBBS gold-medallist from RG Kar Medical College and is
								currently working as a house physician at the department of
								pediatrics in RG
							</p>
							<a href='#readmore' className='read-more-link'>
								Read More <FaAngleRight className='eventicon' />
							</a>
						</div>
					</div>
				</Fade>

				<Fade direction='down' delay={500}>
					<div className='single_event'>
						<img
							className='event_image'
							src={require('../images/wp2.jpeg')}
							alt=''
						/>
						<div className='event-texts'>
							<h3>Development and empowerment</h3>
							<p className='place'>
								<GrMapLocation className='eventicon' /> <span>Instagram</span>
							</p>
							<span className='time'>
								<MdOutlineWatchLater className='eventicon' />{' '}
								<span>16:00:00 - 16:30:00 </span>
							</span>
							<span className='date'>
								<BsFillCalendarWeekFill className='eventicon' />{' '}
								<span>2022-01-18</span>
							</span>
							<p className='description'>
								Ms. Poonam Shroti addresses the unaddressed topic of disability
								and women empowerment, and the true face of rural development in
								the country
							</p>
							<a href='#readmore' className='read-more-link'>
								Read More <FaAngleRight className='eventicon' />
							</a>
						</div>
					</div>
				</Fade>

				<Fade direction='down' delay={500}>
					<div className='single_event'>
						<img
							className='event_image'
							src={require('../images/wp3.jpeg')}
							alt=''
						/>
						<div className='event-texts'>
							<h3>Wellness and health, a vital concept.</h3>
							<p className='place'>
								<GrMapLocation className='eventicon' /> <span>Google Meet</span>
							</p>
							<span className='time'>
								<MdOutlineWatchLater className='eventicon' />{' '}
								<span>18:00:00 - 18:30:00</span>
							</span>
							<span className='date'>
								<BsFillCalendarWeekFill className='eventicon' />{' '}
								<span>2022-01-19</span>
							</span>
							<p className='description'>
								Ms. Lade talks about the issues of liver disease and how
								Ayurveda can help in solving the modern problems of today
							</p>
							<a href='#readmore' className='read-more-link'>
								Read More <FaAngleRight className='eventicon' />
							</a>
						</div>
					</div>
				</Fade>

				<Fade direction='down' delay={500}>
					<div className='single_event'>
						<img
							className='event_image'
							src={require('../images/wp4.jpeg')}
							alt=''
						/>
						<div className='event-texts'>
							<h3>Mental Health and Motivation</h3>
							<p className='place'>
								<GrMapLocation className='eventicon' /> <span>Instagram</span>
							</p>
							<span className='time'>
								<MdOutlineWatchLater className='eventicon' />{' '}
								<span>15:00:00 - 15:30:00</span>
							</span>
							<span className='date'>
								<BsFillCalendarWeekFill className='eventicon' />{' '}
								<span>2022-01-21</span>
							</span>
							<p className='description'>
								Ms. Papiya talks about mental health and the stigma around it,
								and how to overcome difficulties in talking about it and
								treating it.
							</p>
							<a href='#readmore' className='read-more-link'>
								Read More <FaAngleRight className='eventicon' />
							</a>
						</div>
					</div>
				</Fade>

				<Fade direction='down' delay={500}>
					<div className='single_event'>
						<img
							className='event_image'
							src={require('../images/wp5.jpeg')}
							alt=''
						/>
						<div className='event-texts'>
							<h3>Rural Development</h3>
							<p className='place'>
								<GrMapLocation className='eventicon' /> <span>Instagram</span>
							</p>
							<span className='time'>
								<MdOutlineWatchLater className='eventicon' />{' '}
								<span>16:00:00 - 16:31:00</span>
							</span>
							<span className='date'>
								<BsFillCalendarWeekFill className='eventicon' />{' '}
								<span>2022-01-21</span>
							</span>
							<p className='description'>
								Mr. Dushyant talks about rural development, especially
								infrastructure and roadways
							</p>
							<a href='#readmore' className='read-more-link'>
								Read More <FaAngleRight className='eventicon' />
							</a>
						</div>
					</div>
				</Fade>

				<Fade direction='down' delay={500}>
					<div className='single_event'>
						<img
							className='event_image'
							src={require('../images/wp6.jpeg')}
							alt=''
						/>
						<div className='event-texts'>
							<h3>Understanding Archeology</h3>
							<p className='place'>
								<GrMapLocation /> <span>Google Meet</span>
							</p>
							<span className='time'>
								<MdOutlineWatchLater className='eventicon' />{' '}
								<span>12:00:00 - 12:30:00</span>
							</span>
							<span className='date'>
								<BsFillCalendarWeekFill className='eventicon' />{' '}
								<span>2022-01-22</span>
							</span>
							<p className='description'>
								we dive with Ms. Neha into the field of archeology, as she
								explains the basics of archeology and the inner workings of
								libraries
							</p>
							<a href='#readmore' className='read-more-link'>
								Read More <FaAngleRight className='eventicon' />
							</a>
						</div>
					</div>
				</Fade>

				<Fade direction='down' delay={500}>
					<div className='single_event'>
						<img
							className='event_image'
							src={require('../images/wp7.jpeg')}
							alt=''
						/>
						<div className='event-texts'>
							<h3>Understanding Entrepreneurship</h3>
							<p className='place'>
								<GrMapLocation className='eventicon' /> <span>Instagram</span>
							</p>
							<span className='time'>
								<MdOutlineWatchLater className='eventicon' />{' '}
								<span>18:00:00 - 18:30:00 </span>
							</span>
							<span className='date'>
								<BsFillCalendarWeekFill className='eventicon' />{' '}
								<span>2022-01-22</span>
							</span>
							<p className='description'>
								Mr. Amman Khurana talks about his journey as an entrepreneur and
								how he became the "ultimate life coach"
							</p>
							<a href='#readmore' className='read-more-link'>
								Read More <FaAngleRight className='eventicon' />
							</a>
						</div>
					</div>
				</Fade>
			</div>
		</section>
	);
};

export default Events;
