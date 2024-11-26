import React from 'react'
import Image from 'next/image'


const Hero = () => {
  return (
    <div className='flex items-center h-screen'> 
    <div className='flex flex-col justify-center px-14' >
    
    <h1 className='w-[496px] h-[189px] font-libre bodoni text-[40px] font-bold ml-[100px]  text-[#000000] leading-[1] '>IMPECCABLE CRAFTSMANSHIP AND FINESSE </h1>
    
    <p className='w-[802px] h-[147px] font-libre Bodoni text-[30px]  ml-[100px] mt-[28px] font-weight-[500]  text-[#787054] leading-[1] '>
An example of intricate workmanship and detail, elegant necklaces and long and short chains form a part of our desirable collection.</p>
       
     <button className='
w-[177px] h-[38px] bg-[#A29875]  text-[#FFFFFF] ml-[100px] top-[730px]'>Explore Now</button>
    </div>
<div className='ml-[30px] flex'></div>
    <Image
      src="/image.jpg" // specify the path from the public folder
      alt="Description of image"
      width={1042}      // specify your desired width
      height={611}     // specify your desired height


/>

     </div>
  
  );
}

export default Hero