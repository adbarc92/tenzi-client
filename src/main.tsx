import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ErrorPage from "./routes/ErrorPage.tsx";
import QuizPage from "./routes/QuizPage.tsx";
import StudyGuidePage from "./routes/StudyGuidePage.tsx";
import TermsPage from "./routes/TermsPage.tsx";
import CategoriesPage from "./routes/CategoriesPage.tsx";
import AccountPage from "./routes/AccountPage.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "quiz",
        element: <QuizPage />,
      },
      {
        path: "study-guide",
        element: <StudyGuidePage />,
      },
      {
        path: "terms",
        element: <TermsPage />,
      },
      {
        path: "categories",
        element: <CategoriesPage />,
      },
      {
        path: "account",
        element: <AccountPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
