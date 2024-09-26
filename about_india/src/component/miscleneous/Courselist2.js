import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import courselogo4 from "../../images/courselogo4.jpg";
import courselogo8 from "../../images/courselogo8.jpg";
import courselogo9 from "../../images/courselogo9.jpg";
import Typography from "@mui/material/Typography";

export const Courselist = () => {
  return (
    <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Travis Howard" src={courselogo4} />
        </ListItemAvatar>
        <ListItemText primary="BDS" />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Travis Howard" src={courselogo8} />
        </ListItemAvatar>
        <ListItemText primary="MBBS" />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Cindy Baker" src={courselogo9} />
        </ListItemAvatar>
        <ListItemText primary="MD/MS" />
      </ListItem>
      <Divider variant="inset" component="li" />
    </List>
  );
};

export default Courselist;
