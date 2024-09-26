import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import courselogo5 from "../../images/courselogo5.jpg";
import courselogo3 from "../../images/courselogo3.jpg";


export const Courselist = () => {
  
  return (
    <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Travis Howard" src={courselogo5} />
        </ListItemAvatar>
        <ListItemText primary="BCA" />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Travis Howard" src={courselogo3} />
        </ListItemAvatar>
        <ListItemText primary="MCA" />
      </ListItem>
      <Divider variant="inset" component="li" />
    </List>
  );
};

export default Courselist;