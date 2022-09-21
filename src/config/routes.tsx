import Login from "../pages/Login";
import NotExists from "../pages/NotExist";
import Register from "../pages/Register";

interface Route {
  path: string;
  element: JSX.Element;
  settings?: any;
  auth?: boolean;
}

const onlyMain = {
  sidebar: false,
  toolbar: false,
  footer: false,
};

const routesConfig: Route[] = [
  {
    path: "/",
    element: <h1>Welcome</h1>,
  },
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
    auth: true,
  },
];

export default routesConfig;
