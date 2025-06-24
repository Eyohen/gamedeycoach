import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { URL } from '../url';
import {
ThumbsUp,
MessageCircleMore,
BellRing
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import tenniscoaches from '../assets/tenniscoaches.png'
import footballfacilities from '../assets/footballfacilities.png'
import largestadium from '../assets/largestadium.png'
import largefootballcoaches from '../assets/largefootballcoaches.png'
import jay from '../assets/jay.png'


const Community = () => {
  // const { user, login } = useAuth();
    const [activeButton, setActiveButton] = useState('home'); // 'home' or 'explore'
  

  return (
    <div className="container mx-auto px-4 py-8">
        <div className='bg-gray-100 w-[200px] p-2 rounded-lg'>
        <div className='flex gap-x-2'>
          <button
            className={`px-5 py-1 rounded-lg transition-colors ${activeButton === 'home'
                ? 'bg-white text-black'
                : 'bg-transparent text-gray-600 hover:bg-gray-200'
              }`}
            onClick={() => setActiveButton('home')}
          >
            Home
          </button>
          <button
            className={`px-4 py-1 rounded-lg transition-colors ${activeButton === 'explore'
                ? 'bg-white text-black'
                : 'bg-transparent text-gray-600 hover:bg-gray-200'
              }`}
            onClick={() => setActiveButton('explore')}
          >
            Explore
          </button>
        </div>
      </div>


 <div className='flex gap-6 max-w-[1100px] pt-6 h-[170px]'>

        <div className='border border-black rounded-md '>
          <img src={footballfacilities} className='w-auto rounded-md' />
          {/* text part */}
          <div className='px-2 py-1'>
            <p className='font-semibold'>Football Facilities</p>
   
          </div>
        </div>

 <div className='border border-black rounded-md '>
          <img src={tenniscoaches} className='w-auto rounded-md' />
          {/* text part */}
          <div className='px-2 py-1'>
            <p className='font-semibold'>Tennis Coaches</p>

          </div>
        </div>



         <div className='border border-black rounded-md '>
          <img src={tenniscoaches} className='w-auto rounded-md' />
          {/* text part */}
          <div className='px-2 py-1'>
            <p className='font-semibold'>Basketball Coaches</p>

          </div>
        </div>



         <div className='border border-black rounded-md '>
          <img src={tenniscoaches} className='w-auto rounded-md' />
          {/* text part */}
          <div className='px-2 py-1'>
            <p className='font-semibold'>Soccer Facilities</p>

          </div>
        </div>



      </div>
      
{/* trending */}
<button className='border-2 border-black rounded-2xl px-2 py-1 mt-4'>Trending</button>


<div className='py-5'>
  <p className='text-gray-300 flex items-center gap-x-1'><BellRing size={16} />Football Community</p>
  <div className='flex gap-x-2 py-2'>
  <img src={jay} className='w-8 rounded-full'/>
  <p className='text-gray-600'>Jay Anderson</p>
  </div>

<p className=''>I am offering 50% discount on my football pitch, order ends tomorrow</p>
<p className='pb-2'>Link to book now: <span className='text-[#946BEF] font-medium'>Jay Football Pitch</span></p>

<img src={largestadium} className='w-auto'/>
<div className='text-[#946BEF] flex gap-x-6 py-2'>
<p className='flex items-center gap-x-1'><ThumbsUp size={16} />18 Likes </p>
<p className='flex items-center gap-x-1'><MessageCircleMore size={16} />25 Comments</p>
</div>


</div>


<div className='py-5'>
  <p className='text-gray-300 flex items-center gap-x-1'><BellRing size={16} />Football Community</p>
  <div className='flex gap-x-2 py-2'>
  <img src={jay} className='w-8 rounded-full'/>
  <p className='text-gray-600'>Jay Anderson</p>
  </div>

<p className=''>I am offering 50% discount on my football pitch, order ends tomorrow</p>
<p className='pb-2'>Link to book now: <span className='text-[#946BEF] font-medium'>Jay Football Pitch</span></p>

<img src={largestadium} className='w-auto'/>
<div className='text-[#946BEF] flex gap-x-6 py-2'>
<p className='flex items-center gap-x-1'><ThumbsUp size={16} />18 Likes </p>
<p className='flex items-center gap-x-1'><MessageCircleMore size={16} />25 Comments</p>
</div>


</div>



<div className='py-5'>
  <p className='text-gray-300 flex items-center gap-x-1'><BellRing size={16} />Football Community</p>
  <div className='flex gap-x-2 py-2'>
  <img src={jay} className='w-8 rounded-full'/>
  <p className='text-gray-600'>Jay Anderson</p>
  </div>

<p className=''>I am offering 50% discount on my football pitch, order ends tomorrow</p>
<p className='pb-2'>Link to book now: <span className='text-[#946BEF] font-medium'>Jay Football Pitch</span></p>

<img src={largestadium} className='w-auto'/>
<div className='text-[#946BEF] flex gap-x-6 py-2'>
<p className='flex items-center gap-x-1'><ThumbsUp size={16} />18 Likes </p>
<p className='flex items-center gap-x-1'><MessageCircleMore size={16} />25 Comments</p>
</div>


</div>


     
    </div>
  );
};

export default Community;