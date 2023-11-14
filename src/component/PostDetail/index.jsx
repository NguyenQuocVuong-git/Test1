import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchPostById, fetchCommentPostByPostId, capitalizeFirstLetter } from '../../utils/helper'
import TitleSection from '../TitleSection'
import CommentForm from '../FormSubmitComment';
import ItemComment from '../ItemComment'

const ItemPage = () => {
  const { id } = useParams();
  const [comment , setComment ] = useState([])
  const [dataPost , setDataPost] = useState({})

  const breadcrumb = `Home > ${dataPost.title}`

  const fetchDataPostById = async () => {
    const data = await fetchPostById(id)
    setDataPost(data)
  }

  const fetchCommentPostById = async () => {
    const data = await fetchCommentPostByPostId(id)
    setComment(data)
  }

  const handleAddComment = (newComment) => {
    setComment(prevComments => [...prevComments, newComment])
  }

  useEffect(() => {
    fetchDataPostById()
    fetchCommentPostById()
  }, [id])

  return (
    <div>
      <TitleSection title={breadcrumb} className="text-sm font-medium" />
      <div className='p-3 border border-solid custom-border-color mt-8 rounded-lg h-custom'>
        <h3 className='text-4xl font-bold mt-6'>{capitalizeFirstLetter(dataPost.title)}</h3>
        <p className='text-sm font-extralight mt-5'>{dataPost.body}</p>
      </div>
      <div className='mt-5 p-3 border border-solid custom-border-color rounded-lg'>
        <h3 className='text-2xl font-bold border-b-2 pb-5'>Comment</h3>
        <div>
          {
            comment.map((item) => <ItemComment key={item.email} item={item} />)
          }
          <CommentForm id={id} handleAddComment={handleAddComment} />
        </div>
      </div>
    </div>
  )
};

export default ItemPage;