import { createBrowserRouter } from "react-router-dom";

import HomePage from "./pages/homePage";
import About from "./pages/About";
import Resume from "./pages/Resume";
import Skills from "./pages/Skills";
import Services from "./pages/Services";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/About",
    element: <About />,
  },
  {
    path: "/Resume",
    element: <Resume />,
  },
  {
    path: "/Skills",
    element: <Skills />,
  },
  {
    path: "/Services",
    element: <Services />,
  },
]);

export default router;
