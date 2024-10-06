import React from 'react';

const Contact = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 to-white py-10 px-4">
      <div className="max-w-4xl mx-auto space-y-6 mt-10">
        {/* Header Section */}
        <div className="bg-white rounded-lg p-6 shadow-sm border-l-4 border-sky-500">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">
            Let's Connect
          </h1>
          <p className="text-sky-600 text-lg">
            I'm always interested in hearing about new projects and opportunities
          </p>
        </div>

        {/* Contact Form */}
        <div className="bg-white rounded-lg p-6 shadow-sm border-l-4 border-blue-500">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Send a Message</h2>
          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block text-gray-700 font-medium mb-1">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 border border-gray-200 rounded focus:outline-none focus:border-sky-500"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-700 font-medium mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border border-gray-200 rounded focus:outline-none focus:border-sky-500"
                  placeholder="john@example.com"
                />
              </div>
            </div>
            <div>
              <label htmlFor="subject" className="block text-gray-700 font-medium mb-1">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                className="w-full px-4 py-2 border border-gray-200 rounded focus:outline-none focus:border-sky-500"
                placeholder="Project Discussion"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-gray-700 font-medium mb-1">
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                className="w-full px-4 py-2 border border-gray-200 rounded focus:outline-none focus:border-sky-500"
                placeholder="Tell me about your project..."
              />
            </div>
            <button 
              type="submit"
              className="bg-sky-500 text-white px-6 py-2 rounded hover:bg-sky-600 transition-colors font-medium"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Direct Contact */}
          <div className="bg-white rounded-lg p-6 shadow-sm border-l-4 border-indigo-500">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Direct Contact</h2>
            <div className="space-y-3">
              <a 
                href="mailto:jaishankar7655@gmail.com"
                className="flex items-center text-gray-600 hover:text-sky-600 transition-colors"
              >
                <span className="w-8 h-8 bg-sky-100 rounded-full flex items-center justify-center mr-3">
                  ✉️
                </span>
                jaishankar7655@gmail.com
              </a>
              <a 
                href="tel:+919131705898"
                className="flex items-center text-gray-600 hover:text-sky-600 transition-colors"
              >
                <span className="w-8 h-8 bg-sky-100 rounded-full flex items-center justify-center mr-3">
                  📞
                </span>
                +91 9131705898
              </a>
              <div className="flex items-center text-gray-600">
                <span className="w-8 h-8 bg-sky-100 rounded-full flex items-center justify-center mr-3">
                  📍
                </span>
                Bhopal, MP, India
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="bg-white rounded-lg p-6 shadow-sm border-l-4 border-violet-500">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Connect Online</h2>
            <div className="space-y-3">
              <a 
                href="https://linkedin.com/in/jaishankar-jaiswal-14253926b"
                className="flex items-center text-gray-600 hover:text-sky-600 transition-colors"
              >
                <span className="w-8 h-8 bg-sky-100 rounded-full flex items-center justify-center mr-3">
                  💼
                </span>
                LinkedIn Profile
              </a>
              <a 
                href="https://github.com/Jaishankar7655"
                className="flex items-center text-gray-600 hover:text-sky-600 transition-colors"
              >
                <span className="w-8 h-8 bg-sky-100 rounded-full flex items-center justify-center mr-3">
                  🔗
                </span>
                GitHub Profile
              </a>
              <a 
                href="https://jaishankar-port.netlify.app"
                className="flex items-center text-gray-600 hover:text-sky-600 transition-colors"
              >
                <span className="w-8 h-8 bg-sky-100 rounded-full flex items-center justify-center mr-3">
                  🌐
                </span>
                Portfolio Website
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Accent */}
        <div className="h-1 w-full bg-gradient-to-r from-sky-500 via-blue-500 to-indigo-500 rounded-full"></div>
      </div>
    </div>
  );
};

export default Contact;