import React, { useEffect } from 'react';
import Inputmask from "inputmask";
import './App.css';

export default function App() {
  useEffect(() => {
    import('./just-validate.js');
    Inputmask({mask: "9999 9999 9999 9999", placeholder: "0000 0000 0000 000"}).mask('#card-number');
    Inputmask({mask: "99/99"}).mask('#card-expires');
    Inputmask({alias: "email"}).mask('#card-email');
  }, [])
  return (
    <div className='card-form__content'>
      <h1 className='card-form__title'>Ввод данных карты</h1>
      <form className='card-form__form' method='POST' action='#' autoComplete='off'>
        <div className='card-form__input-wrapper card-form__input-wrapper--number'>
          <label className='card-form__input-label' htmlFor='card-number'>Номер карты*:</label>
          <input className='card-form__input' name='card-number' id='card-number'></input>
        </div>
        <div className='card-form__horizontal-wrapper'>
          <div className='card-form__input-wrapper card-form__input-wrapper--expires'>
            <label className='card-form__input-label' htmlFor='card-expires'>Срок действия*:</label>
            <input className='card-form__input' name='card-expires' id='card-expires'></input>
          </div>
          <div className='card-form__input-wrapper card-form__input-wrapper--cvv'>
            <label className='card-form__input-label' htmlFor='card-cvv'>CVV/CVC*:</label>
            <input className='card-form__input' name='card-cvv' id='card-cvv' type='password' maxLength="3"></input>
          </div>
        </div>
        <div className='card-form__input-wrapper card-form__input-wrapper--email'>
          <label className='card-form__input-label' htmlFor='card-email'>Email для отправки чека*:</label>
          <input className='card-form__input' name='card-email' id='card-email'></input>
        </div>
        <button className='card-form__btn' type='submit' disabled={true}>Отправить</button>
        <p className='card-form__info'>* – поля, обязательные для заполнения</p>
      </form>
    </div>
  );
}

