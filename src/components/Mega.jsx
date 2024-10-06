import React from "react";
import Nav from "./Nav"

function Mega() {
  const services = [
    {
      title: "Full Stack Development",
      description:
        "End-to-end web application development utilizing modern frontend and backend technologies. Creating scalable solutions with React, Django, and robust databases.",
      features: [
        "Custom Web Applications",
        "RESTful API Development",
        "Database Design & Integration",
        "Responsive UI/UX Implementation",
      ],
      borderColor: "border-sky-500",
    },
    {
      title: "Frontend Development",
      description:
        "Creating engaging user interfaces with modern frameworks and libraries. Specializing in responsive design and interactive user experiences.",
      features: [
        "React Applications",
        "HTML5/CSS3 Development",
        "Tailwind CSS Styling",
        "GSAP Animations",
      ],
      borderColor: "border-blue-500",
    },
    {
      title: "Backend Development",
      description:
        "Building robust server-side applications with Django. Implementing secure authentication, data management, and API integrations.",
      features: [
        "Django Framework",
        "REST API Development",
        "Database Management",
        "Authentication Systems",
      ],
      borderColor: "border-indigo-500",
    },
    {
      title: "E-commerce Solutions",
      description:
        "Developing comprehensive e-commerce platforms with integrated payment systems, product management, and user authentication.",
      features: [
        "Payment Gateway Integration",
        "Inventory Management",
        "Shopping Cart Implementation",
        "Order Processing Systems",
      ],
      borderColor: "border-purple-500",
    },
    {
      title: "Web Application Maintenance",
      description:
        "Providing ongoing support and maintenance for web applications, ensuring optimal performance and security.",
      features: [
        "Performance Optimization",
        "Security Updates",
        "Bug Fixing",
        "Feature Enhancement",
      ],
      borderColor: "border-violet-500",
    },
    {
      title: "Custom Solutions",
      description:
        "Developing tailored solutions for specific business needs, from content management systems to specialized tools.",
      features: [
        "Custom CMS Development",
        "Integration Services",
        "Business Process Automation",
        "Technical Consulting",
      ],
      borderColor: "border-pink-500",
    },
  ];
  return (
    <>
      <Nav />
      <div className="relative top-[60px]">
        <div className="w-[90%] mx-auto p-9 bg-green-200 flex justify-around flex-wrap gap-5 ">
          {services.map((service, index) => {
            return (
              <div
                key={service}
                className="bg-white border-l-4 border-yellow-500 p-3 rounded-lg w-full lg:w-[600px] scale-1 hover:scale-[1.02]  transition-all duration-500 ease-in-out"
              >
                <h1 className="text-[20px] font-bold">{service.title}</h1>
                <div className="mt-3 text-slate-500">{service.description}</div>
                <ul className="space-y-2">
                  {service.features.map((feature, index) => {
                    return (
                      <>
                        <div className="flex gap-2 ">
                          <div className="w-2 h-2 bg-blue-500 rounded-[50%] relative top-[10px]"></div>
                          <div>
                            <li key={index}>{feature}</li>
                          </div>
                        </div>
                      </>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
      
    </>

  );
}

export default Mega;
