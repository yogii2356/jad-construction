import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Services } from "./pages/Services";
import { ServiceDetail } from "./pages/ServiceDetail";
import { Projects } from "./pages/Projects";
import { Contact } from "./pages/Contact";
import { NotFound } from "./pages/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "about", Component: About },
      { path: "services", Component: Services },
      { path: "services/structure-analysis-and-design", Component: ServiceDetail },
      { path: "services/construction", Component: ServiceDetail },
      { path: "services/architecture-planning", Component: ServiceDetail },
      { path: "services/3d-interior-and-exterior", Component: ServiceDetail },
      { path: "services/landscaping", Component: ServiceDetail },
      { path: "services/surveying", Component: ServiceDetail },
      { path: "projects", Component: Projects },
      { path: "contact", Component: Contact },
      { path: "*", Component: NotFound },
    ],
  },
]);
