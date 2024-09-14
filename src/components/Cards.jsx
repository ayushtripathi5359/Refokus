import React from 'react'
import Card from './Card'

function Cards() {
  return (
    <div className='w-full'>
        <div className='max-w-screen-2xl mx-auto p-20 flex gap-3 '>
            <Card width="w-1/3" start={false} para={true}/>
            <Card width="w-2/3" start={true} para={false} hover={"bg-violet-600"}/>
        </div>
    </div>
  )
}

export default Cards