import {
  createTheme,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ThemeProvider,
  Toolbar,
} from "@mui/material";
import { useMemo } from "react";
import { navigationConfig } from "../config/navigation";
import { Link } from "react-router-dom";

interface PropTypes {
  width: number;
}

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

const Sidebar: React.FC<PropTypes> = ({ width }) => {
  const navItems = useMemo(() => {
    return navigationConfig.map(({ label, to, icon: ItemIcon }) => (
      <ListItem
        key={to}
        component={({ innerRef, ...props }) => (
          <Link {...props} to={to || ""} />
        )}
      >
        {ItemIcon && (
          <ListItemIcon>
            <ItemIcon></ItemIcon>
          </ListItemIcon>
        )}
        <ListItemText>{label}</ListItemText>
      </ListItem>
    ));
  }, []);

  return (
    <ThemeProvider theme={darkTheme}>
      <Drawer
        sx={{
          width,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width,
            boxSizing: "border-box",
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar>Subscription Manager</Toolbar>
        <Divider />

        <List>{navItems}</List>
      </Drawer>
    </ThemeProvider>
  );
};

export default Sidebar;
