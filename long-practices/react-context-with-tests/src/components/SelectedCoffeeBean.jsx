//!!START SILENT
import { useCoffee } from '../context/CoffeeContext.jsx';

//!!END
const SelectedCoffeeBean = () => {
  //!!START SILENT
  const { coffeeBean } = useCoffee();

  //!!END
  return (
    <div className="selected-coffee">
      {/*!!ADD */}
      {/* <h2>Current Selection: </h2> */}
      {/*!!END_ADD */}
      {/*!!START SILENT */}
      <h2>Current Selection: {coffeeBean.name} </h2>
      {/*!!END */}
    </div>
  );
}

export default SelectedCoffeeBean;
