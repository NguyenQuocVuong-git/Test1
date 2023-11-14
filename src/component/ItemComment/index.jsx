import React from 'react'

export default function ItemComment({ item }) {
    return (
        <div key={item.id} className='mt-5 border-b-2 pb-10'>
            <div className='flex gap-4 items-center'>
                <img src="https://0.gravatar.com/avatar/?s=96&d=identicon&r=G" alt='img user' className='rounded-full w-12 h-12 border' />
                <div>
                    <p className='text-lg font-bold'>{item.name}</p>
                    <p className='text-sm font-light'>{item.email}</p>
                </div>
            </div>
            <p className='text-sm mt-5'>{item.body}</p>
        </div>
    )
}
