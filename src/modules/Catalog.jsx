import { useState, useRef } from 'react'
import Header from './Header'
import Footer from './Footer'
import Breadcrumbs from './Breadcrumbs'
import sprite from '../assets/sprite.svg';
import '../scss/blocks/_catalog.scss'
import '../scss/blocks/_btn.scss'
import ProductCard from './ProductCard'
import Subscription from './Subscription';
import RecentlyViewed from './RecentlyViewed'


const Catalog = ({ products, recentProducts }) => {
  const [filter, setFilter] = useState(null)
  const [sort, setSort] = useState(null)

  const sorting = (arr) => {
    switch (sort) {
      case "ascending":
        return arr.sort((a, b) =>
          (a.discount ? a.price * (1 - a.discount) : a.price) - (b.discount ? b.price * (1 - b.discount) : b.price))
      case "descending":
        return arr.sort((a, b) =>
          (b.discount ? b.price * (1 - b.discount) : b.price) - (a.discount ? a.price * (1 - a.discount) : a.price))
      default:
        return arr.sort((a, b) => a.id - b.id);
    }
  }

  return (
    <>
      <Header />
      <main>
        <Breadcrumbs section='Каталог' product={products[0]} />
        <section className="catalog">
          <div className="container">
            <div className="catalog__top-wrapper">
              <h1 className="catalog__title">{products[0].category2}</h1>
              <div className="catalog__heading">
                <ul className="catalog__tag-list">
                  <li className="catalog__tag-item">
                    <button className={"catalog__tag-btn btn btn--round" + (filter === 'soft' ? ' btn--active' : '')} type="button"

                      onClick={() => {
                        if (filter === 'soft') {
                          setFilter(null)
                        } else {
                          setFilter('soft')
                        }
                      }}>

                      Кресла в&nbsp;мягкой обивке

                    </button>
                  </li>
                  <li className="catalog__tag-item">
                    <button className={"catalog__tag-btn btn btn--round" + (filter === 'designed' ? ' btn--active' : '')} type="button"

                      onClick={() => {
                        if (filter === 'designed') {
                          setFilter(null)
                        } else {
                          setFilter('designed')
                        }

                      }}>

                      Дизайнерские кресла

                    </button>
                  </li>
                  <li className="catalog__tag-item">
                    <button className={"catalog__tag-btn btn btn--round" + (filter === 'noLegs' ? ' btn--active' : '')} type="button"

                      onClick={() => {
                        if (filter === 'noLegs') {
                          setFilter(null)
                        } else {
                          setFilter('noLegs')
                        }
                      }}>

                      Кресла без ножек

                    </button>
                  </li>
                </ul>
                <div className="catalog__sort">
                  <span className="catalog__sort-text">Сортировать:</span>
                  <button className={"catalog__sort-btn btn" + (sort === null ? " catalog__sort-btn--active" : "")} type="button"

                    onClick={() => {
                      setSort(null)
                    }}>

                    Популярное

                  </button>
                  <button className={"catalog__sort-btn btn" + (sort === "ascending" ? " catalog__sort-btn--active" : "")} type="button"

                    onClick={() => {
                      setSort('ascending')
                    }}>

                    По&nbsp;возрастанию цены

                    <svg className="catalog__sort-icon" width={16} height={16}
                      aria-hidden="true"
                    >
                      <use xlinkHref={sprite + "#icon-arrowup"} />
                    </svg>
                  </button>
                  <button className={"catalog__sort-btn btn" + (sort === "descending" ? " catalog__sort-btn--active" : "")} type="button"
                    onClick={() => {
                      setSort('descending')
                    }}>

                    По&nbsp;убыванию цены

                    <svg className="catalog__sort-icon" width={16} height={16}
                      aria-hidden="true"
                    >
                      <use xlinkHref={sprite + "#icon-arrowdown"} />
                    </svg>
                  </button>
                </div>
                <div className="catalog__sort-mobile">
                  <button
                    className="catalog__sort-open-btn btn btn--circle"
                    type="button"
                  >
                    <svg className="catalog__sort-open-icon" width={17} height={13}
                      aria-label="Кнопка сортировки"
                    >
                      <use xlinkHref={sprite + "#icon-sort"} />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            <ul className="catalog__products-list">
              {
                sorting(products).filter(prod => filter ? prod[filter] : prod)
                  .map(item => (
                    <li className="catalog__products-list-item" key={item.id}>
                      <ProductCard
                        productName={item.name}
                        category={item.category}
                        price={item.price}
                        discount={item.discount}
                        partialPayment={item.partialPayment}
                        colors={item.colors}
                        img={item.img}
                      />
                    </li>
                  ))
              }
            </ul>
          </div>
        </section>
        <Subscription />
        <RecentlyViewed recentProducts={recentProducts} />
      </main>
      <Footer />
    </>
  )
}

export default Catalog
