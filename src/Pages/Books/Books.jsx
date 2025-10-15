import React, { Suspense, useEffect, useState } from 'react';
import Book from '../Book/Book';

const Books = ({data}) => {
    
        const[allBooks,setAllBooks]=useState([]);

        // useEffect(()=>{
        //     fetch('booksData.json')
        //     .then(res=>res.json())
        //     .then(data=>{
        //         setAllBooks(data)
        //         console.log(data)
        //     })
        // },[])
    
        // const booksPromise=fetch('booksData.json').then(res=>res.json())
    return (
        <div className='mt-7 mb-7'>
            <h1 className='text-center text-2xl font-semibold'>All Books</h1>
            <div className='grid md:grid-cols-2 mt-6 lg:grid-cols-3 gap-4'>
                <Suspense fallback={<span>Loading...</span>}>
                {
                    data.map((singleBook)=><Book key={singleBook.bookId}singleBook={singleBook}></Book>)
                }
            </Suspense>
            </div>
        </div>
    );
};

export default Books;