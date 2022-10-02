import React from 'react';
import Marquee from 'react-fast-marquee';
import '../styles/Marquee.css'
const MarqueeComponent = () => {
	return (
		<Marquee speed={120} className='marquee' gradientWidth={10}>
			Smart India Multi Management Institute!   स्मार्ट इंडिया बहुद्देश्यीय
			प्रबन्धन संस्थान!   Registration number : 085953/2020   Niti Aayog (Govt.
			Of India ) Unique Id : HR/2020/0258148
		</Marquee>
	);
};

export default MarqueeComponent;
