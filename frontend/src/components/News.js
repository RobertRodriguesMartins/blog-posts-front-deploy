import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { getAllThunk } from "../redux/action/news";
import NewsCard from "./NewsCard";

const feedReset = 70000

function News() {
  const dispatch = useDispatch();

  useEffect(() => {
    const id = setInterval(() => {
      dispatch(getAllThunk());// <-- (3) invoke in interval callback
    }, feedReset);

    dispatch(getAllThunk()); // <-- (2) invoke on mount

    return () => clearInterval(id);
  }, []);

  const { allNews } = useSelector((state) => state.news);
  return (
    <>
      <h2>Todas as noticias</h2>
      <section>
        {
          allNews && allNews.length > 0 ?
            <NewsCard news={allNews} />
            : <h2>Sem noticias no momento... :0</h2>
        }
      </section>
    </>
  )
}

export default News;
