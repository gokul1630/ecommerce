import React, { useState } from 'react'
import { Modal, ProgressBar } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Dashboard from '../Components/Dashboard'
import { UPLOAD_IMAGE } from '../constants'
import { selector, setShowModal } from '../features/redux/Slicers'

const DashboardContainer = () => {
  const dispatch = useDispatch()
  const state = useSelector(selector)
  const [image, setImage] = useState(null)
  const [productData, setProductData] = useState({
    name: '',
    brand: '',
    description: '',
    price: 0,
    stocks: 1,
    imageLink: '',
  })
  const pickImage = (e) => {
    const reader = new FileReader()
    let file = e.target.files[0]
    if (file) {
      reader.onload = () => {
        if (reader.readyState === 2) {
          setImage(file)
        }
      }
      reader.readAsDataURL(e.target.files[0])
    } else {
      setImage(null)
    }
  }

  const uploadProduct = (e) => {
    e.preventDefault()
    dispatch({ type: UPLOAD_IMAGE, image, productData, dispatch })
  }

  return (
    <>
      <Modal
        backdrop="static"
        centered
        show={state.showModal}
        onHide={() => dispatch(setShowModal(false))}
      >
        <ProgressBar animated now={state.progress} label={state.progress} />
      </Modal>
      <Dashboard
        pickImage={pickImage}
        uploadProduct={uploadProduct}
        productData={productData}
        setProductData={setProductData}
      />
    </>
  )
}

export default DashboardContainer
