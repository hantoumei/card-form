import '../scss/blocks/_subscription.scss'
import '../scss/blocks/_btn.scss'
import '../scss/blocks/_custom-input.scss'

const Subscription = () => {
  return (
    <section className="subscription">
      <div className="container">
        <h2 className="subscription__title visually-hidden">Подписка на&nbsp;рассылку</h2>
        <div className="subscription__content">
          <div className="subscription__text-wrapper">
            <p className="subscription__text">Подпишитесь на&nbsp;рассылку и&nbsp;получите <b>500 бонусных баллов</b> на&nbsp;первую покупку
            </p>
          </div>
          <form className="subscription__form" method="POST" action="#">
            <div className="subscription__input-block">
              <div className="custom-input">
                <input className="custom-input__field" type="email" name="email" id="email" placeholder="E-mail"
                  autoComplete="off" required />
                <p className="custom-input__error-text">Поле заполнено некорректно</p>
              </div>
              <p className="subscription__policy-agreement">
                Подписываясь на&nbsp;рассылку, я&nbsp;соглашаюсь с&nbsp;условиями 
                <a className="subscription__policy-link" href="#">Политики конфиденциальности</a>
              </p>
            </div>
            <button className="subscription__btn btn btn--square btn--black-xl" type="button">Подписаться</button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Subscription