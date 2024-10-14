import React from 'react'
import '../../styles/comments.css'
import { useSelector } from 'react-redux'

function Comments() {
  const getComments = useSelector(state => state.comment.getComments)

  return (
    <div >
      {getComments && getComments.length > 0 ? (
        getComments.map(comment => (
          <div key={comment.id} className='containerComment'>
            <div className="container-post__profile">
              <picture className="container-post__picture">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/9187/9187604.png"
                  alt="img"
                  width={50}
                  height={50}
                />
              </picture>
              <p className='emailContent' >{comment.email} </p>
            </div>
            <h3 className='nameTitle'>{comment.name}</h3>
            <p className='bodyContent'>{comment.body}</p>
          </div>
        ))
      ) : <p>No hay comentarios</p>}
    </div>
  )
}
export default Comments