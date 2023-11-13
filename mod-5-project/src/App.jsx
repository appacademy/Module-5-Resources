import { createBrowserRouter, RouterProvider, createRoutesFromElements, Route, Outlet } from 'react-router-dom';
import FancyNav from './components/FancyNav';
import Input from './components/Input';
import SomewheresElse from './components/SomewheresElse';
import LegacyReact from './components/LegacyReact';

const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<Layout />}>
    <Route index element={<h2>home page</h2>} />
    <Route path='somewheres-else' element={<SomewheresElse />} />
    <Route path='nested'>
      <Route index element={<h1>hi from nested!</h1>} />
      <Route path='route' element={<Input />} />
    </Route>
    <Route path='/classes' element={<LegacyReact />} />
    <Route path='*' element={<h1>oops that is a 404!</h1>} />
  </Route>
))

function Layout() {
  return (
    <>
      <FancyNav />
      <Outlet />
    </>
  )
}

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;