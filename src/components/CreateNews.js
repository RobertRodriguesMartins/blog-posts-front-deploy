import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createThunk, setForm } from '../redux/action/news';
import NavBar from './NavBar';

function CreateNews() {
  const dispatch = useDispatch();
  const form = useSelector((state) => state.news.form);

  function submitForm(form) {
    dispatch(createThunk(form));
  }

  useEffect(() => {
    if (form === 'submitted') {
      setTimeout(() => dispatch(setForm('')), 2000);
    }
  }, [form]);

  return (
    <div className="app-news-create-wrapper">
      <header className="app-header">
        <NavBar />
      </header>
      <section className="app-news-create-form-wrapper">
        {form !== 'submitted' ? (
          <section>
            <h1>Edite seu Post</h1>
            <form method="POST" onSubmit={submitForm}>
              <label htmlFor="title">Título</label>
              <input id="title" type="text" name="title" required />
              <label htmlFor="content">Conteúdo</label>
              <textarea id="content" name="content" rows="20" required />
              <label htmlFor="category">Autor</label>
              <input id="category" name="categoryName" type="text" required />
              <button type="submit">Postar</button>
            </form>
          </section>
        ) : (
          <section className="sucess-send-post">
            <div className="text-reveal">
              <h2>Enviado com sucesso!</h2>
            </div>
          </section>
        )}
        <section className="app-news-create-lastnews ">
          <h2>Meus Posts</h2>
          <div>Em breve...</div>
        </section>
      </section>
    </div>
  );
}

export default CreateNews;
