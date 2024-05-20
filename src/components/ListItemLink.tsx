import { Link } from "react-router-dom";
import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

export interface NavigationItem {
  name: string;
  icon: React.ReactElement;
  link: string;
}

interface LinkItemLinkProps {
  navItem: NavigationItem;
}

const ListItemLink = ({ navItem }: LinkItemLinkProps): JSX.Element => {
  return (
    <ListItem
      component={Link}
      to={navItem.link}
      key={navItem.name}
      disablePadding
    >
      <ListItemButton>
        <ListItemIcon>{navItem.icon}</ListItemIcon>
        <ListItemText primary={navItem.name} />
      </ListItemButton>
    </ListItem>
  );
};

export default ListItemLink;
