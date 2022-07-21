import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createUserThunk, setForm } from '../redux/action/news';
import NavBar from './NavBar';

function CreateUser() {
  const dispatch = useDispatch();
  const [sending, setSending] = useState(false);
  const form = useSelector((state) => state.news.form);

  function submitForm() {
    setSending(true)
    const myForm = document.getElementById('user-post');
    dispatch(createUserThunk(myForm));
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
      <section className="app-news-create-form-wrapper correction">
        {form !== 'submitted' ? (
          <section className='user-section-wrapper'>
            <h1>Preencha os campos abaixo</h1>
            <em
              style={{ color: 'red' }}
            >{`Embora as senhas sejam criptografadas, os dados devem ser fictícios, 
            pois não garanto segurança dos mesmos. Apenas lembre-se quando for fazer Log-in.`}</em>
            <div className="father no-bg-no-border">
              <div className="form-test">
                <form method="POST" id="user-post">
                  <div className="create-user-form">
                    <div>Nome:</div>
                    <input
                      type="text"
                      name="displayName"
                      id="name"
                      min="5"
                      required
                      placeholder="Seu nome"
                      defaultValue=""
                      className="no-bg"
                    />
                  </div>
                  <div className="create-user-form">
                    <div>Email:</div>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      required
                      placeholder="Seu email"
                      className="no-bg"
                    />
                  </div>
                  <div className="create-user-form">
                    <div>Password:</div>
                    <input
                      id="password"
                      name="password"
                      type="password"
                      required
                      placeholder="Sua senha"
                      className="no-bg"
                    />
                  </div>
                </form>
              </div>
            </div>
            <section className="publish-section">
              <button
                type="button"
                className="publish-button"
                onClick={submitForm}
              >
                Criar Conta
              </button>
            </section>
          </section>
        ) : (
          <section className="sucess-send-post">
            <div className="text-reveal">
              <h2>Cadastrado com sucesso!</h2>
            </div>
          </section>
        )}
      </section>
    </div>
  );
}

export default CreateUser;
