import React from 'react'
import {
  Link,
} from "react-router-dom";

export default function Card({ item }) {
  return (
    <Link to={`/post/${item.id}`}>
      <div
        style={{ backgroundImage: `url('https://via.placeholder.com/600/392537')` }}
        className="relative w-full h-[50vw] md:h-full max-w-full max-h-full rounded-xl bg-no-repeat bg-center bg-cover"
        >
        <h3 className="absolute left-6 bottom-6 font-bold text-2xl text-white">
          {item.title}
        </h3>
      </div>
    </Link>
  )
}
