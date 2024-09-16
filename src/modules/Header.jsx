import "../scss/blocks/_header.scss";
import "../scss/blocks/_main-nav.scss";
import sprite from "../assets/sprite.svg"

function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="header__content">
          <a className="header__logo-link" href="#" aria-label="Ссылка на главную страницу">
            <svg className="header__logo-icon" width="110" height="40" aria-hidden="true">
              <use xlinkHref={sprite + '#logo-houzzy'}/>
            </svg>
          </a>
          <nav className="main-nav">
            <ul className="main-nav__list">
              <li className="main-nav__item">
                <a className="main-nav__link" href="#">Каталог</a>
              </li>
              <li className="main-nav__item"><a className="main-nav__link" href="#">Акции</a>
              </li>
              <li className="main-nav__item">
                <a className="main-nav__link" href="#">Отзывы</a>
              </li>
              <li className="main-nav__item">
                <a className="main-nav__link" href="#">Доставка</a>
              </li>
              <li className="main-nav__item">
                <a className="main-nav__link" href="#">Оплата</a>
              </li>
              <li className="main-nav__item">
                <a className="main-nav__link" href="#">События</a>
              </li>
              <li className="main-nav__item">
                <a className="main-nav__link" href="#">Контакты</a>
              </li>
            </ul>
          </nav>
          <div className="header__user-list">
            <a className="header__user-link" href="#" aria-label="Ссылка на поиск">
              <svg className="header__user-icon" width="24" height="24" aria-hidden="true">
                <use xlinkHref={sprite + '#icon-search'}/>
              </svg>
            </a>
            <a className="header__user-link" href="#" aria-label="Ссылка на Избранное">
              <svg className="header__user-icon" width="24" height="24" aria-hidden="true">
                <use xlinkHref={sprite + '#icon-heart'}/>
              </svg>
            </a>
            <a className="header__user-link" href="#" aria-label="Ссылка на Корзину">
              <svg className="header__user-icon" width="24" height="24" aria-hidden="true">
                <use xlinkHref={sprite + '#icon-bag'}/>
              </svg>
            </a>
            <a className="header__user-link" href="tel:88000000000" aria-label="Ссылка на телефон">
              <svg className="header__user-icon" width="24" height="24" aria-hidden="true">
                <use xlinkHref={sprite + '#icon-phone'}/>
              </svg>
            </a>
          </div>
          <button className="header__burger" type="button" aria-label="Кнопка открытия мобильного меню">
            <svg className="header__burger-icon" width="32" height="32" aria-hidden="true">
              <use xlinkHref={sprite + '#icon-burger'}/>
            </svg>
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header