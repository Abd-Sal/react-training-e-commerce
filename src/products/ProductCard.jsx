import React, { useEffect, useState } from 'react'

const ProductCard = ({thumbnail, title, rating, category, price, discountPercentage = 0}) => {
  let [rate, setRate] = useState([])
  useEffect(()=>{
      let stars = []
      for (let i = 0; i < Math.floor(rating); i++) {
        stars.push(
          <div key={i}>
          <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M8 12.0553L12.944 15L11.632 9.45L16 5.71579L10.248 5.23421L8 0L5.752 5.23421L0 5.71579L4.368 9.45L3.056 15L8 12.0553Z" fill="#FF9017"/>
          </svg>
          </div>
          )
      }
      for(let i = stars.length; i < 5; i++){
        stars.push(          
          <div key={i}>
          <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M8 12.0553L12.944 15L11.632 9.45L16 5.71579L10.248 5.23421L8 0L5.752 5.23421L0 5.71579L4.368 9.45L3.056 15L8 12.0553Z" fill="#D5CDC5"/>
          </svg>
          </div>
          )
      }
      setRate(stars)
  }, [])
  return (
    <div className='product-card rounded-2 mb-3 p-2 h-100'>
      <div className="top-sec-product-card">
        <img src={thumbnail} alt={category} />      
      </div>
      {/* <hr className='p-0'/> */}
      <div className='price-sec d-flex justify-content-start gap-3 align-items-center'>
        <h3>${parseFloat(price - (price * discountPercentage / 100)).toFixed(2)}</h3>
        <h4>${parseFloat(price).toFixed(2)}</h4>
      </div>
      <div className="rate-sec d-flex justify-content-start gap-1 align-items-center">
        {}
        {rate.map((item)=>(
          item
        ))}
      </div>
      <h2 className='title-product'>{title}</h2>
    </div>
  )
}

export default ProductCard