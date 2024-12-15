import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import ErrorPage from './pages/ErrorPage.tsx';
import QuizPage from './pages/QuizPage.tsx';
import StudySetPage from './pages/StudyGuidePage.tsx';
import TermsPage from './pages/TermsPage.tsx';
import CategoriesPage from './pages/CategoriesPage.tsx';
import AccountPage from './pages/AccountPage.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: 'quiz',
        element: <QuizPage />,
      },
      {
        path: 'study-guide',
        element: <StudySetPage />,
      },
      {
        path: 'terms',
        element: <TermsPage />,
      },
      {
        path: 'categories',
        element: <CategoriesPage />,
      },
      {
        path: 'account',
        element: <AccountPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
