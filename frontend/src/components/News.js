import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { allThunk } from "../redux/action/news";
import NewsCard from "./NewsCard";

const feedReset = 70000

function News() {
  const dispatch = useDispatch();

  useEffect(() => {
    const id = setInterval(() => {
      dispatch(allThunk());// <-- (3) invoke in interval callback
    }, feedReset);

    dispatch(allThunk()); // <-- (2) invoke on mount

    return () => clearInterval(id);
  }, []);

  const { allNews } = useSelector((state) => state.news);
  return (
    <>
      <h2>Todas as noticias</h2>
      <section className="app-news-card-wrapper">
        <section className="app-news-card-section">
          <section className="app-news-card-article-wrapper">
            {
              allNews && allNews.length > 0 ?
                allNews.map((notice) => {
                  return <NewsCard news={notice} key={notice.id} />
                }) : <h2>Sem noticias no momento... :0</h2>
            }
          </section>
        </section>
      </section>
    </>
  )
}

export default News;
