import React from 'react'
import Item from './item'
import {
    Link,
  } from "react-router-dom";

export default function PostPopular({ listItem = [] }) {
    return (
        <div>
            {
                listItem && listItem.map((item) =><Link to={`/post/${item.id}`}> <Item key={item.id} item={item} /></Link>)
            }
        </div>
    )
}
