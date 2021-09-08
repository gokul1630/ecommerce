import React from 'react'
import { Button, Form } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { selector } from '../features/redux/Slicers'
import CircularProgressLabel from './CircularProgressLabel'

const Dashboard = (props) => {
  const { pickImage, uploadProduct, productData, setProductData } = props
  const state = useSelector(selector)

  return (
    <div className="forms">
      <Form className="bs-form" onSubmit={uploadProduct}>
        <h2>Add New Product</h2>
        <Form.Group className="mb-1">
          <Form.Label>Pick Image</Form.Label>
          <Form.Control
            onChange={(e) => pickImage(e)}
            type="file"
            accept="image/x-png,image/jpeg,webp"
            required
          />
        </Form.Group>
        <Form.Group className="mb-1">
          <Form.Label>Name</Form.Label>
          <Form.Control
            value={productData.name}
            onChange={(e) =>
              setProductData({ ...productData, name: e.target.value })
            }
            type="text"
            required
          />
        </Form.Group>

        <Form.Group className="mb-1">
          <Form.Label>Brand</Form.Label>
          <Form.Control
            value={productData.brand}
            onChange={(e) =>
              setProductData({ ...productData, brand: e.target.value })
            }
            type="text"
            required
          />
        </Form.Group>
        <Form.Group className="mb-1">
          <Form.Label>Description</Form.Label>
          <Form.Control
            value={productData.description}
            onChange={(e) =>
              setProductData({ ...productData, description: e.target.value })
            }
            type="text"
            required
          />
        </Form.Group>
        <Form.Group className="mb-1">
          <Form.Label>Stocks</Form.Label>
          <Form.Control
            value={productData.stocks}
            onChange={(e) =>
              setProductData({ ...productData, stocks: e.target.value })
            }
            type="number"
            required
          />
        </Form.Group>
        <Form.Group className="mb-1">
          <Form.Label>Price</Form.Label>
          <Form.Control
            value={productData.price}
            onChange={(e) =>
              setProductData({ ...productData, price: e.target.value })
            }
            type="number"
            required
          />
        </Form.Group>
        {state.progress ? (
          <CircularProgressLabel variant="determinate" value={state.progress} />
        ) : (
          <Button type="submit">Upload Product</Button>
        )}
      </Form>
    </div>
  )
}

export default Dashboard
