import React, { useState, useEffect } from 'react';
import PostList from '../PostList';
import TitleSection from '../TitleSection'
import Card from '../Card'
import PostPopular from '../PostPopular'
import { TITLE_POPULAR, LATEST_POSTS } from '../../constant'
import { fetchPostData } from '../../utils/helper'

export default function HomePage() {
  
  const [posts, setPosts] = useState([]);

  const fetchData = async () => {
    const response = await fetchPostData();
    setPosts(response)
  }

  useEffect(() => {
    fetchData()
  }, []);

  return (
    <div>
      <div className='flex flex-col md:flex-row gap-[1rem]'>
        {posts.length > 0 && <div className='w-full md:w-[70%]'><Card item={posts[Math.floor(Math.random() * posts.length)]} /></div>}
        <div className='flex-1 w-full md:w-[30%]'>
          <TitleSection title={TITLE_POPULAR} />
          <PostPopular listItem={posts.slice(0, 3)} />
        </div>
      </div>
      <div className='mt-6'> 
        <TitleSection title={LATEST_POSTS} />
        <PostList posts={posts} />
      </div>
    </div>
  )
}
