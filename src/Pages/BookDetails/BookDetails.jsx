import React from 'react';
import { useLoaderData, useParams } from 'react-router';

const BookDetails = () => {
    const { id } = useParams();
    const bookId = parseInt(id)
    const data = useLoaderData();
    const singleBook = data.find(book => book.bookId === bookId)
    console.log(singleBook)
    const { author, bookName, category, image, rating, tags, yearOfPublishing,review ,totalPages,publisher} = singleBook;
    return (
        <div className=" card-side bg-base-100 shadow-sm mt-5 md:flex">
            <div className='p-7 flex-1 flex flex-col justify-center'>
                <img className='rounded-2xl' src={image} />
            </div>
            <div className="flex flex-col  justify-center p-7 flex-1">
                <h2 className="card-title md:text-4xl">{bookName}</h2>
                <p className='md:text-xl font-semibold'>Writter : {author}</p>
                <h1 className='divider'></h1>
                <p className='text-lg font-semibold'>{category}</p>
                <h1 className='divider'></h1>
                <p><span>Review :</span>{review}</p>
               <div className='flex gap-4 '>
                 {
                    tags.map((tag,index)=><div key={index} className="badge mt-5 bg-green-50 text-green-500 font-semibold"> #{tag}</div>)
                }
               </div>
               <h2 className='divider'></h2>
               <p className='text-gray-500'>Number of pages : <span className='font-semibold text-black'>{totalPages}</span></p>
               <p className='text-gray-500'>Publisher : <span className='font-semibold text-black'>{publisher}</span></p>
               <p className='text-gray-500'>Year of Publishing : <span className='font-semibold text-black'>{yearOfPublishing}</span></p>
               <p className='text-gray-500'>rating : <span className='font-semibold text-black'>{rating}</span></p>
                <div className="card-actions  mt-5">
                    <button className="btn bg-green-500 text-white">Read</button>
                    <button className="btn bg-green-500 text-white">Wishlist</button>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;