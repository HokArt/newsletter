import React from "react";
import Main from "./main/main";
import Success from "./components/success";
import { BrowserRouter, RouterProvider, createBrowserRouter } from 'react-router-dom';
import './styles/app.css';

const router = createBrowserRouter([
  {
    path: '/newsletter',
    element: <Main/>
  },
  {
    path: '/newsletter/success',
    element: <Success/>
  }
])

function App() {
  return (
    <BrowserRouter basename="/newsletter">
      <div className="App">
        <RouterProvider router={router}/>
      </div>
    </BrowserRouter>
  );
}

export default App;