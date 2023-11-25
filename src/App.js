import React from "react";
import Main from "./main/main";
import Success from "./components/success";
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './styles/app.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main/>
  },
  {
    path: '/success',
    element: <Success/>
  }
])

function App() {
  return (
    <div className="App">
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;