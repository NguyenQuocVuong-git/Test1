import React from 'react'

export default function Item({ item, onClick = () => { }, className = '' }) {
    return (
        <div
            onClick={() => onClick()}
            className="flex flex-col md:flex-row gap-2 md:gap-4 lg:gap-6 mt-4 rounded-xl p-3 shadow-xl items-center cursor-pointer"
        >
            <img
                loading='lazy'
                className="w-full md:w-[132px] max-h-[70px] md:max-h-[100px] object-cover mb-2 md:mb-0"
                alt={item?.title}
                src="https://via.placeholder.com/600/cde4c1"
            />
            <div className={`flex-1 max-w-full md:max-w-[420px] overflow-hidden ${className}`}>
                <h1 className="text-sm font-bold mb-2 md:mb-0 truncate">
                    {item?.title}
                </h1>
                <p className="text-xs truncate">{item?.body}</p>
            </div>
        </div>

    )
}
