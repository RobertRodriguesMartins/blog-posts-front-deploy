import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import NewsCard from './NewsCard';

function News() {
  const { allNews } = useSelector((state) => state.news);

  useEffect(() => {
    console.log('WIP...');
  }, [allNews]);
  return (
    <>
      <h2>Todos os Posts</h2>
      <section className="app-news-card-wrapper">
        <section className="app-news-card-article-wrapper">
          {allNews && allNews.length > 0 ? (
            allNews.map((post) => {
              return <NewsCard news={post} key={post.id + Math.random()} />;
            })
          ) : (
            <h2>carregando os posts... :0</h2>
          )}
        </section>
      </section>
    </>
  );
}

export default News;
