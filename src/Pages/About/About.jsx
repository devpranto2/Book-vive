import React from 'react';

const About = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 flex items-center justify-center p-6 md:text-lg">
      <div className="bg-white shadow-2xl rounded-2xl p-10 max-w-3xl text-center relative overflow-hidden">
        <h1 className="text-4xl font-bold text-purple-600 mb-4">About Our Library</h1>

        <p className="text-gray-600 leading-relaxed mb-6">
          Welcome to <span className="font-semibold text-purple-500">BookVerse</span> — 
          a digital haven for book lovers. Our curated collection brings together 
          timeless classics and contemporary gems by legendary authors such as 
          <strong> F. Scott Fitzgerald</strong>, <strong> George Orwell</strong>, 
          <strong> Jane Austen</strong>, and many more. Here, every story opens a door 
          to new worlds of imagination, emotion, and wisdom.
        </p>

        <p className="text-gray-600 leading-relaxed mb-6">
          Whether it’s the glitz and tragedy of <em>The Great Gatsby</em>, the courage 
          of <em>To Kill a Mockingbird</em>, or the magical journey of 
          <em> Harry Potter</em>, each book is chosen to spark curiosity and ignite 
          your love for reading. Explore categories like <strong>Fantasy</strong>, 
          <strong>Romance</strong>, <strong>Classic Literature</strong>, and 
          <strong>Philosophy</strong> — all in one place.
        </p>

        <p className="text-gray-600 leading-relaxed mb-8">
          Our mission is simple — to connect readers with stories that inspire, 
          teach, and stay with you long after the last page. 
          Dive into detailed reviews, ratings, and tags to find the perfect match 
          for your reading journey.
        </p>

        <blockquote className="text-lg italic text-purple-500 font-medium mb-8">
          “A reader lives a thousand lives before he dies.” — George R.R. Martin
        </blockquote>

        <hr className="border-t border-purple-200 mb-4" />

        {/* Developer Credit Section */}
        <div className="text-sm text-gray-500 mt-4">
          <p>
            Developed with ❤️ by{" "}
            <span className="font-semibold text-purple-600">
              Dabashis Roy Pranto
            </span>
          </p>
        </div>

        {/* Decorative Background Blur */}
        <div className="absolute top-0 left-0 w-40 h-40 bg-purple-200 opacity-40 blur-3xl -z-10 rounded-full"></div>
        <div className="absolute bottom-0 right-0 w-40 h-40 bg-pink-200 opacity-40 blur-3xl -z-10 rounded-full"></div>
      </div>
    </div>
    );
};

export default About;