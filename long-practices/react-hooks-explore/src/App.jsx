import ProductView from './components/ProductView';
//!!START SILENT
// To run the bonus solution, comment out the preceding line and uncomment the
// following line.
// import ProductView from './components/ProductView/ProductViewBonus';
//!!END

// Eventually this should be data loaded from a service, for now just fake it.
import products from './mockdata/products.json';

function App() {
  return (
    <div className="App">
      <ProductView products={products} />
    </div>
  );
}

export default App;

