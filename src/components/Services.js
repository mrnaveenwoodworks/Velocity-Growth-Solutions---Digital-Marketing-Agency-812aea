import React, { useState, useEffect, useRef } from "react";

const Services = () => {
  const [activeService, setActiveService] = useState(0);
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

  const services = [
    {
      id: 1,
      title: "Organic Social Media Growth",
      icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="48" height="48"><rect width="256" height="256" fill="none"/><polyline points="224 208 32 208 32 48" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><polyline points="200 72 128 144 96 112 32 176" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><polyline points="200 112 200 72 160 72" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/></svg>,
      description: "Transform your social presence with our data-driven approach to organic content growth. We focus on creating authentic engagement that builds lasting audience relationships.",
      features: [
        "Viral short-form video strategy & production",
        "Platform-specific content optimization",
        "Growth-focused posting schedules",
        "Engagement pattern analysis",
        "Trend identification & capitalization"
      ],
      image: "https://images.unsplash.com/photo-1516880711640-ef7db81be3e1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Mzk2MDh8MHwxfHNlYXJjaHwxfHxUZWFtJTJCYnJhaW5zdG9ybWluZyUyQnNvY2lhbCUyQm1lZGlhJTJCY29udGVudCUyQmlkZWFzJTJCb24lMkJhJTJCd2hpdGVib2FyZHxlbnwwfHx8fDE3NDc4ODc2OTZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
      color: "blue"
    },
    {
      id: 2,
      title: "Community Building",
      icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="48" height="48"><rect width="256" height="256" fill="none"/><circle cx="80" cy="172" r="28" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><circle cx="80" cy="60" r="28" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><circle cx="176" cy="172" r="28" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><circle cx="176" cy="60" r="28" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><path d="M32,224a60,60,0,0,1,96,0,60,60,0,0,1,96,0" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><path d="M32,112a60,60,0,0,1,96,0h0a60,60,0,0,1,96,0" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/></svg>,
      description: "Build an engaged, loyal community around your brand through strategic storytelling and authentic interaction. We turn followers into brand advocates.",
      features: [
        "YouTube channel growth & optimization",
        "Community engagement strategies",
        "Interactive content development",
        "Fan loyalty programs",
        "Community moderation & management"
      ],
      image: "https://images.unsplash.com/photo-1496180470114-6ef490f3ff22?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Mzk2MDh8MHwxfHNlYXJjaHwxfHxQZXJzb24lMkJmaWxtaW5nJTJCY29udGVudCUyQmZvciUyQllvdVR1YmUlMkJ3aXRoJTJCcHJvZmVzc2lvbmFsJTJCZXF1aXBtZW50fGVufDB8fHx8MTc0Nzg4NzcwMHww&ixlib=rb-4.1.0&q=80&w=1080",
      color: "purple"
    },
    {
      id: 3,
      title: "Strategic Consultation",
      icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="48" height="48"><rect width="256" height="256" fill="none"/><rect x="32" y="48" width="192" height="136" rx="8" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><line x1="160" y1="184" x2="192" y2="224" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><line x1="96" y1="184" x2="64" y2="224" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><line x1="92" y1="120" x2="92" y2="144" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><line x1="128" y1="104" x2="128" y2="144" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><line x1="164" y1="88" x2="164" y2="144" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><line x1="128" y1="48" x2="128" y2="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/></svg>,
      description: "Get expert guidance on your digital marketing strategy with our consultative approach. We develop tailored roadmaps that align with your unique business goals.",
      features: [
        "Comprehensive digital audit",
        "Competitive analysis",
        "Custom strategy development",
        "Channel selection & prioritization",
        "Key performance indicators setup"
      ],
      image: "https://images.unsplash.com/photo-1516880711640-ef7db81be3e1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Mzk2MDh8MHwxfHNlYXJjaHwxfHxNYXJrZXRpbmclMkJ0ZWFtJTJCaW4lMkJhJTJCc3RyYXRlZ3klMkJzZXNzaW9uJTJCcmV2aWV3aW5nJTJCYW5hbHl0aWNzfGVufDB8fHx8MTc0Nzg4NzcwNXww&ixlib=rb-4.1.0&q=80&w=1080",
      color: "indigo"
    },
    {
      id: 4,
      title: "Lead Generation",
      icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="48" height="48"><rect width="256" height="256" fill="none"/><line x1="64" y1="136" x2="192" y2="136" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><line x1="24" y1="88" x2="232" y2="88" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><line x1="104" y1="184" x2="152" y2="184" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/></svg>,
      description: "Convert your online presence into a powerful lead generation machine with our proven techniques that attract and convert qualified prospects.",
      features: [
        "LinkedIn profile & company page optimization",
        "Lead magnet creation & distribution",
        "Connection growth strategies",
        "Content conversion funnels",
        "Messaging & outreach templates"
      ],
      image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Mzk2MDh8MHwxfHNlYXJjaHwxfHxQcm9mZXNzaW9uYWwlMkJ3b3JraW5nJTJCb24lMkJMaW5rZWRJbiUyQm9wdGltaXphdGlvbiUyQm9uJTJCbGFwdG9wfGVufDB8fHx8MTc0Nzg4NzcxMHww&ixlib=rb-4.1.0&q=80&w=1080",
      color: "teal"
    }
  ];

  const getGradient = (color) => {
    switch (color) {
      case "purple": 
        return "from-purple-500 to-purple-700";
      case "indigo": 
        return "from-indigo-500 to-indigo-700";
      case "teal": 
        return "from-teal-500 to-teal-700";
      default: 
        return "from-blue-500 to-blue-700";
    }
  };

  const getHoverColor = (color) => {
    switch (color) {
      case "purple": 
        return "hover:bg-purple-700";
      case "indigo": 
        return "hover:bg-indigo-700";
      case "teal": 
        return "hover:bg-teal-700";
      default: 
        return "hover:bg-blue-700";
    }
  };

  const getLightColor = (color) => {
    switch (color) {
      case "purple": 
        return "bg-purple-100 text-purple-600";
      case "indigo": 
        return "bg-indigo-100 text-indigo-600";
      case "teal": 
        return "bg-teal-100 text-teal-600";
      default: 
        return "bg-blue-100 text-blue-600";
    }
  };

  return (
    <section 
      id="services-section" 
      ref={sectionRef}
      className="py-20 bg-white"
    >
      <div className="container mx-auto px-4">
        <div className={`max-w-7xl mx-auto transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We offer a comprehensive suite of digital marketing services designed to elevate your brand, 
              engage your audience, and drive meaningful business growth.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-12 gap-y-8">
            {/* Service Navigation Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-gray-50 rounded-xl p-6 shadow-md sticky top-24">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Our Offerings</h3>
                <nav className="space-y-2">
                  {services.map((service, index) => (
                    <button
                      key={service.id}
                      onClick={() => setActiveService(index)}
                      className={`w-full text-left px-4 py-3 rounded-lg transition-all flex items-center ${
                        activeService === index 
                          ? `bg-gradient-to-r ${getGradient(service.color)} text-white shadow-md` 
                          : "text-gray-700 hover:bg-gray-100"
                      }`}
                    >
                      <div className={`mr-3 ${activeService === index ? "text-white" : ""}`}>
                        {service.icon}
                      </div>
                      <span className="font-medium">{service.title}</span>
                    </button>
                  ))}
                </nav>

                <div className="mt-8 pt-6 border-t border-gray-200">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Why Choose Us</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <div className="flex-shrink-0 h-5 w-5 text-blue-600 mr-2 mt-0.5">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="20" height="20"><rect width="256" height="256" fill="none"/><polyline points="88 136 112 160 168 104" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><circle cx="128" cy="128" r="96" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/></svg>
                      </div>
                      <span className="text-gray-600">Data-driven approach</span>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0 h-5 w-5 text-blue-600 mr-2 mt-0.5">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="20" height="20"><rect width="256" height="256" fill="none"/><polyline points="88 136 112 160 168 104" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><circle cx="128" cy="128" r="96" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/></svg>
                      </div>
                      <span className="text-gray-600">Tailored strategies</span>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0 h-5 w-5 text-blue-600 mr-2 mt-0.5">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="20" height="20"><rect width="256" height="256" fill="none"/><polyline points="88 136 112 160 168 104" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><circle cx="128" cy="128" r="96" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/></svg>
                      </div>
                      <span className="text-gray-600">Proven results</span>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0 h-5 w-5 text-blue-600 mr-2 mt-0.5">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="20" height="20"><rect width="256" height="256" fill="none"/><polyline points="88 136 112 160 168 104" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><circle cx="128" cy="128" r="96" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/></svg>
                      </div>
                      <span className="text-gray-600">Transparency & reporting</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Service Detail Content */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100">
                <div className="h-64 overflow-hidden relative">
                  <img 
                    src={services[activeService].image} 
                    alt={services[activeService].title} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                    <div className="p-6">
                      <div className={`inline-flex items-center justify-center rounded-full ${getLightColor(services[activeService].color)} p-2 mb-3`}>
                        {services[activeService].icon}
                      </div>
                      <h2 className="text-2xl font-bold text-white">{services[activeService].title}</h2>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <p className="text-gray-700 text-lg mb-6">
                    {services[activeService].description}
                  </p>

                  <h3 className="text-xl font-bold text-gray-900 mb-4">What We Provide</h3>
                  <ul className="space-y-3 mb-8">
                    {services[activeService].features.map((feature, index) => (
                      <li key={index} className="flex items-center">
                        <div className={`flex-shrink-0 h-6 w-6 rounded-full ${getLightColor(services[activeService].color)} flex items-center justify-center mr-3`}>
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="14" height="14"><rect width="256" height="256" fill="none"/><polyline points="88 136 112 160 168 104" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><circle cx="128" cy="128" r="96" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/></svg>
                        </div>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between bg-gray-50 p-6 rounded-lg">
                    <div className="mb-4 sm:mb-0">
                      <h4 className="text-lg font-semibold text-gray-900">Ready to get started?</h4>
                      <p className="text-gray-600">Schedule a consultation to discuss your needs.</p>
                    </div>
                    <a 
                      href="#contact-section" 
                      className={`inline-flex items-center px-5 py-3 bg-${services[activeService].color === "blue" ? "blue" : services[activeService].color}-600 ${getHoverColor(services[activeService].color)} text-white font-medium rounded-lg shadow transition-colors`}
                    >
                      Get Started
                      <span className="ml-2">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="18" height="18"><rect width="256" height="256" fill="none"/><rect x="40" y="40" width="176" height="176" rx="8" transform="translate(256 0) rotate(90)" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><polyline points="144 96 96 96 96 144" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><line x1="160" y1="160" x2="96" y2="96" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/></svg>
                      </span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Case Study Preview */}
              <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-xl shadow border border-gray-100">
                  <div className="flex items-center mb-4">
                    <div className="h-10 w-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="20" height="20"><rect width="256" height="256" fill="none"/><line x1="48" y1="216" x2="48" y2="40" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><polyline points="48 56 176 56 176 104" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><polyline points="48 104 224 104 224 152 48 152" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><polyline points="144 152 144 200 48 200" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/></svg>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900">Success Story</h3>
                  </div>
                  <blockquote className="italic text-gray-600 mb-4">
                    "We saw a 215% increase in engagement and 3x the conversion rate after implementing Velocity's content strategy."
                  </blockquote>
                  <div className="flex items-center">
                    <div className="h-10 w-10 rounded-full overflow-hidden mr-3">
                      <img 
                        src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Mzk2MDh8MHwxfHNlYXJjaHwxfHxIZWFkc2hvdCUyQm9mJTJCYSUyQmJ1c2luZXNzJTJCY2xpZW50fGVufDB8fHx8MTc0Nzg4Nzc3Mnww&ixlib=rb-4.1.0&q=80&w=1080" 
                        alt="Client" 
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Emma Rodriguez</p>
                      <p className="text-sm text-gray-500">CMO, TechNova</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-xl shadow border border-gray-100">
                  <div className="flex items-center mb-4">
                    <div className="h-10 w-10 rounded-full bg-green-100 text-green-600 flex items-center justify-center mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="20" height="20"><rect width="256" height="256" fill="none"/><rect x="48" y="120" width="88" height="88" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><path d="M208,188v12a8,8,0,0,1-8,8H180" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><line x1="208" y1="116" x2="208" y2="140" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><path d="M184,48h16a8,8,0,0,1,8,8V72" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><line x1="116" y1="48" x2="140" y2="48" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><path d="M48,76V56a8,8,0,0,1,8-8H68" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/></svg>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900">Featured Case Study</h3>
                  </div>
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900">How We Helped EduLearn Academy</h4>
                    <p className="text-gray-600">Generated 2.4M+ new followers and 15M+ monthly views through strategic content.</p>
                  </div>
                  <a href="#" className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center">
                    Read the case study
                    <span className="ml-1">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="16" height="16"><rect width="256" height="256" fill="none"/><path d="M216,112V56a8,8,0,0,0-8-8H48a8,8,0,0,0-8,8v56c0,96,88,120,88,120S216,208,216,112Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><polyline points="201.97 171.78 128 120 54.03 171.78" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/></svg>
                    </span>
                  </a>
                </div>
              </div>
              
              {/* FAQ Section */}
              <div className="mt-12">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h3>
                <div className="space-y-4">
                  <details className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 group">
                    <summary className="list-none flex justify-between items-center cursor-pointer">
                      <h4 className="text-lg font-medium text-gray-900">How quickly will we see results?</h4>
                      <div className="text-blue-600 group-open:rotate-180 transition-transform">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="20" height="20"><rect width="256" height="256" fill="none"/><path d="M216,112V56a8,8,0,0,0-8-8H48a8,8,0,0,0-8,8v56c0,96,88,120,88,120S216,208,216,112Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><polyline points="201.97 171.78 128 120 54.03 171.78" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/></svg>
                      </div>
                    </summary>
                    <div className="mt-4 text-gray-600">
                      <p>While every brand is different, our clients typically begin seeing measurable improvements in engagement within 2-4 weeks, with significant growth metrics becoming apparent after 2-3 months of consistent strategy implementation.</p>
                    </div>
                  </details>
                  
                  <details className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 group">
                    <summary className="list-none flex justify-between items-center cursor-pointer">
                      <h4 className="text-lg font-medium text-gray-900">Do you work with specific industries?</h4>
                      <div className="text-blue-600 group-open:rotate-180 transition-transform">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="20" height="20"><rect width="256" height="256" fill="none"/><path d="M216,112V56a8,8,0,0,0-8-8H48a8,8,0,0,0-8,8v56c0,96,88,120,88,120S216,208,216,112Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><polyline points="201.97 171.78 128 120 54.03 171.78" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/></svg>
                      </div>
                    </summary>
                    <div className="mt-4 text-gray-600">
                      <p>We work with brands across various industries including Technology, Education, Fitness, Lifestyle, Finance, and more. Our strategies are tailored to your specific industry challenges and opportunities.</p>
                    </div>
                  </details>
                  
                  <details className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 group">
                    <summary className="list-none flex justify-between items-center cursor-pointer">
                      <h4 className="text-lg font-medium text-gray-900">What platforms do you specialize in?</h4>
                      <div className="text-blue-600 group-open:rotate-180 transition-transform">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="20" height="20"><rect width="256" height="256" fill="none"/><path d="M216,112V56a8,8,0,0,0-8-8H48a8,8,0,0,0-8,8v56c0,96,88,120,88,120S216,208,216,112Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><polyline points="201.97 171.78 128 120 54.03 171.78" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/></svg>
                      </div>
                    </summary>
                    <div className="mt-4 text-gray-600">
                      <p>We specialize in all major social media platforms including Instagram, TikTok, YouTube, LinkedIn, Twitter, and Facebook. Our team stays current with algorithm changes and emerging platforms to ensure your content strategy remains effective.</p>
                    </div>
                  </details>
                </div>
              </div>
            </div>
          </div>
          
          {/* Service Stats */}
          <div className="mt-20 grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-gradient-to-br from-blue-500 to-blue-700 p-8 rounded-2xl text-white text-center">
              <div className="text-5xl font-bold mb-3">
                500+
              </div>
              <div className="text-blue-200 font-medium">
                Clients Served
              </div>
            </div>
            <div className="bg-gradient-to-br from-purple-500 to-purple-700 p-8 rounded-2xl text-white text-center">
              <div className="text-5xl font-bold mb-3">
                87%
              </div>
              <div className="text-purple-200 font-medium">
                Average Engagement Increase
              </div>
            </div>
            <div className="bg-gradient-to-br from-indigo-500 to-indigo-700 p-8 rounded-2xl text-white text-center">
              <div className="text-5xl font-bold mb-3">
                250M
              </div>
              <div className="text-indigo-200 font-medium">
                Monthly Content Views
              </div>
            </div>
            <div className="bg-gradient-to-br from-teal-500 to-teal-700 p-8 rounded-2xl text-white text-center">
              <div className="text-5xl font-bold mb-3">
                95%
              </div>
              <div className="text-teal-200 font-medium">
                Client Retention Rate
              </div>
            </div>
          </div>
          
          {/* Service Process */}
          <div className="mt-20 px-4">
            <div className="text-center mb-12">
              <h2 className="text-2xl font-bold text-gray-900">Our Service Process</h2>
              <p className="text-gray-600 mt-2">How we deliver exceptional results, every time</p>
            </div>
            
            <div className="max-w-5xl mx-auto">
              <div className="flex flex-col md:flex-row">
                <div className="flex-1 relative">
                  <div className="md:border-r-2 border-blue-500 absolute h-full right-1/2 md:right-0 z-0"></div>
                  <ul className="list-none m-0 p-0">
                    <li className="mb-12">
                      <div className="flex items-center">
                        <div className="bg-blue-600 z-10 rounded-full h-12 w-12 flex items-center justify-center shadow-lg">
                          <span className="text-white font-semibold">1</span>
                        </div>
                        <div className="ml-6">
                          <h4 className="font-semibold text-gray-900 text-lg mb-1">Discovery & Strategy</h4>
                          <p className="text-gray-600">We analyze your current position, audience, and goals to develop a tailored strategy that aligns with your vision.</p>
                        </div>
                      </div>
                    </li>
                    <li className="mb-12">
                      <div className="flex items-center">
                        <div className="bg-blue-600 z-10 rounded-full h-12 w-12 flex items-center justify-center shadow-lg">
                          <span className="text-white font-semibold">2</span>
                        </div>
                        <div className="ml-6">
                          <h4 className="font-semibold text-gray-900 text-lg mb-1">Content Creation</h4>
                          <p className="text-gray-600">Our creative team develops engaging, platform-optimized content that resonates with your target audience.</p>
                        </div>
                      </div>
                    </li>
                    <li className="mb-12">
                      <div className="flex items-center">
                        <div className="bg-blue-600 z-10 rounded-full h-12 w-12 flex items-center justify-center shadow-lg">
                          <span className="text-white font-semibold">3</span>
                        </div>
                        <div className="ml-6">
                          <h4 className="font-semibold text-gray-900 text-lg mb-1">Implementation & Management</h4>
                          <p className="text-gray-600">We execute the strategy, manage your platforms, and actively engage with your community.</p>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="flex items-center">
                        <div className="bg-blue-600 z-10 rounded-full h-12 w-12 flex items-center justify-center shadow-lg">
                          <span className="text-white font-semibold">4</span>
                        </div>
                        <div className="ml-6">
                          <h4 className="font-semibold text-gray-900 text-lg mb-1">Analysis & Optimization</h4>
                          <p className="text-gray-600">We continuously monitor performance, provide detailed reports, and refine our approach to maximize results.</p>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          
          {/* CTA Section */}
          <div className="mt-20 text-center p-10 bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl shadow-xl text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-6">Ready to Transform Your Digital Presence?</h3>
            <p className="text-lg text-blue-100 mb-8 max-w-3xl mx-auto">
              Let's discuss how our services can help you achieve your brand's growth objectives and make a lasting impact in the digital landscape.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a 
                href="#contact-section" 
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors shadow-lg"
              >
                Schedule a Consultation
                <span className="ml-2">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="20" height="20"><rect width="256" height="256" fill="none"/><rect x="40" y="40" width="176" height="176" rx="8" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><line x1="176" y1="24" x2="176" y2="52" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><line x1="80" y1="24" x2="80" y2="52" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><line x1="40" y1="88" x2="216" y2="88" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><polyline points="84 132 100 124 100 180" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><path d="M138.14,132a16,16,0,1,1,26.64,17.63L136,180h32" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/></svg>
                </span>
              </a>
              <a 
                href="#" 
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white bg-transparent text-white font-semibold rounded-lg hover:bg-blue-600 transition-colors"
              >
                View Our Work
                <span className="ml-2">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="20" height="20"><rect width="256" height="256" fill="none"/><path d="M128,56C48,56,16,128,16,128s32,72,112,72,112-72,112-72S208,56,128,56Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><circle cx="128" cy="128" r="32" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/></svg>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;