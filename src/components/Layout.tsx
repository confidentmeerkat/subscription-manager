import { useState, useEffect } from "react";
import { AccountCircle } from "@mui/icons-material";
import { Avatar, Toolbar } from "@mui/material";
import { Box } from "@mui/system";
import { matchRoutes, useLocation, renderMatches } from "react-router";
import routesConfig from "../config/routes";
import Sidebar from "./Sidebar";
import layoutConfig from "../config/layout";

const sidebarWidth = 240;

const Layout: React.FC = () => {
  const location = useLocation();

  const matches = matchRoutes(routesConfig, location);
  const [
    {
      route: { settings },
    },
  ]: any = matches || [{}];

  const [layout, setLayout] = useState(layoutConfig.default);

  console.log("settings :", settings);

  useEffect(() => {
    if (settings && settings.layout) {
      setLayout((layout) => ({ ...layout, ...settings.layout }));
    }
  }, [settings]);

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
