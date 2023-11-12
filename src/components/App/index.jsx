import 'components/App/App.css';
import Product from 'components/Product';

import { useState } from 'react';

function App() {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: 'Milk',
    },
    {
      id: 2,
      name: 'Bread',
    },
    {
      id: 3,
      name: 'Bananas'
    },
    {
      id: 4,
      name: 'Eggs'
    },
    {
      id: 5,
      name: 'Coffee'
    },
    {
      id: 6,
      name: 'Cake'
    },
    {
      id: 7,
      name: 'Pasta'
    },
  ])

  const deleteProduct = (id) => {
    const filteredProducts = products.filter (product => product.id !== id)
    setProducts(filteredProducts)
  }

  return (
    <div> 
      <h1 className='pt-40 text-center text-5xl text-indigo-700'>Products list</h1>
      <div className='max-w-screen-md mx-avto min-h-screen'>
        {products.length === 0 && (
           <div className='mt-20 text-center text-7xl text-grey-400 font-thin'>no products</div>) }
        {products.length > 0 && products.map((product) => {
          return (
            <Product key={product.id} product={product} deleteProduct={deleteProduct} />
          )
        })}
      </div>
      
    </div>
    
  );
}

export default App;
