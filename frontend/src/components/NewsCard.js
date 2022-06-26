import React from "react";
import PropTypes from 'prop-types';

function NewsCard(props) {

  const allNews = props.news;
  return (
    <>
      <h1>Noticias</h1>
      <section>
        {
          allNews && allNews.map((notice) => {
            return (
              <article key={notice.id}>
                <h1>{notice.title}</h1>
                <p>{notice.content}</p>
                <span>{notice.category}</span>
              </article>
            )
          })
        }
      </section>
    </>
  )
}

NewsCard.propTypes = {
  news: PropTypes.arrayOf(PropTypes.any)
}

export default NewsCard;
