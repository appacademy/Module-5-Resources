// To run this bonus version, import it in main.jsx
import harvardArt from './data/harvardArt';
import { createBrowserRouter, createRoutesFromElements, RouterProvider, 
         Route, Outlet, useRouteError, isRouteErrorResponse } from 'react-router-dom';
import GalleryNavigation from './components/GalleryNavigation';
import GalleryView from './components/GalleryView';
import ArtDescription from './components/ArtDescription';

function Layout() {
  return (
    <div className="page-wrapper">
      <GalleryNavigation galleries={harvardArt.records} />
      <main>
        <Outlet />
      </main>
    </div>
  );
}

function PageMissing() {
  const error = useRouteError();
  if (isRouteErrorResponse(error)) 
    console.log(`${error.status} ${error.statusText} ${error.data}`);
  return <h2>Page Not Found</h2>;
}

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Layout />} errorElement={<PageMissing />}>
      <Route path="/" element={
        <>
          <h2>Harvard Art Museum</h2>
          <p>
            Look, but Don&apos;t Touch. Please select a Gallery in the navigation
            bar.
          </p>
        </>
      } />
      <Route path="galleries/:galleryId" element={<Outlet />} errorElement={<PageMissing />}>
        <Route index element={<GalleryView galleries={harvardArt.records} />} />
        <Route path="art/:artId" element={<ArtDescription galleries={harvardArt.records} />} />
        <Route path="*" element={<PageMissing />} />
      </Route>
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />
}

export default App;

