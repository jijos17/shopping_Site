import { useEffect } from 'react'
import './HomeScreen.css'
import Product from '../components/Product'
import { useSelector, useDispatch } from 'react-redux'

import { getProducts as listProducts } from '../redux/actions/productActions'
const HomeScreen = () => {
  const dispatch = useDispatch();
  const getProducts = useSelector(state => state.getProducts)

  const { products, loading, error } = getProducts;
  useEffect(() => {

    dispatch(listProducts())

  }, [dispatch])

  return (
    <div className='homescreen'>
      <h2 className="homescreen__title">Latest prod</h2>
      <div className='homescreen__products'>
        {loading ? <h2>Loading...</h2> : error ? <h2>{error}</h2> : products.map(product => {
          <Product
            key={product._id}
            productId={product._id}
            price={product.price}
            name={product.name}
            description={product.description}
            imageUrl={product.imageUrl}
          />
        })}
      </div>
    </div>
  )
}

export default HomeScreen