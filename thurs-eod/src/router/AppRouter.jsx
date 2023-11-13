import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import Layout from './Layout';
import App from '../components/App'
import ApodShow from '../components/ApodShow';
import LegacyReact from '../components/LegacyReact';

const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<Layout />}>
    <Route index element={<App />}/>
    <Route path='apod' element={<ApodShow />} />
    <Route path='classes' element={<LegacyReact />} />
  </Route>
))

export default function AppRouter() {
  return <RouterProvider router={router} />
}