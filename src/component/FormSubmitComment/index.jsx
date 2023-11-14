import React, { useState } from 'react';
import { submitComment }  from '../../utils/helper'

function CommentForm({id , handleAddComment}) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [body, setBody] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault(); 
    const data = {
      name,
      body,
      email,
      userId: 1,
      postId : parseInt(id)
    }
    const res = await submitComment({name,email,body,id})
    if(res.ok) {
      handleAddComment(data)
    }
    setName('');
    setEmail('');
    setBody('');
  };

  return (
    <div className="w-full mt-5 p-8 bg-[#dbdfe6]">
      <h2 className="text-black font-normal text-lg mb-4">Leave a Comment on this post</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
      <input
            type="text"
            placeholder="Name"
            className="w-full p-2  text-black placeholder-gray-400 border border-gray-600 focus:outline-none focus:border-blue-500"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        <input
          type="email"
          placeholder="Email Address"
          className="w-full p-2  text-black placeholder-gray-400 border border-gray-600 focus:outline-none focus:border-blue-500"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <textarea
          placeholder="Your Comment"
          className="w-full p-2  text-black placeholder-gray-400 border border-gray-600 focus:outline-none focus:border-blue-500"
          rows="4"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <button
          type="submit"
          className="w-full p-2 bg-mainColor text-white font-semibold rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        >
          Submit your Comment
        </button>
      </form>
    </div>
  );
}

export default CommentForm;
