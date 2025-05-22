import React, { useState, useEffect, useRef } from "react";

const AboutUs = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  // Animation on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      
      const top = sectionRef.current.getBoundingClientRect().top;
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

  return (
    <section 
      ref={sectionRef}
      id="about-section" 
      className="py-20 bg-white"
    >
      <div className="container mx-auto px-4">
        <div className={`max-w-7xl mx-auto transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left column - Image */}
            <div className={`relative transition-all duration-1000 delay-300 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}>
              <div className="relative z-10">
                <img 
                  src="https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Mzk2MDh8MHwxfHNlYXJjaHwxfHxDcmVhdGl2ZSUyQnRlYW0lMkJjb2xsYWJvcmF0aW5nJTJCb24lMkJjb250ZW50JTJCc3RyYXRlZ3l8ZW58MHx8fHwxNzQ3ODg3ODU5fDA&ixlib=rb-4.1.0&q=80&w=1080" 
                  alt="Our creative team at work" 
                  className="rounded-xl shadow-2xl w-full"
                />
              </div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full -z-10">
                <div className="absolute inset-0 bg-blue-200 rounded-full opacity-20 blur-3xl"></div>
              </div>
              <div className="absolute -bottom-10 -right-10 bg-white p-4 rounded-lg shadow-xl max-w-xs">
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0 bg-blue-100 p-2 rounded-full text-blue-600">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="24" height="24"><rect width="256" height="256" fill="none"/><polyline points="200 168 128 96 96 128 32 64" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><polyline points="200 128 200 168 160 168" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><polyline points="224 208 32 208 32 48" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/></svg>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-900">Success Metric</p>
                    <p className="text-lg font-bold text-blue-600">500+ Brands Transformed</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right column - Text Content */}
            <div className={`transition-all duration-1000 delay-500 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}>
              <div className="inline-block px-4 py-2 bg-blue-100 text-blue-600 font-semibold rounded-full mb-4">
                Our Mission
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">We Are Digital Storytellers</h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                At Velocity Growth Solutions, we don't just create content – we craft compelling narratives that transform your online presence into a powerful brand asset. Our team of specialists works at the intersection of creativity and strategy to accelerate your brand's digital journey.
              </p>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                We believe that every brand has a unique story waiting to be told. Our mission is to help you discover that story and share it with the world in a way that resonates with your target audience, builds authentic connections, and drives measurable business results.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="20" height="20"><rect width="256" height="256" fill="none"/><line x1="88" y1="232" x2="168" y2="232" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><path d="M78.7,167A79.87,79.87,0,0,1,48,104.45C47.76,61.09,82.72,25,126.07,24a80,80,0,0,1,51.34,142.9A24.3,24.3,0,0,0,168,186v2a8,8,0,0,1-8,8H96a8,8,0,0,1-8-8v-2A24.11,24.11,0,0,0,78.7,167Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><path d="M140,70a36.39,36.39,0,0,1,24,30" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/></svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">Strategic Vision</h3>
                    <p className="text-gray-600">Data-driven approaches that align with your business objectives</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="20" height="20"><rect width="256" height="256" fill="none"/><path d="M84.27,171.73l-55.09-20.3a7.92,7.92,0,0,1,0-14.86l55.09-20.3,20.3-55.09a7.92,7.92,0,0,1,14.86,0l20.3,55.09,55.09,20.3a7.92,7.92,0,0,1,0,14.86l-55.09,20.3-20.3,55.09a7.92,7.92,0,0,1-14.86,0Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><line x1="176" y1="16" x2="176" y2="64" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><line x1="224" y1="72" x2="224" y2="104" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><line x1="152" y1="40" x2="200" y2="40" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><line x1="208" y1="88" x2="240" y2="88" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/></svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">Creative Excellence</h3>
                    <p className="text-gray-600">Captivating content that stands out in crowded feeds</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="20" height="20"><rect width="256" height="256" fill="none"/><circle cx="80" cy="172" r="28" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><circle cx="80" cy="60" r="28" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><circle cx="176" cy="172" r="28" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><circle cx="176" cy="60" r="28" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><path d="M32,224a60,60,0,0,1,96,0,60,60,0,0,1,96,0" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><path d="M32,112a60,60,0,0,1,96,0h0a60,60,0,0,1,96,0" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/></svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">Audience Connection</h3>
                    <p className="text-gray-600">Building meaningful relationships with your target market</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="20" height="20"><rect width="256" height="256" fill="none"/><line x1="48" y1="216" x2="48" y2="40" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><polyline points="48 56 176 56 176 104" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><polyline points="48 104 224 104 224 152 48 152" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><polyline points="144 152 144 200 48 200" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/></svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">Measurable Impact</h3>
                    <p className="text-gray-600">Transparent reporting that demonstrates real ROI</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 flex items-center">
                <a href="#contact-section" className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg shadow transition-colors">
                  Get to Know Us
                  <span className="ml-2">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="20" height="20"><rect width="256" height="256" fill="none"/><rect x="40" y="40" width="176" height="176" rx="8" transform="translate(0 256) rotate(-90)" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><polyline points="96 112 96 160 144 160" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><line x1="160" y1="96" x2="96" y2="160" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/></svg>
                  </span>
                </a>
                <a href="#services-section" className="inline-flex items-center px-6 py-3 text-blue-600 hover:text-blue-800 font-medium ml-4 transition-colors">
                  Explore Our Services
                  <span className="ml-2">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="20" height="20"><rect width="256" height="256" fill="none"/><path d="M216,112V56a8,8,0,0,0-8-8H48a8,8,0,0,0-8,8v56c0,96,88,120,88,120S216,208,216,112Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><polyline points="201.97 171.78 128 120 54.03 171.78" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/></svg>
                  </span>
                </a>
              </div>
            </div>
          </div>

          {/* Values Section */}
          <div className={`mt-24 transition-all duration-1000 delay-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}>
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Our Core Values</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                These principles guide everything we do and define our approach to transforming your digital presence.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
                <div className="h-14 w-14 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="28" height="28"><rect width="256" height="256" fill="none"/><path d="M128,224S24,168,24,102A54,54,0,0,1,78,48c22.59,0,41.94,12.31,50,32Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><path d="M128,80c6.84-16.71,21.81-27.67,40-31.08" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><path d="M208,57.09A54,54,0,0,1,231.67,96" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><path d="M223.3,136c-5.8,11.65-14.05,22.63-23.3,32.63" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><path d="M168,197.49A328.1,328.1,0,0,1,128,224" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/></svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Authenticity</h3>
                <p className="text-gray-600">
                  We believe in creating genuine connections through honest storytelling that reflects your brand's true identity.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
                <div className="h-14 w-14 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="28" height="28"><rect width="256" height="256" fill="none"/><line x1="128" y1="192" x2="128" y2="144" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><polyline points="96 112 128 144 160 112" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><line x1="88" y1="232" x2="168" y2="232" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><path d="M80,168a79.86,79.86,0,0,1-32-63.53C47.76,61.09,82.72,25,126.07,24a80,80,0,0,1,49.77,144.1A19.81,19.81,0,0,0,168,184h0a8,8,0,0,1-8,8H96a8,8,0,0,1-8-8v-.23A19.8,19.8,0,0,0,80,168Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/></svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Innovation</h3>
                <p className="text-gray-600">
                  We constantly push boundaries to keep your brand ahead of trends and positioned for future growth.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
                <div className="h-14 w-14 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="28" height="28"><rect width="256" height="256" fill="none"/><polyline points="224 208 32 208 32 48" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><polyline points="200 72 128 144 96 112 32 176" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><polyline points="200 112 200 72 160 72" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/></svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Results</h3>
                <p className="text-gray-600">
                  We're driven by measurable outcomes and committed to delivering tangible business impact through everything we do.
                </p>
              </div>
            </div>
          </div>
          
          {/* Timeline Section */}
          <div className={`mt-24 transition-all duration-1000 delay-900 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}>
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Our Journey</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                From a small team with big ideas to an industry-leading agency transforming brands worldwide.
              </p>
            </div>
            
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-blue-100"></div>
              
              {/* Timeline events */}
              <div className="relative z-10">
                <div className="flex flex-col md:flex-row items-center md:justify-between mb-16">
                  <div className="md:w-5/12 mb-8 md:mb-0 md:text-right md:pr-10">
                    <div className="bg-white p-6 rounded-xl shadow-md inline-block">
                      <span className="inline-block px-3 py-1 bg-blue-100 text-blue-600 font-semibold rounded-full mb-2">2017</span>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Our Beginning</h3>
                      <p className="text-gray-600">
                        Founded with a mission to revolutionize how brands connect with audiences online.
                      </p>
                    </div>
                  </div>
                  
                  <div className="h-8 w-8 bg-blue-600 rounded-full border-4 border-white shadow"></div>
                  
                  <div className="md:w-5/12 md:pl-10">
                    {/* Empty on right side for first item */}
                  </div>
                </div>
                
                <div className="flex flex-col md:flex-row items-center md:justify-between mb-16">
                  <div className="md:w-5/12 mb-8 md:mb-0">
                    {/* Empty on left side for second item */}
                  </div>
                  
                  <div className="h-8 w-8 bg-blue-600 rounded-full border-4 border-white shadow"></div>
                  
                  <div className="md:w-5/12 md:pl-10">
                    <div className="bg-white p-6 rounded-xl shadow-md inline-block">
                      <span className="inline-block px-3 py-1 bg-blue-100 text-blue-600 font-semibold rounded-full mb-2">2019</span>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Rapid Growth</h3>
                      <p className="text-gray-600">
                        Expanded to a team of 25 specialists and crossed the 100-client milestone.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-col md:flex-row items-center md:justify-between mb-16">
                  <div className="md:w-5/12 mb-8 md:mb-0 md:text-right md:pr-10">
                    <div className="bg-white p-6 rounded-xl shadow-md inline-block">
                      <span className="inline-block px-3 py-1 bg-blue-100 text-blue-600 font-semibold rounded-full mb-2">2021</span>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Industry Recognition</h3>
                      <p className="text-gray-600">
                        Awarded "Digital Marketing Agency of the Year" and opened our second office.
                      </p>
                    </div>
                  </div>
                  
                  <div className="h-8 w-8 bg-blue-600 rounded-full border-4 border-white shadow"></div>
                  
                  <div className="md:w-5/12 md:pl-10">
                    {/* Empty on right side for third item */}
                  </div>
                </div>
                
                <div className="flex flex-col md:flex-row items-center md:justify-between">
                  <div className="md:w-5/12 mb-8 md:mb-0">
                    {/* Empty on left side for fourth item */}
                  </div>
                  
                  <div className="h-8 w-8 bg-blue-600 rounded-full border-4 border-white shadow"></div>
                  
                  <div className="md:w-5/12 md:pl-10">
                    <div className="bg-white p-6 rounded-xl shadow-md inline-block">
                      <span className="inline-block px-3 py-1 bg-blue-100 text-blue-600 font-semibold rounded-full mb-2">Today</span>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Global Impact</h3>
                      <p className="text-gray-600">
                        Now serving 500+ brands worldwide with a team of 50+ digital marketing specialists.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* CTA Section */}
          <div className={`mt-24 text-center bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl shadow-xl p-10 transition-all duration-1000 delay-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}>
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Ready to Transform Your Digital Presence?</h3>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
              Let's work together to tell your brand's story and accelerate your growth.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a 
                href="#contact-section" 
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors shadow-lg"
              >
                Start Your Journey
                <span className="ml-2">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="20" height="20"><rect width="256" height="256" fill="none"/><rect x="40" y="40" width="176" height="176" rx="8" transform="translate(0 256) rotate(-90)" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><polyline points="96 112 96 160 144 160" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><line x1="160" y1="96" x2="96" y2="160" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/></svg>
                </span>
              </a>
              <a 
                href="#services-section" 
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white bg-transparent text-white font-semibold rounded-lg hover:bg-blue-600 transition-colors"
              >
                Discover Our Services
                <span className="ml-2">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="20" height="20"><rect width="256" height="256" fill="none"/><circle cx="104" cy="100" r="60" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><path d="M20,200c20.55-24.45,49.56-40,84-40s63.45,15.55,84,40" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><line x1="220" y1="136" x2="220" y2="112" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><line x1="220" y1="136" x2="197.17" y2="128.58" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><line x1="220" y1="136" x2="205.89" y2="155.42" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><line x1="220" y1="136" x2="234.11" y2="155.42" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><line x1="220" y1="136" x2="242.83" y2="128.58" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/></svg>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;