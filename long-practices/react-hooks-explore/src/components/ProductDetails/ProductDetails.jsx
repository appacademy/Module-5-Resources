function ProductDetails({ product, visible }) {
  if (!visible) return null

  if (!product) return (
    <div className="product-details">
      <p className="product-info">Our Products</p>
      <p>Welcome to our product catalog. Please enjoy exploring.</p>
      <p>Please select a product to view its details.</p>
    </div>
  )

  return (
    <div className="product-details">
      <p className="product-info">{product.name}</p>
      <p>{product.description}</p>
      <p className="product-price">{product.price}</p>
      <p>Details</p>
      <ul>
        {product.details.map((item, index) => <li className="product-details-list-item" key={index}>
          {item.label}<br />
          <span className="product-info">{item.value}</span>
        </li>)}
      </ul>
    </div>
  )
}

export default ProductDetails;
