import { createBrowserRouter } from "react-router-dom";
import PublicLayout from "@/layouts/PublicLayout";
import PortalLayout from "@/layouts/PortalLayout";

import HomePage from "@/pages/Home";
import SolutionsPage from "@/pages/Solutions";
import InternationalPage from "@/pages/International";
import AboutPage from "@/pages/About";
import ContactPage from "@/pages/Contact";
import InventoryPage from "@/pages/Inventory";
import PortalPage from "@/pages/Portal";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <PublicLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "solutions", element: <SolutionsPage /> },
      { path: "international", element: <InternationalPage /> },
      { path: "about", element: <AboutPage /> },
      { path: "contact", element: <ContactPage /> },
      { path: "inventory", element: <InventoryPage /> },
    ],
  },
  {
    path: "/portal",
    element: <PortalLayout />,
    children: [{ index: true, element: <PortalPage /> }],
  },
]);