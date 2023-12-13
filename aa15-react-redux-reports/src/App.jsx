import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ReportsIndex from './components/ReportsIndex'
import CreateReportForm from './components/CreateReportForm'
import EditReportForm from './components/EditReportForm'
import ReportShow from './components/ReportShow'

const router = createBrowserRouter([
  {
    path: "/",
    element: <ReportsIndex />
  },
  {
    path: "reports/new",
    element: <CreateReportForm />
  },
  {
    path: "reports/:reportId",
    element: <ReportShow />
  },
  {
    path: "reports/:reportId/edit",
    element: <EditReportForm />
  }
]);

const App = () => (
  <>
    <h1>Progress Tracker Lite</h1>
    <RouterProvider router={router} />
  </>
);

export default App;
