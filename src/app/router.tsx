import { createBrowserRouter } from "react-router-dom";
import PublicLayout from "../layouts/PublicLayout";

import HomePage from "../pages/Home";
import CatalogPage from "../pages/Catalog";
import OriginPage from "../pages/Origin";
import TraceabilityPage from "../pages/Traceability";
import SustainabilityPage from "../pages/Sustainability";
import LogisticsPage from "../pages/Logistics/index";
import AboutPage from "../pages/About";
import ContactPage from "../pages/Contact";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <PublicLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "catalog", element: <CatalogPage /> },
      { path: "origin", element: <OriginPage /> },
      { path: "traceability", element: <TraceabilityPage /> },
      { path: "sustainability", element: <SustainabilityPage /> },
      { path: "logistics", element: <LogisticsPage /> },
      { path: "about", element: <AboutPage /> },
      { path: "contact", element: <ContactPage /> },
    ],
  },
  
]);