import React from 'react'

const CommentsList = ({ comments }) => {
  return (
    <React.Fragment>
      <h3>Comments:</h3>
      { comments.map(comment => (
        <div className='comment' key={comment.postedBy + ': ' + comment.txt}>
          <h4>{comment.postedBy}</h4>
          <p>{comment.text}</p>
        </div>
      )) }
    </React.Fragment>
  )
}

export default CommentsList