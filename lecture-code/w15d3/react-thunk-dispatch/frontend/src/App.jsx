import { createBrowserRouter, RouterProvider, Navigate, Outlet } from 'react-router-dom';
import ArticleList from './components/ArticleList';
import SingleArticle from './components/SingleArticle';
import ArticleInput from './components/ArticleInput';
import './App.css';

function ArticleLayout() {
  return (
    <>
      <ArticleList />
      <Outlet />
      <ArticleInput />
    </>
  )
}

const router = createBrowserRouter([
  {
    path: 'articles',
    element: <ArticleLayout />,
    children: [
      {
        path: ':id',
        element: <SingleArticle />
      }
    ]
  },
  {
    path: '*',
    element: <Navigate to='/articles' replace={true} />
  }
]);

function App() {
  return <RouterProvider router={router} />
}

export default App;
