import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap';

function UncontrolledExample() {
	return (
		<div className='carouselContainer'>
			<div
				id='carouselExampleIndicators'
				class='carousel slide'
				data-bs-ride='carousel'
			>
				<div class='carousel-indicators'>
					<button
						type='button'
						data-bs-target='#carouselExampleIndicators'
						data-bs-slide-to='0'
						class='active'
						aria-current='true'
						aria-label='Slide 1'
					></button>
					<button
						type='button'
						data-bs-target='#carouselExampleIndicators'
						data-bs-slide-to='1'
						aria-label='Slide 2'
					></button>
					<button
						type='button'
						data-bs-target='#carouselExampleIndicators'
						data-bs-slide-to='2'
						aria-label='Slide 3'
					></button>
					<button
						type='button'
						data-bs-target='#carouselExampleIndicators'
						data-bs-slide-to='3'
						aria-label='Slide 4'
					></button>
				</div>
				<div class='carousel-inner'>
					<div class='carousel-item active'>
						<img src={require('../images/1.jpg')} class='d-block' alt='...' />
					</div>
					<div class='carousel-item'>
						<img
							src={require('../images/img6e825bdb65.jpeg')}
							class='d-block'
							alt='...'
						/>
					</div>
					<div class='carousel-item'>
						<img src={require('../images/2.jpg')} class='d-block' alt='...' />
					</div>
					<div class='carousel-item'>
						<img src={require('../images/4.jpg')} class='d-block' alt='...' />
					</div>
				</div>
				<button
					class='carousel-control-prev myclass'
					type='button'
					data-bs-target='#carouselExampleIndicators'
					data-bs-slide='prev'
				>
					<span
						class='prev carousel-control-prev-icon'
						aria-hidden='true'
					></span>
					<span class='visually-hidden'>Previous</span>
				</button>
				<button
					class='carousel-control-next'
					type='button'
					data-bs-target='#carouselExampleIndicators'
					data-bs-slide='next'
				>
					<span
						class='next carousel-control-next-icon'
						aria-hidden='true'
					></span>
					<span class='visually-hidden'>Next</span>
				</button>
			</div>
		</div>
	);
}

export default UncontrolledExample;
