import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function NewsCard(props) {
  const tpCache = [0, 0];
  function double_click(ev) {
    const timestamp = new Date().getTime();
    tpCache[0] = tpCache[1];
    tpCache[1] = timestamp;
    if (tpCache[1] - tpCache[0] < 300) {
      console.log('double click');
    }
  }

  const post = props.news;
  useEffect(() => {
    document
      .getElementsByClassName('touch')[0]
      .addEventListener('touchstart', double_click);
  }, []);
  return (
    <article className="touch">
      <Link to={`/posts/${post.id}`}>
        <h1>{post.title}</h1>
        <p>{post.content}</p>
        <span>
          <em>{post.categoryName}</em>
        </span>
      </Link>
    </article>
  );
}

NewsCard.propTypes = {
  news: PropTypes.object,
};

export default NewsCard;
