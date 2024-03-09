//!!START SILENT
import { useState, useEffect } from 'react';
//!!END
//!!ADD
// import React from 'react';
//!!END_ADD
import ProductListItem from '../ProductListItem';
import ProductDetails from '../ProductDetails';
import './ProductView.css';

function ProductView({ products }) {
  //!!START SILENT
  const [selectedProduct, setSelectedProduct] = useState();
  const [sideOpen, setSideOpen] = useState(true);
  //!!END
  //!!ADD

  // // TODO: Replace with state variable
  // const sideOpen = true;
  //!!END_ADD
  //!!START SILENT

  // Open side panel when product is selected
  useEffect(() => {
    console.log(`selectedProduct CHANGED TO`, selectedProduct);
    if (selectedProduct)
      setSideOpen(true);
  }, [selectedProduct]);

  // Deselect product when side panel is closed
  useEffect(() => {
    console.log(`sideOpen CHANGED TO`, sideOpen);
    if (!sideOpen)
      setSelectedProduct();
  }, [sideOpen]);
  //!!END

  return (
    <div className="product-view">
      <div className="product-main-area">
        <h1>Products</h1>
        <div className="product-list">
          {products.map(item =>
            <ProductListItem
              key={item.id}
              product={item}
              //!!START SILENT
              isSelected={selectedProduct && selectedProduct.id === item.id}
              onClick={() => setSelectedProduct(item)}
              //!!END
              //!!ADD
              // onClick={() => console.log('SELECT PRODUCT', item)}
              //!!END_ADD
            />
          )}
        </div>
      </div>
      <div className="product-side-panel">
        <div className="product-side-panel-toggle-wrapper">
          {/*!!START SILENT */}
          <div className="product-side-panel-toggle"
               onClick={() => setSideOpen(!sideOpen)}>
            {sideOpen ? '>' : '<'}
          </div>
          {/*!!END */}
          {/*!!ADD */}
          {/* <div className="product-side-panel-toggle" */}
               {/* onClick={() => console.log('TOGGLE SIDE PANEL')}> */}
            {/* {sideOpen ? '>' : '<'} */}
          {/* </div> */}
          {/*!!END_ADD */}
        </div>
        {/*!!START SILENT */}
        <ProductDetails product={selectedProduct} visible={sideOpen} />
        {/*!!END */}
        {/*!!ADD */}
        {/* <ProductDetails visible={sideOpen} /> */}
        {/*!!END_ADD */}
      </div>
    </div>
  );
}

export default ProductView;
