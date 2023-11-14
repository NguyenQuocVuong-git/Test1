import React from 'react'
import { Link } from 'react-router-dom';

export const Header = () => {
    return (
        <Link to="/" >
            <header className="bg-mainColor text-white p-4 text-4xl font-bold flex justify-start px-5 lg:px-10 xl:px-32">
                Post
            </header>
        </Link>
    )
}
