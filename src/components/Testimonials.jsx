import React from 'react';

const testimonials = [
	{
		name: 'John Doe',
		title: 'CEO, Example Company',
		quote: 'This product has truly transformed our business. Highly recommend to everyone!',
		image: './testimonials_img1.jpg'
	},
	{
		name: 'Jane Smith',
		title: 'CTO, Another Company',
		quote: 'Fantastic experience! The team was professional and the results were outstanding.',
		image: './testimonials_img2.jpg'
	},
	{
		name: 'Alice Johnson',
		title: 'Marketing Head, Some Company',
		quote: 'A game changer in our industry. The support and service were top notch.',
		image: './testimonials_img3.jpg'
	},
	{
		name: 'Alice Johnson',
		title: 'Marketing Head, Some Company',
		quote: 'A game changer in our industry. The support and service were top notch.',
		image: './testimonials_img3.jpg'
	}
];

const Testimonial = () => {
	return (
		<div className="bg-[#f0ebdf] py-12">
			<div className="container mx-auto px-4  overflow-x-hidden">
				<h2 className="text-3xl font-bold text-center mb-8">What our customers say about us</h2>
				<div className="grid grid-cols-2 gap-4 pl-48">
					{testimonials.map((testimonial, index) => (
						<div key={index} className="w-full md:w-1/3 px-4 mb-8 ">
							<div className="bg-white p-6 rounded-lg shadow-lg w-[400px]">
								<div className="flex items-center mb-4">
									<img
										className="w-16 h-16 rounded-full mr-4"
										src={testimonial.image}
										alt={testimonial.name}
									/>
									<div>
										<h3 className="text-xl font-bold">{testimonial.name}</h3>
										<p className="text-gray-600">{testimonial.title}</p>
									</div>
								</div>
								<p className="text-gray-700">"{testimonial.quote}"</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Testimonial;