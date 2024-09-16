import RecentProductCard from './RecentProductCard'
import '../scss/blocks/_recently-viewed.scss'

const RecentlyViewed = ({recentProducts}) => {
  return (
    <section className="recently-viewed">
      <div className="container">
        <h2 className="recently-viewed__title">Недавно просмотренное</h2>
        <ul className="recently-viewed__list">
          {
              recentProducts.map(product => (
                <li className="recently-viewed__item" key={product.id}>
                  <RecentProductCard 
                    productName = {product.productName}
                    price = {product.price}
                    discount = {product.discount}
                    img = {product.img}
                  />
                </li>
              ))
          }
        </ul>
      </div>
    </section>
  )
}

export default RecentlyViewed