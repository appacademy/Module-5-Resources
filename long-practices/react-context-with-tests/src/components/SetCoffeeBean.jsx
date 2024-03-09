//!!START SILENT
import { useCoffee } from '../context/CoffeeContext';

//!!END
const SetCoffeeBean = ({ coffeeBeans }) => {
  //!!START SILENT
  const { coffeeBean, setCoffeeBeanId } = useCoffee();

  //!!END
  return (
    <div className="set-coffee-bean">
      <h2>Select a Coffee Bean</h2>
      <select
        name="coffee-bean"
        //!!START SILENT
        value={coffeeBean.id}
        onChange={(e) => setCoffeeBeanId(e.target.value)}
        //!!END
      >
        {coffeeBeans.map(bean => (
          <option
            key={bean.id}
            value={bean.id}
          >
            {bean.name}
          </option>
        ))}
      </select>
    </div>
  );
}

export default SetCoffeeBean;
