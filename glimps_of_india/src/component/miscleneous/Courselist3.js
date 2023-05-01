import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import courselogo6 from "../../images/courselogo6.jpg";
import courselogo7 from "../../images/courselogo7.jpg";
import Typography from "@mui/material/Typography";

export const Courselist = () => {
  return (
    <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Travis Howard" src={courselogo6} />
        </ListItemAvatar>
        <ListItemText primary="BBA"/>
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Travis Howard" src={courselogo7} />
        </ListItemAvatar>
        <ListItemText primary="MBA" />
      </ListItem>
      <Divider variant="inset" component="li" />
    </List>
  );
};

export default Courselist;
