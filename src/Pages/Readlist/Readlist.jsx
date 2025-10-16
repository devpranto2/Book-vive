import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { BookOpen, Star } from "lucide-react";
import { getStoredBook } from '../../Utility/AddToDB';
import Book from '../Book/Book';

const Readlist = () => {
    // console.log(data)
    const [readList, setReadList] = useState([]);
    const [sort,setSort]=useState('');

    const data = useLoaderData();


    useEffect(() => {
        const storedBookData = getStoredBook();
        const convertStoredBookData = storedBookData.map(id => parseInt(id))
        const myReadlist = data.filter(book => convertStoredBookData.includes(book.bookId));
        setReadList(myReadlist)
    }, [])


    const handleSort=(type)=>{
         setSort(type)
         if(type==='Pages'){
            const sortedByPages=[...readList].sort((a,b)=>a.totalPages-b.totalPages)
            console.log(readList)
            setReadList(sortedByPages)

         }

         if(type==='ratings'){
            const sortByRatings=[...readList].sort((a,b)=>a.rating-b.rating)
            setReadList(sortByRatings)
         }
            
    }


    return (
        
        <div>

            <details className="dropdown flex justify-center my-5 text-center">
                <summary className="btn bg-gradient-to-r from-green-400 to-yellow-400 text-white font-semibold rounded-full border-none shadow-md hover:shadow-lg transition-all duration-300 m-1">
                    Sort By {sort?sort:''}
                </summary>
                <ul className="menu dropdown-content bg-white/90 backdrop-blur-md rounded-xl 'z-[1]' w-52 p-2 mt-2 shadow-xl border border-lime-100">
                    <li>
                        <a onClick={()=>handleSort('Pages')} className="hover:bg-gradient-to-r hover:from-green-100 hover:to-yellow-100 rounded-lg font-medium text-gray-700">
                            Pages
                        </a>
                    </li>
                    <li>
                        <a onClick={()=>handleSort('ratings')} className="hover:bg-gradient-to-r hover:from-green-100 hover:to-yellow-100 rounded-lg font-medium text-gray-700">
                            Rating
                        </a>
                    </li>
                </ul>
            </details>

            <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-green-400 via-lime-400 to-yellow-400 p-4 sm:p-8">

            

            <div className="w-full max-w-md sm:max-w-lg bg-white/80 backdrop-blur-md rounded-2xl shadow-2xl p-4 sm:p-6">
                <h1 className="text-2xl sm:text-3xl font-bold text-center mb-6 text-gray-800">
                    📖 My Book Sections
                </h1>

                <Tabs>
                    <TabList className="flex flex-wrap justify-center gap-3 sm:gap-6 mb-6">
                        <Tab
                            className="flex items-center gap-2 px-4 py-2 rounded-full font-semibold text-gray-700 cursor-pointer border border-transparent transition-all duration-300 hover:border-lime-400 hover:bg-lime-100 focus:outline-none text-sm sm:text-base"
                            selectedClassName="bg-gradient-to-r from-green-400 to-yellow-400 text-white shadow-md"
                        >
                            <BookOpen className="w-4 h-4 sm:w-5 sm:h-5" />
                            Read List {readList.length}
                        </Tab>
                        <Tab
                            className="flex items-center gap-2 px-4 py-2 rounded-full font-semibold text-gray-700 cursor-pointer border border-transparent transition-all duration-300 hover:border-lime-400 hover:bg-lime-100 focus:outline-none text-sm sm:text-base"
                            selectedClassName="bg-gradient-to-r from-green-400 to-yellow-400 text-white shadow-md"
                        >
                            <Star className="w-4 h-4 sm:w-5 sm:h-5" />
                            Wish List
                        </Tab>
                    </TabList>

                    <TabPanel>
                        <div className="p-4 sm:p-6 bg-gradient-to-br from-green-100 to-yellow-100 rounded-xl shadow-inner text-gray-800">
                            <h2 className="text-lg sm:text-xl font-semibold mb-2">
                                Your Reading List
                            </h2>
                            <div className='flex flex-col gap-5'>
                                {
                                    readList.map(b => <Book key={b.bookId} singleBook={b}></Book>)
                                }
                            </div>
                        </div>
                    </TabPanel>

                    <TabPanel>
                        <div className="p-4 sm:p-6 bg-gradient-to-br from-yellow-100 to-green-100 rounded-xl shadow-inner text-gray-800">
                            <h2 className="text-lg sm:text-xl font-semibold mb-2">
                                Your Wishlist
                            </h2>
                            <p className="text-sm sm:text-base text-gray-600">
                                Save the books you plan to read in the future. Keep your dreams
                                alive 🌱
                            </p>
                        </div>
                    </TabPanel>
                </Tabs>

                <p className="text-center text-xs sm:text-sm text-gray-500 mt-6">
                    Developed by{" "}
                    <span className="font-semibold text-lime-600">
                        Dabashis Roy Pranto
                    </span>
                </p>
            </div>
        </div>
        </div>
    );
};

export default Readlist;