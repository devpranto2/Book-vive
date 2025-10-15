import React from 'react';
import bannrImg from '../../assets/pngwing 1.png'
const Banner = () => {
    return (
        
            <div className="md:flex bg-base-200 rounded-2xl p-7">
                <div className='flex-1  flex flex-col justify-center items-center space-y-5'>
                    <h1 className="text-4xl font-bold">Books to freshen up your bookshelf</h1>

                    <button className="btn bg-green-500  text-white">View The List</button>
                </div>
                <div className='flex-1 flex flex-col justify-center items-center'>
                    <img
                        src={bannrImg}
                        className=" rounded-lg p-5 "
                    />
                </div>
            </div>

        
    );
};

export default Banner;