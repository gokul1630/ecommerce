import { Card, CardContent } from '@material-ui/core'
import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { selector } from '../features/redux/Slicers'
import '../styles/homePageStyle.css'

function Home() {
  const state = useSelector(selector)

  return (
    <div className="products">
      {state ? (
        state.products.map((items) => (
          <Card key={items._id} className="home-product">
            <CardContent />
            <Link className="link" to={`/product/${items._id}`}>
              <img className="img" src={items.imageLink} alt={items.name} />
            </Link>
            <h5>
              <Link className="link" to={`/product/${items._id}`}>
                {items.name}
              </Link>
            </h5>
            <p>{items.brand}</p>
            <h5>₹{items.price}</h5>
          </Card>
        ))
      ) : (
        <></>
      )}
    </div>
  )
}

export default Home
