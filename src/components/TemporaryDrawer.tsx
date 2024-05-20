import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import {
  AccountBox,
  Category,
  MenuBook,
  Notes,
  Quiz,
} from "@mui/icons-material";
import ListItemLink from "./ListItemLink";
import { NavigationItem } from "./ListItemLink";

const TopNavigationItems: NavigationItem[] = [
  {
    name: "Quiz",
    icon: <Quiz />,
    link: "/quiz",
  },
  {
    name: "Study Guide",
    icon: <MenuBook />,
    link: "/study-guide",
  },
  {
    name: "Terms",
    icon: <Notes />,
    link: "/terms",
  },
  {
    name: "Categories",
    icon: <Category />,
    link: "/categories",
  },
];

const BottomNavigationItems: NavigationItem[] = [
  {
    name: "Account",
    icon: <AccountBox />,
    link: "/account",
  },
];

interface TemporaryDrawerProps {
  toggleDrawer: () => void;
  isDrawerOpen: boolean;
}

export default function TemporaryDrawer({
  toggleDrawer,
  isDrawerOpen,
}: TemporaryDrawerProps) {
  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={() => toggleDrawer()}>
      <List key={"TopNavigationItems"}>
        {TopNavigationItems.map((navItem) => (
          <ListItemLink
            key={`${navItem.name}-list-item-link`}
            navItem={navItem}
          />
        ))}
      </List>
      <Divider />
      <List key={"BottomNavigationItems"}>
        {BottomNavigationItems.map((navItem) => (
          <ListItemLink
            key={`${navItem.name}-list-item-link`}
            navItem={navItem}
          />
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      <Drawer open={isDrawerOpen} onClose={() => toggleDrawer()}>
        {DrawerList}
      </Drawer>
    </div>
  );
}
