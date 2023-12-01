import React, { useState } from 'react'
import axios from 'axios';

import useUser from '../hooks/useUser'

const AddCommentForm = ({ articleName, onArticleUpdated }) => {
  const [name, setName] = useState('');
  const [commentText, setCommentText] = useState('');
  const { user } = useUser

  const addComment = async() => {
    const token = user && await user.getIdToken();
    const headers = token ? { authToken: token } : {};

    const response = await axios.post(`/api/articles/${articleName}/comments`, {
      postedBy: name,
      text: commentText,
    }, { headers, } );
    const updatedArticle = response.data;
    onArticleUpdated(updatedArticle)
    setName('')
    setCommentText('')
  }

  return (
    <div className='add-comment-form'>
      <h3>Add a comment</h3>
      { user && <p>User: {user.email}</p>}
      <textarea 
        value={commentText}
        rows="4" 
        cols="50" 
        onChange={e => setCommentText(e.target.value)}
      />
      <button onClick={addComment}>Add comment</button>
    </div>
  )
}

export default AddCommentForm