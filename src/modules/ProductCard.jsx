import sprite from '../assets/sprite.svg'
import '../scss/blocks/_product-card.scss'
import '../scss/blocks/_btn.scss'

const ProductCard = ({ productName, category, price, discount, partialPayment,
  colors, img }) => {
  return (
    <div className="product-card">
      <div className="product-card__img-wrapper">
        <a
          className="product-card__img-link"
          href="#"
          aria-label="Подробнее"
        >
          <picture className="product-card__picture">
            <source
              media="(max-width: 767px)"
              srcSet={img[0] + ' 1x, ' + img[1] + ' 2x'}
            />
            <source
              media="(max-width: 1023px)"
              srcSet={img[2] + ' 1x, ' + img[3] + ' 2x'}
            />
            <img
              className="product-card__img"
              src={img[4]}
              srcSet={img[5] + ' 2x'}
              height={400}
              width={320}
              alt={'Фотография товара ' + productName}
            />
          </picture>
          {discount && (<span className="product-card__img-discount">-{discount * 100}%</span>)}
        </a>
      </div>
      <div className="product-card__options">
        <ul className="product-card__options-payment-list">
          {partialPayment && (
            <li className="product-card__options-payment-item">
              <a className="product-card__options-payment-link" href="#">
                <svg
                  className="product-card__options-payment-icon"
                  width={56}
                  height={8}
                  aria-label="Оплата долями"
                >
                  <use xlinkHref={sprite + "#icon-partial-payment"} />
                </svg>
              </a>
            </li>
          )}
        </ul>
        <ul className="product-card__options-color-list">
          {
            colors.map(color => (
              <li className="product-card__options-color-item" key={color.id}>
                <button
                  className="product-card__options-color-btn"
                  type="button"
                  aria-label="Кнопка выбора цвета"
                  style={{ backgroundColor: color.c }}
                />
              </li>
            ))
          }
        </ul>
      </div>
      <span className="product-card__category">{category}</span>
      <h2 className="product-card__product-name">
        <a className="product-card__product-name-link" href="#">
          {productName}
        </a>
      </h2>
      <div className="product-card__price-wrapper">
        <span className='product-card__price'>{(discount ? price * (1 - discount) : price).toLocaleString('ru')} ₽</span>
        {discount && (<span className='product-card__old-price'>{price.toLocaleString('ru')} ₽</span>)}
      </div>
      <div className="product-card__btn-wrapper">
        <button
          className="product-card__add-btn btn btn--square"
          type="button"
        >
          Добавить в&nbsp;корзину
        </button>
        <button className="product-card__favorite-btn btn" type="button">
          <svg
            className="product-card__favorite-icon"
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

export default ProductCard