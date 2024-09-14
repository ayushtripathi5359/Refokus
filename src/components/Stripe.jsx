import React from 'react'

function Stripe({val}) {
  return (
    <div className='w-[16.66%] px-4 py-5 border border-zinc-600 border-l-0 flex items-center justify-between'>
        <img src={val.url} alt="" />
        <span className='font-semibold text-lg'>{val.number}</span>
    </div>
  )
}

export default Stripe