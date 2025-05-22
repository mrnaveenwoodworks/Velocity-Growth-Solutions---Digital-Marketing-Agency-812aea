import React, { useState, useEffect } from "react";

const ClientShowcase = () => {
  // Client data with industries
  const clients = [
    {
      name: "TechNova",
      industry: "Technology",
      logo: "https://images.unsplash.com/photo-1531973576160-7125cd663d86?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Mzk2MDh8MHwxfHNlYXJjaHwxfHxUZWNoTm92YSUyQmNvbXBhbnklMkJsb2dvfGVufDB8fHx8MTc0Nzg4NzI1OHww&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      name: "EduLearn Academy",
      industry: "Education",
      logo: "https://images.unsplash.com/photo-1620288627223-53302f4e8c74?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Mzk2MDh8MHwxfHNlYXJjaHwxfHxFZHVMZWFybiUyQkFjYWRlbXklMkJsb2dvfGVufDB8fHx8MTc0Nzg4NzI1OXww&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      name: "FitLife Pro",
      industry: "Fitness",
      logo: "https://images.unsplash.com/photo-1620288627223-53302f4e8c74?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Mzk2MDh8MHwxfHNlYXJjaHwxfHxGaXRMaWZlJTJCUHJvJTJCbG9nb3xlbnwwfHx8fDE3NDc4ODcyNjF8MA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      name: "Urban Style",
      industry: "Lifestyle",
      logo: "https://images.unsplash.com/photo-1498036882173-b41c28a8ba34?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Mzk2MDh8MHwxfHNlYXJjaHwxfHxVcmJhbiUyQlN0eWxlJTJCbG9nb3xlbnwwfHx8fDE3NDc4ODcyNjJ8MA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      name: "GreenEarth",
      industry: "Sustainability",
      logo: "https://images.unsplash.com/photo-1620288627223-53302f4e8c74?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Mzk2MDh8MHwxfHNlYXJjaHwxfHxHcmVlbkVhcnRoJTJCbG9nb3xlbnwwfHx8fDE3NDc4ODcyNjN8MA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      name: "CulinaryDelight",
      industry: "Food & Beverage",
      logo: "https://images.unsplash.com/photo-1620288627223-53302f4e8c74?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Mzk2MDh8MHwxfHNlYXJjaHwxfHxDdWxpbmFyeURlbGlnaHQlMkJsb2dvfGVufDB8fHx8MTc0Nzg4NzI2NXww&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      name: "TravelXplore",
      industry: "Travel",
      logo: "https://images.unsplash.com/photo-1620288627223-53302f4e8c74?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Mzk2MDh8MHwxfHNlYXJjaHwxfHxUcmF2ZWxYcGxvcmUlMkJsb2dvfGVufDB8fHx8MTc0Nzg4NzI2Nnww&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      name: "FinanceWise",
      industry: "Finance",
      logo: "https://images.unsplash.com/photo-1620288627223-53302f4e8c74?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Mzk2MDh8MHwxfHNlYXJjaHwxfHxGaW5hbmNlV2lzZSUyQmxvZ298ZW58MHx8fHwxNzQ3ODg3MjY3fDA&ixlib=rb-4.1.0&q=80&w=1080"
    }
  ];

  // Animation effect when scrolling to this section
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById("client-showcase");
      if (element) {
        const position = element.getBoundingClientRect();
        // If the element is in viewport
        if (position.top < window.innerHeight && position.bottom >= 0) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    // Check visibility on initial load
    handleScroll();
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section id="client-showcase" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Trusted by Industry Leaders
          </h2>
          <p className="text-lg text-gray-600">
            We've helped top brands across industries accelerate their growth and transform their digital presence.
          </p>
        </div>

        <div className={`grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          {clients.map((client, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center justify-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="h-20 flex items-center justify-center mb-4">
                <img 
                  src={client.logo} 
                  alt={`${client.name} logo`} 
                  className="max-h-16 max-w-full object-contain"
                />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">{client.name}</h3>
              <div className="mt-2 inline-block px-3 py-1 bg-blue-50 rounded-full">
                <span className="text-sm text-blue-600 font-medium">
                  {client.industry}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="inline-flex items-center text-lg font-medium text-blue-600 group cursor-pointer">
            View our case studies
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="20" height="20"><rect width="256" height="256" fill="none"/><rect x="40" y="40" width="176" height="176" rx="8" transform="translate(0 256) rotate(-90)" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><polyline points="96 112 96 160 144 160" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><line x1="160" y1="96" x2="96" y2="160" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/></svg>
          </p>
        </div>
      </div>
    </section>
  );
};

export default ClientShowcase;