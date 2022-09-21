import { AccountCircle } from "@mui/icons-material";
import { Avatar, Toolbar } from "@mui/material";
import { Box } from "@mui/system";
import { matchRoutes, useLocation, renderMatches } from "react-router";
import routesConfig from "../config/routes";
import Sidebar from "./Sidebar";

const sidebarWidth = 240;

const Layout: React.FC = () => {
  const location = useLocation();

  const matches = matchRoutes(routesConfig, location);
  console.log(matches);

  return (
    <div>
      <Sidebar width={sidebarWidth} />
      <main style={{ marginLeft: sidebarWidth, height: "100vh" }}>
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
        {renderMatches(matches)}
      </main>
    </div>
  );
};

export default Layout;
