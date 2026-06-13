import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { MainLayout } from "@/layouts/MainLayout";
import Home from "@/pages/Home";
import AboutPage from "@/pages/About";
import ServicesPage from "@/pages/Services";
import ProductsPage from "@/pages/Products";
import GalleryPage from "@/pages/Gallery";
import ContactPage from "@/pages/Contact";
import { APP_ROUTES } from "@/constants";

const router = createBrowserRouter([
  {
    path: APP_ROUTES.HOME,
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about",
        element: <AboutPage />,
      },
      {
        path: "services",
        element: <ServicesPage />,
      },
      {
        path: "products",
        element: <ProductsPage />,
      },
      {
        path: "gallery",
        element: <GalleryPage />,
      },
      {
        path: "contact",
        element: <ContactPage />,
      },
    ],
  },
]);

export function AppRouter() {
  return <RouterProvider router={router} />;
}
