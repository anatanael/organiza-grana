import "./index.css";

import { StrictMode } from "react";

import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { DashboardLayout } from "./layouts/DashboardLayout";
import { PublicLayout } from "./layouts/PublicLayout";
import { SingInPage } from "./pages/auth/singin/page";
import { NewCreditCardPage } from "./pages/dashboard/creditCards/new/page";
import { CreditCardPage } from "./pages/dashboard/creditCards/page";
import { CreditCardTransactionsPage } from "./pages/dashboard/creditCards/transactions/page";
import { DashboardPage } from "./pages/dashboard/page";
import { HomePage } from "./pages/page";

const router = createBrowserRouter([
  {
    element: <PublicLayout />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/entrar", element: <SingInPage /> },
    ],
  },
  {
    element: <DashboardLayout />,
    children: [
      { path: "/dashboard", element: <DashboardPage /> },
      {
        path: "/cartoes",
        element: <CreditCardPage />,
      },
      {
        path: "/cartoes/novo",
        element: <NewCreditCardPage />,
      },
      {
        path: "/cartoes/:creditcard/compras",
        element: <CreditCardTransactionsPage />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
