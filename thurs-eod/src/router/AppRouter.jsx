import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import Layout from './Layout';
import App from '../components/App'
import ApodShow from '../components/ApodShow';

const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<Layout />}>
    <Route index element={<App />}/>
    <Route path='/apod' element={<ApodShow />} />
  </Route>
))

export default function AppRouter() {
  return <RouterProvider router={router} />
}