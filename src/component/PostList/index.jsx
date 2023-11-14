import React, { useState, useEffect } from 'react';
import Item from '../PostPopular/item';
import { ITEM_PER_PAGE } from '../../constant'
import {
  Link,
} from "react-router-dom";

const PostList = ({ posts }) => {

  const [displayItems, setDisplayItems] = useState([])
  const [loading, setLoading] = useState(false)

  const handleShowMore = () => {
    const newDisplayCount = Math.min(displayItems.length + ITEM_PER_PAGE, posts.length);
    setDisplayItems(posts.slice(0, newDisplayCount));

  };

  const handleScroll = () => {
    setLoading(true)
    if(displayItems.length === posts.length) {
      setLoading(false)
    }
    const delayExecution = () => {
      const scrollTop = window.scrollY;
      const documentHeight = document.documentElement.scrollHeight;
      const windowHeight = window.innerHeight;
      if (scrollTop + windowHeight === documentHeight && displayItems.length < posts.length) {
        handleShowMore();
      }
      setLoading(false)
    };
  
    if (window.scrollTimeout) {
      clearTimeout(window.scrollTimeout);
    }
  
    window.scrollTimeout = setTimeout(delayExecution, 1000);
  };
  
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (window.scrollTimeout) {
        clearTimeout(window.scrollTimeout);
      }
    };
  });
  

  useEffect(() => {
    setDisplayItems(posts.slice(0, ITEM_PER_PAGE));
  }, [posts]);

  return (
    <>
      <div className='mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-4'>
        {displayItems.map((item) =><Link key={item.id} to={`/post/${item.id}`} ><Item  item={item} className='!max-w-[295px]' /></Link>)}
      </div>
      {
        loading && <div className="flex justify-center items-center mt-2">
        <div className="loader"></div>
      </div>
      }
    </>
  );
};

export default PostList;