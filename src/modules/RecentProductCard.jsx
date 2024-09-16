import sprite from '../assets/sprite.svg'
import '../scss/blocks/_btn.scss'
import '../scss/blocks/_recent-product-card.scss'

const RecentProductCard = ({ productName, price, discount, img }) => {
  return (
    <div className="recent-product-card">
      <div className="recent-product-card__img-wrapper">
        <a
          className="recent-product-card__img-link"
          href="#"
          aria-label="Подробнее"
        >
          <picture className="recent-product-card__picture">
            <source
              media="(max-width: 767px)"
              srcSet={img[0] + ' 1x, ' + img[1] + ' 2x'}
            />
            <source
              media="(max-width: 1023px)"
              srcSet={img[2] + ' 1x, ' + img[3] + ' 2x'}
            />
            <img
              className="recent-product-card__img"
              src={img[4]}
              srcSet={img[5] + ' 2x'}
              height={220}
              width={280}
              alt={"Фотография товара " + productName}
            />
          </picture>
          {discount && <span className="recent-product-card__img-discount">-{discount * 100}%</span>}
        </a>
      </div>
      <h3 className="recent-product-card__product-name">
        <a className="recent-product-card__product-name-link" href="#">
          {productName}
        </a>
      </h3>
      <div className="recent-product-card__price-wrapper">
        <span className="recent-product-card__price">{discount ? (price * (1 - discount)).toLocaleString('ru') : price.toLocaleString('ru')} руб.</span>
        {discount && <span className="recent-product-card__old-price">{price.toLocaleString('ru')} руб.</span>}
      </div>
      <div className="recent-product-card__btn-wrapper">
        <button
          className="recent-product-card__add-btn btn btn--square-s"
          type="button"
        >
          Добавить в&nbsp;корзину
        </button>
        <button className="recent-product-card__favorite-btn btn" type="button">
          <svg
            className="recent-product-card__favorite-icon"
            width={20}
            height={20}
            aria-label="В избранное"
          >
            <use xlinkHref={sprite + "#icon-favorite"} />
          </svg>
        </button>
      </div>
    </div>

  )
}

export default RecentProductCard