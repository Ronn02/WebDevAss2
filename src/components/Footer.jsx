import React, { useState } from 'react';

const Footer =() => {
    return (<div className='w-full h-46 text-center block mt-10 pt-5 bg-[#E0D9C5]'>
        <h4 className='flex-row justify-between text-center px-4'>Are you a fan of STUDIO GHIBLI, just like us? Stay up-to-date with the latest updates and exclusive content by joining our community! Don't wait any longer, sign up now and be a part of something amazing!
        </h4>
        <div className='flex flex-col items-center'>
            <input
            id="email"
            type="text"
            className="w-72 px-4 py-2 flex-row text-gray-700 text-center my-5  bg-gray-200 rounded-sm focus:outline-none focus:bg-white"
            placeholder="Your Email address" required
        />
            <button
            className="flex-row px-4 py-2 mb-4 text-black bg-[#E0D9C5] hover:rounded-[30px] hover:bg-white hover:focus:outline-black"
        >
            Subscribe
        </button>
      </div>
    </div>
    )
        

    
};

export default Footer;