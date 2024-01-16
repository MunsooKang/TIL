import React, { useState } from 'react';
import Profile from './components/Profile.jsx';
import Album from './components/Album.jsx';
import Main from './components/Main.jsx';
import Test from './components/Test.jsx';
import './tailwind.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  { path: '/', element: <Main /> },
  { path: '/album', element: <Album /> },
  { path: '/profile', element: <Profile /> },
  { path: '/test', element: <Test /> }
]);

function App() {

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
