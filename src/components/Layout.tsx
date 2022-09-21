import { useState, useEffect, useMemo } from "react";
import { AccountCircle } from "@mui/icons-material";
import { Avatar, Toolbar } from "@mui/material";
import { Box } from "@mui/system";
import { matchRoutes, useLocation, renderMatches } from "react-router";
import routesConfig from "../config/routes";
import Sidebar from "./Sidebar";
import layoutConfig from "../config/layout";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import { useNavigate } from "react-router";
import { AuthState } from "../store/features/auth";

const sidebarWidth = 240;

const Layout: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const matches = useMemo(() => {
    return matchRoutes(routesConfig, location);
  }, [location]);

  const [
    {
      route: { settings, auth },
    },
  ]: any = matches || [{}];

  const [layout, setLayout] = useState(layoutConfig.default);

  useEffect(() => {
    if (settings && settings.layout) {
      setLayout((layout) => ({ ...layout, ...settings.layout }));
    } else {
      setLayout(layoutConfig.default);
    }
  }, [settings]);

  const authInfo = useSelector<RootState, AuthState>((state) => state.auth);

  useEffect(() => {
    if (auth && !authInfo?.token) {
      navigate("/login");
    }
  }, [auth]);

  return (
    <div>
      {layout.sidebar && <Sidebar width={sidebarWidth} />}
      <main
        style={{
          marginLeft: layout.sidebar ? sidebarWidth : 0,
          height: "100vh",
        }}
      >
        {layout.toolbar && (
          <Toolbar
            sx={{
              borderBottom: "solid 1px lightgray",
            }}
          >
            <Box display="flex" flexDirection="row-reverse" className="w-full">
              <Avatar>
                <AccountCircle />
              </Avatar>
            </Box>
          </Toolbar>
        )}
        {renderMatches(matches)}
      </main>
    </div>
  );
};

export default Layout;
