import React from 'react'

export default function TitleSection({title = 'index' , className}) {
  return (
    <div className={`bg-mainColor py-5 px-3 text-2xl font-bold rounded-xl text-white shadow-2xl ${className}`}>
        {title}
    </div>
  )
}
