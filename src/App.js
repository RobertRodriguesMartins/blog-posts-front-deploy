import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { API_URL } from './api';
import NavBar from './components/';
import { News } from './components/';
import {
  maxOffsetThunk,
  someThunk,
  setOffset,
  reset,
  setLastPostsNumber,
} from './redux/action/news';

function App() {
  const dispatch = useDispatch();
  const [actualOffset, setActualOffset] = useState(0);
  const [maxOffset, setMaxOffset] = useState(0);
  const [loading, setLoading] = useState(0);
  const lastPostsNumber = useSelector((state) => state.news.totalPosts);
  const actualReduxOffset = useSelector((state) => state.news.actualOffset);
  const allNews = useSelector((state) => state.news.allNews);
  const actualReduxMaxOffset = useSelector((state) => state.news.maxOffset);

  async function getMaxPosts() {
    const rawData = await fetch(API_URL, {
      method: 'GET',
    });
    const { total } = await rawData.json();
    return total;
  }

  function checkIfExists(e, actualOffset, maxOffset) {
    const scrollSection = e.target;
    const { scrollHeight, scrollTop, clientHeight } = scrollSection;
    if (clientHeight + scrollTop >= scrollHeight - 100) {
      if (actualOffset <= maxOffset * 6) {
        setLoading(true);
      }
      return false;
    }
  }

  useEffect(() => {
    if (actualOffset <= maxOffset * 6 && loading) {
      dispatch(someThunk(actualOffset));
      dispatch(setOffset(actualOffset));
      setLoading(false);
    }
  }, [loading]);

  useEffect(() => {
    const scrollSection =
      document.getElementById('root');
    scrollSection.addEventListener('scroll', (e) =>
      checkIfExists(e, actualOffset, maxOffset)
    );

    return scrollSection.removeEventListener('scroll', (e) =>
      checkIfExists(e, actualOffset, maxOffset)
    );
  }, []);

  useEffect(() => {
    if (allNews.length < 1) {
      getMaxPosts().then((res) => {
        dispatch(someThunk(actualOffset));
        dispatch(maxOffsetThunk());
        dispatch(setOffset(actualOffset));
        dispatch(setLastPostsNumber(res));
      });
    }
  }, []);

  useEffect(() => {
    if (allNews.length > 1) {
      getMaxPosts().then((total) => {
        if (total > lastPostsNumber && lastPostsNumber !== 0) {
          dispatch(someThunk(0));
          dispatch(reset());
          dispatch(maxOffsetThunk());
          dispatch(setOffset(0));
        }
      });
    }
  }, [lastPostsNumber]);

  useEffect(() => {
    setActualOffset(actualReduxOffset);
    setMaxOffset(actualReduxMaxOffset);
  }, [actualReduxMaxOffset, actualReduxOffset]);

  return (
    <>
      <header className="app-header">
        <NavBar />
      </header>
      <section className="app-news-section">
        <News />
        <div className='app-news-section-side'>
          black box
        </div>
      </section>
    </>
  );
}

export default App;
