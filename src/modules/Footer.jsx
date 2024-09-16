import '../scss/blocks/_social.scss'
import '../scss/blocks/_footer.scss'
import sprite from '../assets/sprite.svg'

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__content-block">
          <div className="footer__nav-block">
            <div className="footer__nav">
              <p className="footer__title">Покупателям</p>
              <ul className="footer__nav-list">
                <li className="footer__nav-item">
                  <a className="footer__nav-link" href="#">Как сделать заказ</a>
                </li>
                <li className="footer__nav-item">
                  <a className="footer__nav-link" href="#">Доставка</a>
                </li>
                <li className="footer__nav-item">
                  <a className="footer__nav-link" href="#">Оплата</a>
                </li>
                <li className="footer__nav-item">
                  <a className="footer__nav-link" href="#">Каталог</a>
                </li>
                <li className="footer__nav-item">
                  <a className="footer__nav-link" href="#">Коллекции</a>
                </li>
                <li className="footer__nav-item">
                  <a className="footer__nav-link" href="#">Отзывы </a>
                </li>
              </ul>
            </div>
            <div className="footer__nav">
              <p className="footer__title">О&nbsp;houzzy</p>
              <ul className="footer__nav-list">
                <li className="footer__nav-item">
                  <a className="footer__nav-link" href="#">О&nbsp;компании</a>
                </li>
                <li className="footer__nav-item">
                  <a className="footer__nav-link" href="#">Сотрудничество</a>
                </li>
                <li className="footer__nav-item">
                  <a className="footer__nav-link" href="#">Вакансии</a>
                </li>
                <li className="footer__nav-item">
                  <a className="footer__nav-link" href="#">События</a>
                </li>
                <li className="footer__nav-item">
                  <a className="footer__nav-link" href="#">Контакты</a>
                </li>
                <li className="footer__nav-item">
                  <a className="footer__nav-link" href="#">Реквизиты</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer__contacts">
            <p className="footer__title">Контактная информация</p>
            <div className="footer__address">
              <span className="footer__text">г. Красноярск, ул. Декабристов 19а</span>
              <a className="footer__link" href="tel:88000000000">8 (800) 000-00-00</a>
            </div>
            <ul className="social">
              <li className="social__item">
                <a className="social__link" href="#" aria-label="Ссылка на Whatsapp">
                  <svg className="social__link-icon" width="24" height="24" aria-hidden="true">
                    <use xlinkHref={sprite + "#icon-wa"}></use>
                  </svg>
                </a>
              </li>
              <li className="social__item">
                <a className="social__link" href="#" aria-label="Ссылка на Телеграм">
                  <svg className="social__link-icon" width="24" height="24" aria-hidden="true">
                    <use xlinkHref={sprite + "#icon-tg"}></use>
                  </svg>
                </a>
              </li>
              <li className="social__item">
                <a className="social__link" href="#" aria-label="Ссылка на ВК">
                  <svg className="social__link-icon" width="24" height="24" aria-hidden="true">
                    <use xlinkHref={sprite + "#icon-vk"}></use>
                  </svg>
                </a>
              </li>
              <li className="social__item">
                <a className="social__link" href="#" aria-label="Ссылка на YouTube">
                  <svg className="social__link-icon" width="24" height="24" aria-hidden="true">
                    <use xlinkHref={sprite + "#icon-yt"}></use>
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer__legal-block">
          <div className="footer__legal-inner">
            <a className="footer__legal-link" href="#">Пользовательское соглашение и&nbsp;условия</a>
            <p className="footer__legal-text">&copy;&nbsp;Houzzy, 2024. Информация на&nbsp;сайте не&nbsp;является офертой
              и&nbsp;носит информационный характер</p>
            <a className="footer__legal-link" href="#">Обработка персональных данных</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer