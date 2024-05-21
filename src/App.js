import React from 'react';
import './App.css';
import Home from './pages/Home';
import LoginPage from './pages/LoginPage';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import CardPage from './pages/CardPage';
import ChecckOut from './pages/CheckOut';
import SignupPage from './pages/SignupPage';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <Home/>
      ),
    },
    {
      path: "/login",
      element:<LoginPage/>,
    },
    {
      path: "/signup",
      element:<SignupPage/>,
    },
    {
      path: "/cart",
      element:<CardPage/>,
    },
    {
      path: "/checkout",
      element:<ChecckOut/>,
    },
 
  ]);
  return (
    <div className="App">
  <RouterProvider router={router} />
    </div>
  );
}

export default App;
