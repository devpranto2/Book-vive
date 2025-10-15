import React from 'react';

const Contact = () => {
    return (
       <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 flex items-center justify-center p-6">
      <div className="bg-white shadow-2xl rounded-2xl p-10 max-w-3xl w-full text-center relative overflow-hidden">
        <h1 className="text-4xl font-bold text-purple-600 mb-4">Contact Us</h1>
        <p className="text-gray-600 leading-relaxed mb-8">
          We’d love to hear from you! Whether you have questions, feedback, or just 
          want to share your reading experience — feel free to reach out.  
          Our team at <span className="font-semibold text-purple-500">BookVerse</span> 
          is always happy to connect with fellow book lovers.
        </p>

        {/* Contact Info */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
          <div>
            <h3 className="text-lg font-semibold text-purple-600 mb-1">Email</h3>
            <p className="text-gray-500">support@bookverse.com</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-purple-600 mb-1">Phone</h3>
            <p className="text-gray-500">+880 1234 567 890</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-purple-600 mb-1">Address</h3>
            <p className="text-gray-500">House 45, Road 9, Dhaka, Bangladesh</p>
          </div>
        </div>

        {/* Contact Form */}
        <form className="space-y-4 text-left">
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Your Name
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-purple-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Email Address
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-purple-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Message
            </label>
            <textarea
              placeholder="Write your message..."
              rows="4"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-purple-500 resize-none"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium py-2 rounded-lg hover:opacity-90 transition"
          >
            Send Message
          </button>
        </form>

        {/* Footer / Developer Credit */}
        <div className="text-sm text-gray-500 mt-8">
          <p>
            Developed with ❤️ by{" "}
            <span className="font-semibold text-purple-600">
              Dabashis Roy Pranto
            </span>
          </p>
        </div>

        {/* Decorative Background */}
        <div className="absolute top-0 left-0 w-40 h-40 bg-purple-200 opacity-40 blur-3xl -z-10 rounded-full"></div>
        <div className="absolute bottom-0 right-0 w-40 h-40 bg-pink-200 opacity-40 blur-3xl -z-10 rounded-full"></div>
      </div>
    </div>
    );
};

export default Contact;