import React, { useState, useEffect, useRef } from "react";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const testimonialRef = useRef(null);
  const autoPlayRef = useRef(null);

  // Testimonials data
  const testimonials = [
    {
      quote: "Velocity Growth Solutions transformed our social media strategy completely. Our engagement rate increased by 287% in just three months, and we've seen a direct correlation with our sales growth.",
      name: "Jennifer Adams",
      position: "Marketing Director",
      company: "TechNova",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Mzk2MDh8MHwxfHNlYXJjaHwxfHxIZWFkc2hvdCUyQm9mJTJCSmVubmlmZXIlMkJBZGFtc3xlbnwwfHx8fDE3NDc4ODc0MDR8MA&ixlib=rb-4.1.0&q=80&w=1080",
      stats: {
        label: "Engagement Increase",
        value: "287%"
      }
    },
    {
      quote: "The team at Velocity Growth doesn't just create content – they craft stories that genuinely resonate with our audience. They took the time to understand our values and transformed them into a compelling digital narrative.",
      name: "Michael Okonkwo",
      position: "CEO",
      company: "EduLearn Academy",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Mzk2MDh8MHwxfHNlYXJjaHwxfHxIZWFkc2hvdCUyQm9mJTJCTWljaGFlbCUyQk9rb25rd298ZW58MHx8fHwxNzQ3ODg3NDA3fDA&ixlib=rb-4.1.0&q=80&w=1080",
      stats: {
        label: "Audience Growth",
        value: "2.4M+"
      }
    },
    {
      quote: "Working with Velocity Growth Solutions was the best decision we made for our brand. Their strategic approach to content has not only expanded our reach but created a passionate community around our products.",
      name: "Sarah Chen",
      position: "Brand Manager",
      company: "FitLife Pro",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Mzk2MDh8MHwxfHNlYXJjaHwxfHxIZWFkc2hvdCUyQm9mJTJCU2FyYWglMkJDaGVufGVufDB8fHx8MTc0Nzg4NzQwOXww&ixlib=rb-4.1.0&q=80&w=1080",
      stats: {
        label: "ROI Increase",
        value: "215%"
      }
    },
    {
      quote: "What impressed me most was their ability to translate complex ideas into engaging content. Our LinkedIn presence has been completely revitalized, generating quality leads that actually convert.",
      name: "Robert Parker",
      position: "Head of Sales",
      company: "FinanceWise",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Mzk2MDh8MHwxfHNlYXJjaHwxfHxIZWFkc2hvdCUyQm9mJTJCUm9iZXJ0JTJCUGFya2VyfGVufDB8fHx8MTc0Nzg4NzQxMXww&ixlib=rb-4.1.0&q=80&w=1080",
      stats: {
        label: "Lead Generation",
        value: "3.5x"
      }
    }
  ];

  // AutoPlay functionality
  useEffect(() => {
    autoPlayRef.current = nextSlide;
  });

  useEffect(() => {
    const play = () => {
      autoPlayRef.current();
    };

    const interval = setInterval(play, 5000);
    return () => clearInterval(interval);
  }, []);

  // Animation on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (!testimonialRef.current) return;
      
      const top = testimonialRef.current.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      
      if (top < windowHeight - 100) {
        setIsVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    // Check visibility on initial load
    handleScroll();
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <section 
      ref={testimonialRef} 
      className="py-20 bg-white"
      id="testimonials-section"
    >
      <div className="container mx-auto px-4">
        <div className={`max-w-7xl mx-auto transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Don't just take our word for it – here's what our clients have to say about their experiences working with Velocity Growth Solutions.
            </p>
          </div>

          <div className="relative">
            {/* Main testimonial card */}
            <div className="bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl shadow-xl overflow-hidden">
              <div className="grid md:grid-cols-2">
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <div className="mb-6">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="48" height="48"><rect width="256" height="256" fill="none"/><path d="M108,144H40a8,8,0,0,1-8-8V72a8,8,0,0,1,8-8h60a8,8,0,0,1,8,8v88a40,40,0,0,1-40,40" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><path d="M224,144H156a8,8,0,0,1-8-8V72a8,8,0,0,1,8-8h60a8,8,0,0,1,8,8v88a40,40,0,0,1-40,40" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/></svg>
                  </div>
                  <blockquote>
                    <p className="text-xl md:text-2xl font-medium text-white mb-8 leading-relaxed">
                      "{testimonials[currentIndex].quote}"
                    </p>
                    <div className="flex items-center">
                      <div className="h-14 w-14 rounded-full overflow-hidden border-2 border-white mr-4">
                        <img 
                          src={testimonials[currentIndex].image} 
                          alt={testimonials[currentIndex].name} 
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <div>
                        <p className="text-white font-bold text-lg">{testimonials[currentIndex].name}</p>
                        <p className="text-blue-100">
                          {testimonials[currentIndex].position}, <span className="font-semibold">{testimonials[currentIndex].company}</span>
                        </p>
                      </div>
                    </div>
                  </blockquote>
                </div>
                
                <div className="bg-white p-8 md:p-12 flex items-center justify-center">
                  <div className="text-center">
                    <div className="mb-4">
                      <span className="text-5xl md:text-6xl font-bold text-blue-600">
                        {testimonials[currentIndex].stats.value}
                      </span>
                    </div>
                    <p className="text-lg font-medium text-gray-600 mb-6">
                      {testimonials[currentIndex].stats.label}
                    </p>
                    <div className="max-w-md mx-auto">
                      <p className="text-gray-600">
                        We helped {testimonials[currentIndex].company} achieve remarkable results 
                        through our tailored digital marketing strategies.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation controls */}
            <div className="absolute inset-0 flex items-center justify-between pointer-events-none">
              <button 
                onClick={prevSlide}
                className="p-3 rounded-full bg-white shadow-lg text-blue-600 hover:text-blue-800 transition-colors -ml-6 pointer-events-auto focus:outline-none focus:ring-2 focus:ring-blue-500"
                aria-label="Previous testimonial"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="24" height="24"><rect width="256" height="256" fill="none"/><rect x="40" y="40" width="176" height="176" rx="8" transform="translate(256 0) rotate(90)" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><line x1="88" y1="128" x2="168" y2="128" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><polyline points="120 96 88 128 120 160" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/></svg>
              </button>
              
              <button 
                onClick={nextSlide}
                className="p-3 rounded-full bg-white shadow-lg text-blue-600 hover:text-blue-800 transition-colors -mr-6 pointer-events-auto focus:outline-none focus:ring-2 focus:ring-blue-500"
                aria-label="Next testimonial"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="24" height="24"><rect width="256" height="256" fill="none"/><rect x="40" y="40" width="176" height="176" rx="8" transform="translate(256) rotate(90)" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><line x1="88" y1="128" x2="168" y2="128" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><polyline points="136 96 168 128 136 160" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/></svg>
              </button>
            </div>
          </div>

          {/* Pagination dots */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all focus:outline-none ${
                  currentIndex === index ? "bg-blue-600 w-8" : "bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          {/* Case study CTA */}
          <div className="mt-16 text-center">
            <a 
              href="/case-studies" 
              className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md shadow transition-colors"
            >
              View Detailed Case Studies
              <span className="ml-2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="20" height="20"><rect width="256" height="256" fill="none"/><rect x="40" y="40" width="176" height="176" rx="8" transform="translate(0 256) rotate(-90)" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><polyline points="96 112 96 160 144 160" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><line x1="160" y1="96" x2="96" y2="160" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/></svg>
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;