import Login from "../pages/Login";
import NotExists from "../pages/NotExist";
import Register from "../pages/Register";

interface Route {
  path: string;
  element: JSX.Element;
  settings?: any;
}

const onlyMain = {
  sidebar: false,
  toolbar: false,
  footer: false,
};

const routesConfig: Route[] = [
  {
    path: "/register",
    element: <Register />,
    settings: {
      layout: onlyMain,
    },
  },
  {
    path: "/login",
    element: <Login />,
    settings: {
      layout: onlyMain,
    },
  },
  {
    path: "*",
    element: <NotExists />,
    settings: {
      layout: onlyMain,
    },
  },
];

export default routesConfig;
