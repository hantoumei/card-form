import '../scss/blocks/_breadcrumbs.scss'

const Breadcrumbs = ({section, product}) => {
  return (
    <div className="breadcrumbs">
        <div className="container">
          <ul className="breadcrumbs__list">
            <li className="breadcrumbs__item">
              <a className="breadcrumbs__link" href="#">Главная</a>
            </li>
            <li className="breadcrumbs__item">
              <a className="breadcrumbs__link" href="#">{section}</a>
            </li>
            <li className="breadcrumbs__item">
              <a className="breadcrumbs__link" href="#">{product.category}</a>
            </li>
            <li className="breadcrumbs__item">
              <a className="breadcrumbs__link breadcrumbs__link--active" href="#">{product.category2}</a>
            </li>
          </ul>
        </div>
      </div>
  )
}

export default Breadcrumbs