import NotExists from "../pages/NotExist";

interface Route {
  path: string;
  element: JSX.Element;
}

const routesConfig: Route[] = [
  {
    path: "*",
    element: <NotExists />
  },
];

export default routesConfig;
