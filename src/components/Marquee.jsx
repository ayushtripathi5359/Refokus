import React from 'react'

function Marquee({imageurl}) {
  return (
    <div className='flex w-full py-8 gap-20 overflow-x-hidden'>
        {imageurl.map((url,i)=><img src={url} key={i} className='w-[6vw] flex-shrink-0'/>)}
        {imageurl.map((url,i)=><img src={url} key={i} className='flex-shrink-0'/>)}

    </div>
  )
}

export default Marquee