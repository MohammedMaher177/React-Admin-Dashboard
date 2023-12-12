import React, { useEffect } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import { Ecommerce, Orders, Calendar, Employees, Stacked, Pyramid, Customers, Kanban, Line, Area, Bar, Pie, Financial, ColorPicker, ColorMapping, Editor } from './pages';
import './App.css';

import { useStateContext } from './contexts/ContextProvider';
import Layout from './components/Layout/Layout';
import Notfound from './components/Notfound/Notfound';
import { store } from './Redux/Store.js';

const App = () => {
  const router = createBrowserRouter([{
    path: '/',
    element: <Layout />,
    children: [
      { index: true,
        element: <Ecommerce /> },
      { path: '/ecommerce', element: <Ecommerce /> },
      { path: '/employees', element: <Employees /> },
      { path: '/orders', element: <Orders /> },
      { path: '/customers', element: <Customers /> },
      { path: '/kanban', element: <Kanban /> },
      { path: '/editor', element: <Editor /> },
      { path: '/calendar', element: <Calendar /> },
      { path: '/color-picker', element: <ColorPicker /> },
      { path: '/line', element: <Line /> },
      { path: '/area', element: <Area /> },
      { path: '/bar', element: <Bar /> },
      { path: '/pie', element: <Pie /> },
      { path: '/financial', element: <Financial /> },
      { path: '/color-mapping', element: <ColorMapping /> },
      { path: '/pyramid', element: <Pyramid /> },
      { path: '/stacked', element: <Stacked /> },
      { path: '/*', element: <Notfound /> },
    ],
  }]);
  const { setCurrentColor, setCurrentMode, currentMode } = useStateContext();

  useEffect(() => {
    const currentThemeColor = localStorage.getItem('colorMode');
    const currentThemeMode = localStorage.getItem('themeMode');
    if (currentThemeColor && currentThemeMode) {
      setCurrentColor(currentThemeColor);
      setCurrentMode(currentThemeMode);
    }
  }, []);

  return (
    <div className={currentMode === 'Dark' ? 'dark' : ''}>
      <Provider store={store}>

        <RouterProvider router={router}>
          <Layout />
        </RouterProvider>
      </Provider>
    </div>
  );
};

export default App;
