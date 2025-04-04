import React from 'react'

const VideoTitle = ({title, overview}) => {
  return (
    <div className='pt-36 px-12 absolute text-white pt-[20%] px-24'>
        <h1 className='text-xl font-bold'>{title}</h1>
        <p className='py-2 text-lg w-1/3'>{overview}</p>
        <div className=''>
            <button className='bg-white color-black text-black p-1 text-lg px-10 rounded-lg'>▶Play</button>
            <button className='mx-2 bg-gray-500 color-black text-white p-1 text-lg px-10 bg-opacity-50 rounded-lg'>🕐More Info</button>
        </div>
    </div>
  )
}

export default VideoTitle;