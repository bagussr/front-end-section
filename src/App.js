import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainLayout from './components/layouts/MainLayout';
import About from './pages/About';
import FAQ from './pages/FAQ';
import Home from './pages/Home';
import TimeLine from './pages/TimeLine';
import Register from './pages/Register';
import { RegisterDone } from './pages/RegisterDone';

function App() {
  // browser router
  const router = createBrowserRouter([
    {
      path: '/',
      element: <MainLayout />,
      children: [
        {
          path: '/',
          element: <Home />,
        },
        {
          path: '/about',
          element: <About />,
        },
        {
          path: '/faq',
          element: <FAQ />,
        },
        {
          path: '/timeline',
          element: <TimeLine />,
        },
        {
          path: '/register/bootcamp',
          element: <Register />,
        },
        {
          path: '/register/seminar',
          element: <Register />,
        },
        {
          path: '/register/competition',
          element: <Register />,
        },
        {
          path: '/register/done',
          element: <RegisterDone />,
        },
      ],
    },
    // redirect if no match
    {
      path: '*',
      element: <MainLayout />,
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
