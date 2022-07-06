import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import NavBar from './components/';
import { News } from './components/';
import { maxOffsetThunk, someThunk, setOffset } from './redux/action/news';

function App() {
  const dispatch = useDispatch();
  const actualOffset = useSelector((state) => state.news.actualOffset);
  const maxOffset = useSelector((state) => state.news.maxOffset);
  useEffect(() => {
    const scrollSection =
      document.getElementsByClassName('app-news-section')[0];
    scrollSection.addEventListener('scroll', () => {
      const { scrollHeight, scrollTop, clientHeight } = scrollSection;
      console.log(actualOffset, maxOffset);
      if (clientHeight + scrollTop >= scrollHeight) {
        if (actualOffset <= maxOffset * 6) {
          dispatch(someThunk(actualOffset));
          dispatch(setOffset(actualOffset));
        }
        return false;
      }
    });
  }, [actualOffset]);

  useEffect(() => {
    dispatch(someThunk(actualOffset));
    dispatch(maxOffsetThunk());
    dispatch(setOffset(actualOffset));
  }, []);
  return (
    <div className="app">
      <header className="app-header">
        <NavBar />
      </header>
      <section className="app-news-section">
        <News />
      </section>
    </div>
  );
}

export default App;
