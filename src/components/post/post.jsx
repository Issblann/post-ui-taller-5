import React from 'react';
import './styles.css';
export const PostUI = () => {
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
          <h3>John doe</h3>
          <p>@JohnDoe24</p>
        </div>
      </div>

      <div className="container-post__content">
        <p className="container-post__text-content">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
          blanditiis molestias ex cupiditate repellendus, vel expedita
          perferendis iure eum rerum! Doloremque numquam excepturi expedita
          reprehenderit odio ea consequatur perferendis ducimus?
        </p>
        <span className="container-post__show-more">Show more...</span>
        <small className="container-post--time">Hace 2 horas</small>
      </div>
    </section>
  );
};
