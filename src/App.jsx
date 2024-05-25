import './App.css';
import Dashboard from './components/pages/Dashboard';
import Electricity from './components/pages/Electricity';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
  },
  {
    path: "/electricity",
    element: <Electricity />
  }
]);

function App() {

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
};
import { fromJSON } from 'postcss';

export default App;

