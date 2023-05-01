import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import courselogo10 from "../../images/courselogo10.jpg";
import courselogo11 from "../../images/courselogo11.jpg";
import courselogo12 from "../../images/courselogo12.jpg";
import courselogo13 from "../../images/courselogo13.jpg";
import courselogo14 from "../../images/courselogo14.jpg";
import Typography from "@mui/material/Typography";

export const Courselist = () => {
  return (
    <List sx={{ width: "70%", maxWidth: 360, bgcolor: "background.paper" }}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Travis Howard" src={courselogo11} />
        </ListItemAvatar>
        <ListItemText primary="B.Tech" />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Travis Howard" src={courselogo10} />
        </ListItemAvatar>
        <ListItemText primary="B.Arch" />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Travis Howard" src={courselogo12} />
        </ListItemAvatar>
        <ListItemText primary="M.Tech" />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Travis Howard" src={courselogo13} />
        </ListItemAvatar>
        <ListItemText primary="BE" />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Travis Howard" src={courselogo14} />
        </ListItemAvatar>
        <ListItemText primary="ME" />
      </ListItem>
      <Divider variant="inset" component="li" />
    </List>
  );
};

export default Courselist;
