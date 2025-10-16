import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';


const Readlist = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-green-400 via-lime-400 to-yellow-400 p-6">
      <div className="w-full max-w-md bg-white/80 backdrop-blur-md rounded-2xl shadow-2xl p-6">
        <h1 className="text-2xl font-bold text-center mb-6 text-gray-800">
          📚 My Book Sections
        </h1>

        <Tabs>
          <TabList className="flex justify-center gap-4 mb-6">
            <Tab
              className="px-5 py-2 rounded-full font-semibold text-gray-700 cursor-pointer border border-transparent transition-all duration-300 hover:border-lime-400 hover:bg-lime-100 focus:outline-none"
              selectedClassName="bg-gradient-to-r from-green-400 to-yellow-400 text-white shadow-md"
            >
              Read List
            </Tab>
            <Tab
              className="px-5 py-2 rounded-full font-semibold text-gray-700 cursor-pointer border border-transparent transition-all duration-300 hover:border-lime-400 hover:bg-lime-100 focus:outline-none"
              selectedClassName="bg-gradient-to-r from-green-400 to-yellow-400 text-white shadow-md"
            >
              Wish List
            </Tab>
          </TabList>

          <TabPanel>
            <div className="p-6 bg-gradient-to-br from-green-100 to-yellow-100 rounded-xl shadow-inner text-gray-800">
              <h2 className="text-xl font-semibold mb-2">Your Reading List</h2>
              <p className="text-sm text-gray-600">
                Explore your favorite books and track your reading journey here.
              </p>
            </div>
          </TabPanel>

          <TabPanel>
            <div className="p-6 bg-gradient-to-br from-yellow-100 to-green-100 rounded-xl shadow-inner text-gray-800">
              <h2 className="text-xl font-semibold mb-2">Your Wishlist</h2>
              <p className="text-sm text-gray-600">
                Save the books you plan to read in the future. Keep your dreams
                alive 🌱
              </p>
            </div>
          </TabPanel>
        </Tabs>

        <p className="text-center text-sm text-gray-500 mt-6">
          Developed by <span className="font-semibold text-lime-600">Dabashis Roy Pranto</span>
        </p>
      </div>
    </div>
    );
};

export default Readlist;