import React, { useState, useEffect, useRef } from "react";

const ProblemSolution = () => {
  const [activeTab, setActiveTab] = useState(0);
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

  // Auto-rotate tabs
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTab((prev) => (prev === problemSolutions.length - 1 ? 0 : prev + 1));
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  // Problem-Solution data
  const problemSolutions = [
    {
      id: 0,
      problem: "Algorithm Anxiety",
      problemDescription: "Constantly chasing ever-changing platform algorithms without a sustainable strategy.",
      solution: "Algorithm-Proof Content Strategy",
      solutionDescription: "We develop content that maintains relevance regardless of algorithm shifts, focused on genuine value and audience engagement.",
      icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="48" height="48"><rect width="256" height="256" fill="none"/><polyline points="200 168 128 96 96 128 32 64" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><polyline points="200 128 200 168 160 168" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><polyline points="224 208 32 208 32 48" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/></svg>,
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Mzk2MDh8MHwxfHNlYXJjaHwxfHxQZXJzb24lMkJmcnVzdHJhdGVkJTJCbG9va2luZyUyQmF0JTJCZGVjcmVhc2luZyUyQmFuYWx5dGljcyUyQmdyYXBocyUyQm9uJTJCY29tcHV0ZXIlMkJzY3JlZW58ZW58MHx8fHwxNzQ3ODg3NTU2fDA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      id: 1,
      problem: "Low Engagement",
      problemDescription: "Creating content that fails to resonate with your target audience and receives minimal interaction.",
      solution: "Engagement-Driven Storytelling",
      solutionDescription: "Our team crafts compelling narratives tailored to your specific audience segments, driving meaningful interactions and building community.",
      icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="48" height="48"><rect width="256" height="256" fill="none"/><path d="M32,48H80a0,0,0,0,1,0,0V152a0,0,0,0,1,0,0H32a8,8,0,0,1-8-8V56a8,8,0,0,1,8-8Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><path d="M80,152l40,80a32,32,0,0,0,32-32V176h64a16,16,0,0,0,15.87-18l-12-96A16,16,0,0,0,204,48H80" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/></svg>,
      image: "https://images.unsplash.com/photo-1535303311164-664fc9ec6532?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Mzk2MDh8MHwxfHNlYXJjaHwxfHxTb2NpYWwlMkJtZWRpYSUyQnBvc3QlMkJ3aXRoJTJCdmVyeSUyQmZldyUyQmxpa2VzJTJCYW5kJTJCY29tbWVudHN8ZW58MHx8fHwxNzQ3ODg3NTU5fDA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      id: 2,
      problem: "Inconsistent Growth",
      problemDescription: "Experiencing irregular spikes in followers without sustainable long-term audience building.",
      solution: "Sustainable Growth Framework",
      solutionDescription: "We implement proven systems for consistent growth through strategic content calendars, community engagement, and data-backed optimization.",
      icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="48" height="48"><rect width="256" height="256" fill="none"/><polyline points="224 208 32 208 32 48" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><circle cx="132" cy="148" r="16"/><circle cx="108" cy="92" r="16"/><circle cx="76" cy="164" r="16"/><circle cx="172" cy="116" r="16"/><circle cx="196" cy="76" r="16"/><circle cx="188" cy="164" r="16"/></svg>,
      image: "https://images.unsplash.com/photo-1458014854819-1a40aa70211c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Mzk2MDh8MHwxfHNlYXJjaHwxfHxHcm93dGglMkJjaGFydCUyQnNob3dpbmclMkJpbmNvbnNpc3RlbnQlMkJwZWFrcyUyQmFuZCUyQnZhbGxleXN8ZW58MHx8fHwxNzQ3ODg3NTYzfDA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      id: 3,
      problem: "Content Overwhelm",
      problemDescription: "Struggling with the pressure to constantly produce high volumes of content across multiple platforms.",
      solution: "Strategic Content Efficiency",
      solutionDescription: "Our approach maximizes impact with optimized content workflows and smart repurposing strategies, doing more with less while maintaining quality.",
      icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="48" height="48"><rect width="256" height="256" fill="none"/><circle cx="168" cy="52" r="20" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><circle cx="204" cy="180" r="28" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><circle cx="54" cy="178" r="30" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><polyline points="188 116 152 116 120 84 88 116 128 156 128 204" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/></svg>,
      image: "https://images.unsplash.com/photo-1734551330591-7534ffc05c17?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Mzk2MDh8MHwxfHNlYXJjaHwxfHxQZXJzb24lMkJsb29raW5nJTJCc3RyZXNzZWQlMkJzdXJyb3VuZGVkJTJCYnklMkJtdWx0aXBsZSUyQmRldmljZXMlMkJhbmQlMkJjb250ZW50JTJCZGVtYW5kc3xlbnwwfHx8fDE3NDc4ODc1Njl8MA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      id: 4,
      problem: "Unclear ROI",
      problemDescription: "Difficulty tracking how your social media efforts translate to business results and revenue.",
      solution: "ROI Tracking Framework",
      solutionDescription: "We implement comprehensive analytics and attribution systems that clearly connect your content investments to business outcomes.",
      icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="48" height="48"><rect width="256" height="256" fill="none"/><path d="M128,156V144c30.93,0,56-21.49,56-48s-25.07-48-56-48S72,69.49,72,96" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><circle cx="128" cy="208" r="20"/></svg>,
      image: "https://images.unsplash.com/photo-1734551330591-7534ffc05c17?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Mzk2MDh8MHwxfHNlYXJjaHwxfHxDb25mdXNlZCUyQnBlcnNvbiUyQmxvb2tpbmclMkJhdCUyQmNvbXBsZXglMkJhbmFseXRpY3MlMkJkYXNoYm9hcmR8ZW58MHx8fHwxNzQ3ODg3NTcyfDA&ixlib=rb-4.1.0&q=80&w=1080"
    }
  ];

  return (
    <section 
      ref={sectionRef}
      className="py-20 bg-white" 
      id="problem-solution"
    >
      <div className="container mx-auto px-4">
        <div className={`max-w-6xl mx-auto transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Transforming Challenges into Growth</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We understand the common pain points brands face in the digital landscape. 
              Our solutions are designed to address these challenges head-on and transform them into opportunities.
            </p>
          </div>

          <div className="bg-blue-50 rounded-2xl shadow-lg overflow-hidden">
            <div className="md:grid md:grid-cols-5">
              {/* Left sidebar - Problems */}
              <div className="md:col-span-2 bg-gradient-to-br from-blue-600 to-blue-700 p-6 md:p-8">
                <h3 className="text-xl font-bold text-white mb-6">Common Challenges</h3>
                <div className="space-y-1">
                  {problemSolutions.map((item, index) => (
                    <button
                      key={item.id}
                      onClick={() => setActiveTab(index)}
                      className={`w-full text-left py-4 px-5 rounded-lg transition-all flex items-center ${
                        activeTab === index 
                          ? "bg-white text-blue-700 shadow-md" 
                          : "text-blue-100 hover:bg-blue-500"
                      }`}
                    >
                      <div className={`mr-4 ${activeTab === index ? "text-blue-600" : "text-blue-200"}`}>
                        {item.icon}
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg">{item.problem}</h4>
                        {activeTab === index && (
                          <p className="mt-1 text-sm text-blue-800 transition-opacity duration-300">
                            {item.problemDescription}
                          </p>
                        )}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Right content - Solutions */}
              <div className="md:col-span-3 p-6 md:p-8">
                <div className="h-full flex flex-col">
                  <div className="mb-6">
                    <div className="flex items-center">
                      <div className="h-10 w-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mr-3">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="20" height="20"><rect width="256" height="256" fill="none"/><path d="M192,224l-64-40L64,224V48a8,8,0,0,1,8-8H184a8,8,0,0,1,8,8Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><polyline points="192 176 127.99 136 64 176" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/></svg>
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900">
                        {problemSolutions[activeTab].solution}
                      </h3>
                    </div>
                    <p className="mt-4 text-gray-600 text-lg">
                      {problemSolutions[activeTab].solutionDescription}
                    </p>
                  </div>

                  <div className="mt-4 flex-grow">
                    <div className="relative h-64 md:h-80 lg:h-96 rounded-lg overflow-hidden shadow-md">
                      <div className="absolute inset-0 bg-gray-200 animate-pulse opacity-20"></div>
                      <img 
                        src={problemSolutions[activeTab].image} 
                        alt={`${problemSolutions[activeTab].solution} visualization`} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>

                  <div className="mt-8">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between p-6 bg-gray-50 rounded-lg">
                      <div className="mb-4 sm:mb-0">
                        <h4 className="text-lg font-semibold text-gray-900">Ready for a solution that works?</h4>
                        <p className="text-gray-600">Schedule a free strategy consultation today.</p>
                      </div>
                      <a 
                        href="#contact-section" 
                        className="inline-flex items-center px-5 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg shadow transition-colors"
                      >
                        Get Started
                        <span className="ml-2">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="20" height="20"><rect width="256" height="256" fill="none"/><rect x="40" y="40" width="176" height="176" rx="8" transform="translate(0 256) rotate(-90)" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><polyline points="96 112 96 160 144 160" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><line x1="160" y1="96" x2="96" y2="160" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/></svg>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Testimonial snippet */}
          <div className={`mt-16 text-center p-8 rounded-xl bg-white border border-gray-100 shadow-lg transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`} style={{ transitionDelay: "300ms" }}>
            <div className="max-w-4xl mx-auto">
              <div className="mb-6 text-blue-600">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="48" height="48"><rect width="256" height="256" fill="none"/><path d="M108,144H40a8,8,0,0,1-8-8V72a8,8,0,0,1,8-8h60a8,8,0,0,1,8,8v88a40,40,0,0,1-40,40" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><path d="M224,144H156a8,8,0,0,1-8-8V72a8,8,0,0,1,8-8h60a8,8,0,0,1,8,8v88a40,40,0,0,1-40,40" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/></svg>
              </div>
              <blockquote>
                <p className="text-xl md:text-2xl font-medium text-gray-900 mb-8">
                  "Velocity Growth Solutions didn't just solve our immediate problems - they completely transformed how we approach content. The ROI we've seen from their strategic solutions has been remarkable."
                </p>
                <div className="flex items-center justify-center">
                  <div className="h-12 w-12 rounded-full overflow-hidden mr-4">
                    <img 
                      src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Mzk2MDh8MHwxfHNlYXJjaHwxfHxIZWFkc2hvdCUyQm9mJTJCYSUyQmJ1c2luZXNzJTJCZXhlY3V0aXZlfGVufDB8fHx8MTc0Nzg4NzYxM3ww&ixlib=rb-4.1.0&q=80&w=1080" 
                      alt="Client" 
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="text-left">
                    <p className="font-bold text-gray-900">Cameron Wright</p>
                    <p className="text-gray-600">Marketing Director, GreenEarth</p>
                  </div>
                </div>
              </blockquote>
            </div>
          </div>
          
          {/* Statistics row */}
          <div className={`mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`} style={{ transitionDelay: "500ms" }}>
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <div className="text-blue-600 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="40" height="40"><rect width="256" height="256" fill="none"/><line x1="118.25" y1="106.07" x2="105.75" y2="77.93" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><line x1="177.23" y1="111.59" x2="150.77" y2="120.41" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><line x1="181.06" y1="169.27" x2="146.94" y2="142.73" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><line x1="110.06" y1="143.94" x2="73.94" y2="176.06" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><circle cx="128" cy="128" r="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><circle cx="96" cy="56" r="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><circle cx="200" cy="100" r="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><circle cx="200" cy="188" r="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><circle cx="56" cy="192" r="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/></svg>
              </div>
              <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">87%</div>
              <p className="text-gray-600">Average engagement increase for our clients</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <div className="text-blue-600 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="40" height="40"><rect width="256" height="256" fill="none"/><circle cx="80" cy="172" r="28" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><circle cx="80" cy="60" r="28" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><circle cx="176" cy="172" r="28" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><circle cx="176" cy="60" r="28" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><path d="M32,224a60,60,0,0,1,96,0,60,60,0,0,1,96,0" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><path d="M32,112a60,60,0,0,1,96,0h0a60,60,0,0,1,96,0" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/></svg>
              </div>
              <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">3.8M+</div>
              <p className="text-gray-600">New followers generated for clients in 2023</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <div className="text-blue-600 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="40" height="40"><rect width="256" height="256" fill="none"/><polygon points="156 120 116 92 116 148 156 120" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><rect x="32" y="48" width="192" height="144" rx="16" transform="translate(256 240) rotate(180)" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><line x1="160" y1="228" x2="96" y2="228" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/></svg>
              </div>
              <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">62M</div>
              <p className="text-gray-600">Monthly views across client accounts</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <div className="text-blue-600 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="40" height="40"><rect width="256" height="256" fill="none"/><line x1="128" y1="72" x2="128" y2="88" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><line x1="128" y1="168" x2="128" y2="184" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><circle cx="128" cy="128" r="96" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><path d="M104,168h36a20,20,0,0,0,0-40H116a20,20,0,0,1,0-40h36" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/></svg>
              </div>
              <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">215%</div>
              <p className="text-gray-600">Average ROI for our comprehensive packages</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;