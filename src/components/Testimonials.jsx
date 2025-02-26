import React, { useState, useEffect } from 'react';
import { FaQuoteLeft, FaStar } from 'react-icons/fa';

const testimonials = [
  {
    name: 'John Doe',
    title: 'CEO, Example Company',
    quote: 'This product has truly transformed our business. Highly recommend to everyone!',
    image: './testimonials_img1.jpg',
    rating: 5
  },
  {
    name: 'Jane Smith',
    title: 'CTO, Another Company',
    quote: 'Fantastic experience! The team was professional and the results were outstanding.',
    image: './testimonials_img2.jpg',
    rating: 5
  },
  {
    name: 'Alice Johnson',
    title: 'Marketing Head, Some Company',
    quote: 'A game changer in our industry. The support and service were top notch.',
    image: './testimonials_img3.jpg',
    rating: 4
  },
  {
    name: 'Bob Brown',
    title: 'COO, Yet Another Company',
    quote: 'Incredible service and amazing results. Would highly recommend to anyone!',
    image: './testimonials_img4.jpg',
    rating: 5
  },
  {
    name: 'Emma Wilson',
    title: 'Director of Operations, Tech Solutions',
    quote: 'The product exceeded all our expectations. The implementation was seamless and the results were immediate.',
    image: './testimonials_img5.jpg',
    rating: 5
  },
  {
    name: 'Michael Chen',
    title: 'Lead Developer, Innovative Apps',
    quote: 'As a developer, I appreciate the technical excellence and attention to detail. This solution saved us countless hours.',
    image: './testimonials_img6.jpg',
    rating: 4
  }
];

const Testimonial = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  // Get position relative to active index
  const getRelativePosition = (index) => {
    // Calculate the position relative to active index (consider wrapping)
    let position = index - activeIndex;
    
    // Normalize to handle wrapping (if position < -3, wrap to the right side)
    if (position < -Math.floor(testimonials.length / 2)) {
      position += testimonials.length;
    }
    
    // Normalize to handle wrapping (if position > 3, wrap to the left side)
    if (position > Math.floor(testimonials.length / 2)) {
      position -= testimonials.length;
    }
    
    return position;
  };

  // Get card class and style based on position
  const getCardProps = (index) => {
    const position = getRelativePosition(index);
    
    // Base styles for all cards
    let cardClass = "testimonial-card";
    let transform = "translateX(-50%)";
    let zIndex = 10;
    let scale = 1;
    let opacity = 1;
    let leftOffset = "0px";
    
    // Position-specific adjustments
    if (position === 0) {
      // Active card (center)
      cardClass += " card-active";
      zIndex = 30;
    } else if (position === 1) {
      // First card to the right
      cardClass += " card-adjacent";
      leftOffset = "250px";
      scale = 0.85;
      opacity = 0.7;
      zIndex = 20;
    } else if (position === -1) {
      // First card to the left
      cardClass += " card-adjacent";
      leftOffset = "-250px";
      scale = 0.85;
      opacity = 0.7;
      zIndex = 20;
    } else if (position === 2) {
      // Second card to the right
      cardClass += " card-distant";
      leftOffset = "400px";
      scale = 0.7;
      opacity = 0.4;
      zIndex = 10;
    } else if (position === -2) {
      // Second card to the left
      cardClass += " card-distant";
      leftOffset = "-400px";
      scale = 0.7;
      opacity = 0.4;
      zIndex = 10;
    } else {
      // Other cards (more distant)
      cardClass += " card-hidden";
      leftOffset = position > 0 ? "500px" : "-500px";
      scale = 0.6;
      opacity = 0;
      zIndex = 5;
    }

    transform = `translateX(calc(-50% + ${leftOffset})) scale(${scale})`;
    
    return {
      className: cardClass,
      style: {
        transform,
        opacity,
        zIndex
      }
    };
  };

  return (
    <section className="bg-gradient-to-br from-[#f3eee5] via-[#e2dac9] to-[#f0ebdf] py-20 px-6 overflow-hidden">
      <div className="container mx-auto text-center">
        <div className="mb-12">
          <h2 className="text-4xl font-bold mb-4 text-[#251c1a]">What Our Customers Say About Us</h2>
          <div className="h-1 w-24 bg-[#b19f84] mx-auto mb-5"></div>
          <p className="text-[#251c1a]/70 max-w-2xl mx-auto">
            We value our customers and their satisfaction is our top priority. Here's what some of them have to say about our services.
          </p>
        </div>

        <div className="relative h-[400px] mx-auto max-w-6xl">
          {testimonials.map((testimonial, index) => {
            const cardProps = getCardProps(index);
            
            return (
              <div
                key={index}
                className={cardProps.className}
                style={{
                  ...cardProps.style,
                  transition: 'all 0.5s cubic-bezier(0.23, 1, 0.32, 1)'
                }}
              >
                <div className="flex justify-center mb-6">
                  <div className="relative">
                    <img
                      className="w-20 h-20 rounded-full object-cover border-4 border-[#b19f84]"
                      src={testimonial.image}
                      alt={testimonial.name}
                    />
                    <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-[#b19f84] rounded-full p-1">
                      <FaQuoteLeft className="text-sm text-white" />
                    </div>
                  </div>
                </div>
                
                <p className="text-lg italic mb-6">"{testimonial.quote}"</p>
                
                <div className="flex justify-center space-x-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <FaStar 
                      key={i} 
                      className={`${i < testimonial.rating ? 'text-[#b19f84]' : 'text-[#251c1a]/20'} ${cardProps.className.includes('card-active') ? 'text-opacity-100' : 'text-opacity-80'}`}
                    />
                  ))}
                </div>
                
                <div className="mt-auto">
                  <h3 className="text-xl font-bold">{testimonial.name}</h3>
                  <p className={`${cardProps.className.includes('card-active') ? 'text-[#e2dac9]' : 'text-[#251c1a]/70'}`}>
                    {testimonial.title}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
        
        <div className="flex justify-center mt-8 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                index === activeIndex ? 'bg-[#251c1a]' : 'bg-[#251c1a]/30'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>

      <style jsx>{`
        .testimonial-card {
          position: absolute;
          width: 350px;
          height: 380px;
          padding: 1.5rem;
          border-radius: 12px;
          display: flex;
          flex-direction: column;
          top: 0;
          left: 50%;
          box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
          transition: all 0.6s cubic-bezier(0.23, 1, 0.32, 1);
          background-color: white;
          color: #251c1a;
        }
        
        .card-active {
          background-color: #251c1a;
          color: white;
          box-shadow: 0px 8px 30px rgba(0, 0, 0, 0.2);
          border: 3px solid #b19f84;
        }
        
        /* Add smooth sliding animation */
        @keyframes slideRight {
          from { transform: translateX(-100%); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
        
        @keyframes slideLeft {
          from { transform: translateX(100%); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
      `}</style>
    </section>
  );
};

export default Testimonial;