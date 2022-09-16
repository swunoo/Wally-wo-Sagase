import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './components/Home';
import Play from './components/Play';
import Community from './components/Community';
import About from './components/About';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';




const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>
  },
  {
    path: "/play",
    element: <Play/>
  },
  {
    path: "/community",
    element: <Community/>
  },
  {
    path: "/about",
    element: <About/>
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div className="index m-auto">
    <React.StrictMode>
      <RouterProvider router={router}/>
    </React.StrictMode>
  </div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();