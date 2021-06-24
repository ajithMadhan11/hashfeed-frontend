
import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import AddCircleRoundedIcon from '@material-ui/icons/AddCircleRounded';
import EventRoundedIcon from '@material-ui/icons/EventRounded';
import PeopleIcon from '@material-ui/icons/People';
import ExitToAppRoundedIcon from '@material-ui/icons/ExitToAppRounded';
import AssignmentIcon from '@material-ui/icons/Assignment';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

const toggleComponent=e=>{
    e.preventDefault();
    alert(e.target.value)
}

export const mainListItems = (
  <div>
      {/* onClick={toggleComponent(1)} */}
    <ListItem  button value="1" onClick={toggleComponent}  >
      <ListItemIcon>
        <AddCircleRoundedIcon />
      </ListItemIcon>
      <ListItemText primary="Add Event" />
    </ListItem>
    <ListItem button >
      <ListItemIcon>
        <EventRoundedIcon />
      </ListItemIcon>
      <ListItemText primary="My Events" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
       <AssignmentIcon/>
      </ListItemIcon>
      <ListItemText primary="Joined Events" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
      <PeopleIcon />
      </ListItemIcon>
      <ListItemText primary="User Details" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <ExitToAppRoundedIcon />
      </ListItemIcon>
      <ListItemText primary="Logout" />
    </ListItem>
  </div>
);
