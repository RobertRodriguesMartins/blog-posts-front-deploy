import React from 'react';
import { useSelector } from 'react-redux';
import NewsCard from './NewsCard';
import Footer from './Footer';

function News() {
  const { allNews } = useSelector((state) => state.news);
  return (
    <>
      <h2>Todas as noticias</h2>
      <section className="app-news-card-wrapper">
        <section className="app-news-card-section">
          <section className="app-news-card-article-wrapper">
            {allNews && allNews.length > 0 ? (
              allNews.map((notice) => {
                return <NewsCard news={notice} key={notice.id} />;
              })
            ) : (
              <h2>Sem noticias no momento... :0</h2>
            )}
            <footer className="footer-wrapper">
              <Footer />
            </footer>
          </section>
        </section>
      </section>
    </>
  );
}

export default News;
