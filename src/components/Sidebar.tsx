import {
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
} from "@mui/material";
import { useMemo } from "react";
import { navigationConfig } from "../config/navigation";
import { Link } from "react-router-dom";

const drawerWidth = 240;

export default function Sidebar() {
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
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
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
  );
}
