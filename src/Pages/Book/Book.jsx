import React, { use } from 'react';
import { FaStar } from "react-icons/fa";
const Book = ({ singleBook }) => {
    // const data=use(booksPromise);
    console.log(singleBook)
    const { author, bookId, bookName, category, image, publisher, rating, totalPages, tags, yearOfPublishing } = singleBook;
    return (
        <div className="card bg-base-100 border-1 border-gray-300">
            <figure className='bg-gray-200 p-6'>
                <img className='h-[200px] rounded-2xl' src={image} />

            </figure>
              
            <div className="p-6">
                <div className='gap-3 card-actions mb-3'>
                  {
                    tags.map((tag)=><div className="badge bg-green-50 text-green-500 font-semibold">{tag}</div>)
                  }
                  
                </div>
                <h2 className="card-title text-2xl">
                    {bookName}
                    <div className="badge badge-secondary">{yearOfPublishing}</div>
                </h2>
                <p className='text-lg font-semibold text-gray-500'> By : {author}</p>
                <p className='divider'></p>
                <div className='flex justify-between text-lg font-semibold text-gray-600'>
                    <h2>{category}</h2>
                    <h2 className='flex justify-center items-center gap-1'>{rating}<FaStar /></h2>
                </div>
            </div>
        </div>
    );
};

export default Book;