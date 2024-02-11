import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider,
         Navigate } from 'react-router-dom';
import Greenhouse from './components/Greenhouse';
import Navigation from './components/Navigation';
import Thermometer from './components/Thermometer';
import Hygrometer from './components/Hygrometer';
//!!START SILENT
// To run the bonus Thermometer and Hygrometer, comment out the preceding 2
// lines and uncomment the following 2 lines:
// import Thermometer from './components/Thermometer/ThermometerBonus';
// import Hygrometer from './components/Hygrometer/HygrometerBonus';
//!!END

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Navigation />} >
      <Route path="thermometer" element={<Thermometer />} />
      <Route path="hygrometer" element={<Hygrometer />} />
      <Route path="/" element={<Greenhouse />} />
      <Route path ="*" element={<Navigate to="/" replace />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
