import React, { useState, useEffect } from "react";

const Team = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById("team-section");
      if (element) {
        const position = element.getBoundingClientRect();
        if (position.top < window.innerHeight - 100) {
          setIsVisible(true);
        }
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    // Check on initial load
    handleScroll();
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Team members data
  const teamMembers = [
    {
      name: "Alexandra Chen",
      role: "Founder & CEO",
      photo: "https://images.unsplash.com/photo-1498982261566-1c28c9cf4c02?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Mzk2MDh8MHwxfHNlYXJjaHwxfHxQcm9mZXNzaW9uYWwlMkJoZWFkc2hvdCUyQm9mJTJCQWxleGFuZHJhJTJCQ2hlbiUyNTJDJTJCYSUyQndvbWFuJTJCd2l0aCUyQmRhcmslMkJoYWlyJTJCYW5kJTJCZ2xhc3Nlc3xlbnwwfHx8fDE3NDc4ODcyOTN8MA&ixlib=rb-4.1.0&q=80&w=1080",
      description: "Former Marketing Director at a Fortune 500 company with 15+ years of experience in digital transformation and brand development.",
      social: {
        linkedin: "#",
        twitter: "#"
      }
    },
    {
      name: "Marcus Johnson",
      role: "Creative Director",
      photo: "https://images.unsplash.com/photo-1453396450673-3fe83d2db2c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Mzk2MDh8MHwxfHNlYXJjaHwxfHxIZWFkc2hvdCUyQm9mJTJCTWFyY3VzJTJCSm9obnNvbiUyNTJDJTJCYSUyQm1hbiUyQndpdGglMkJzaG9ydCUyQmhhaXIlMkJhbmQlMkJhJTJCYmVhcmR8ZW58MHx8fHwxNzQ3ODg3Mjk1fDA&ixlib=rb-4.1.0&q=80&w=1080",
      description: "Award-winning creative with background in video production and storytelling who has led campaigns for global brands.",
      social: {
        linkedin: "#",
        twitter: "#"
      }
    },
    {
      name: "Priya Sharma",
      role: "Head of Strategy",
      photo: "https://images.unsplash.com/photo-1650954316166-c3361fefcc87?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Mzk2MDh8MHwxfHNlYXJjaHwxfHxQcm9mZXNzaW9uYWwlMkJwaG90byUyQm9mJTJCUHJpeWElMkJTaGFybWElMjUyQyUyQmElMkJ3b21hbiUyQndpdGglMkJsb25nJTJCYmxhY2slMkJoYWlyfGVufDB8fHx8MTc0Nzg4NzI5N3ww&ixlib=rb-4.1.0&q=80&w=1080",
      description: "Data-driven strategist with expertise in content analytics and audience growth across multiple social platforms.",
      social: {
        linkedin: "#",
        twitter: "#"
      }
    },
    {
      name: "David Rodriguez",
      role: "Lead Content Producer",
      photo: "https://images.unsplash.com/photo-1453396450673-3fe83d2db2c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Mzk2MDh8MHwxfHNlYXJjaHwxfHxIZWFkc2hvdCUyQm9mJTJCRGF2aWQlMkJSb2RyaWd1ZXolMjUyQyUyQmElMkJtYW4lMkJ3aXRoJTJCZ2xhc3Nlc3xlbnwwfHx8fDE3NDc4ODcyOTl8MA&ixlib=rb-4.1.0&q=80&w=1080",
      description: "Specializes in short-form video content that consistently achieves viral status and high engagement rates.",
      social: {
        linkedin: "#",
        twitter: "#"
      }
    },
    {
      name: "Sarah Thompson",
      role: "Client Success Manager",
      photo: "https://images.unsplash.com/photo-1460904577954-8fadb262612c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Mzk2MDh8MHwxfHNlYXJjaHwxfHxQcm9mZXNzaW9uYWwlMkJwaG90byUyQm9mJTJCU2FyYWglMkJUaG9tcHNvbiUyNTJDJTJCYSUyQndvbWFuJTJCd2l0aCUyQmJsb25kZSUyQmhhaXIlMkJzbWlsaW5nfGVufDB8fHx8MTc0Nzg4NzMwMXww&ixlib=rb-4.1.0&q=80&w=1080",
      description: "Dedicated to ensuring client satisfaction with a track record of 95% client retention over 5 years.",
      social: {
        linkedin: "#",
        twitter: "#"
      }
    },
    {
      name: "James Wilson",
      role: "Technical Director",
      photo: "https://images.unsplash.com/photo-1472747624745-ce92d32d3c24?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Mzk2MDh8MHwxfHNlYXJjaHwxfHxIZWFkc2hvdCUyQm9mJTJCSmFtZXMlMkJXaWxzb24lMjUyQyUyQmElMkJtYW4lMkJ3aXRoJTJCZGFyayUyQmhhaXJ8ZW58MHx8fHwxNzQ3ODg3MzAzfDA&ixlib=rb-4.1.0&q=80&w=1080",
      description: "Expert in digital platforms and technology integration who ensures flawless execution of technical marketing solutions.",
      social: {
        linkedin: "#",
        twitter: "#"
      }
    }
  ];

  return (
    <section id="team-section" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Meet Our Team</h2>
          <p className="text-lg text-gray-600">
            Our diverse team of experts brings together decades of experience in digital marketing, 
            content creation, and brand development to deliver exceptional results.
          </p>
        </div>

        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"}`}>
          {teamMembers.map((member, index) => (
            <div 
              key={index} 
              className={`bg-white rounded-xl shadow-md overflow-hidden transition-all duration-500 hover:shadow-lg transform hover:-translate-y-1 ${isVisible ? "opacity-100" : "opacity-0"}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="relative h-64 overflow-hidden bg-blue-50">
                <img 
                  src={member.photo} 
                  alt={member.name} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <h3 className="text-xl font-bold text-white">{member.name}</h3>
                  <p className="text-blue-200 font-medium">{member.role}</p>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-700 mb-4">{member.description}</p>
                <div className="flex space-x-3">
                  <a href={member.social.linkedin} className="text-blue-600 hover:text-blue-800 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="20" height="20"><rect width="256" height="256" fill="none"/><rect x="32" y="32" width="192" height="192" rx="8" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><line x1="124" y1="120" x2="124" y2="176" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><line x1="84" y1="120" x2="84" y2="176" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><path d="M124,148a28,28,0,0,1,56,0v28" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><circle cx="84" cy="80" r="16"/></svg>
                  </a>
                  <a href={member.social.twitter} className="text-blue-400 hover:text-blue-600 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="20" height="20"><rect width="256" height="256" fill="none"/><path d="M88,176S32.85,144,40.78,56c0,0,39.66,40,87.22,48V88c0-22,18-40.27,40-40a40.74,40.74,0,0,1,36.67,24H240l-32,32c-4.26,66.84-60.08,120-128,120-32,0-40-12-40-12S72,200,88,176Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/></svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-lg text-gray-700">
            Interested in joining our team? Check out our 
            <a href="/careers" className="text-blue-600 font-medium hover:underline ml-1">open positions</a>.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Team;