import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { byIdThunk } from '../redux/action/news';
import NewsCard from './NewsCard';

function NewsDetails() {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(byIdThunk(id))
  }, [])

  const notice = useSelector((state) => state.news.specificNews);
  return (
    <section className='app-news-details-wrapper'>
      {
        notice && !notice.message ?
          <NewsCard news={notice} />
          : <h2>{notice.message}</h2>
      }
    </section>
  );
}

export default NewsDetails;
