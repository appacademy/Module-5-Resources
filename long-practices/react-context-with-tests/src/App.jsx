//!!START SILENT
import SelectedCoffeeBean from './components/SelectedCoffeeBean';
import SetCoffeeBean from './components/SetCoffeeBean';
//!!END
import coffeeBeans from './mockData/coffeeBeans.json';

function App() {
  return (
    <>
      <h1>Welcome to Coffee App</h1>
      {/*!!START SILENT */}
      <SelectedCoffeeBean />
      <SetCoffeeBean coffeeBeans={coffeeBeans}/>
      {/*!!END */}
    </>
  );
}

export default App;
