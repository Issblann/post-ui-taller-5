import React from 'react';
import '../styles/post.styles.css';
export const PostUI = ({ post }) => {
  return (
    <section className="container-post">
      <div className="container-post__profile">
        <picture className="container-post__picture">
          <img
            src="https://cdn-icons-png.flaticon.com/512/9187/9187604.png"
            alt="img"
            width={50}
            height={50}
          />
        </picture>
        <div className="container-post__username">
          <h3>John doe 24</h3>
          <p>@JohnDoe24</p>
        </div>
      </div>

      <div className="container-post__content">
        <p className="container-post__text-content">{post.body}</p>
        <span className="container-post__show-more">Show more...</span>
        <small className="container-post--time">Hace 2 horas</small>
      </div>
    </section>
  );
};
