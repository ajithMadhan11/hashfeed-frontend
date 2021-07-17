import {
  faCalendarAlt,
  faTrashAlt,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Divider } from "@material-ui/core";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Modal from "@material-ui/core/Modal";
import { makeStyles } from "@material-ui/core/styles";
import React, { useState } from "react";
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";
import { selectUsers } from "../redux/userSlice";
import "../styles/miniCards.css";
import {
  deletepost,
  participantsofEvent,
  updatepost,
} from "./UserDashboard/UserDashboardApiHelpers";

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}
const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    top: "20%",
    marginTop: "8%",
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
  },
  modalStyle1: {
    marginTop: "40px",
    height: "550px",
    overflow: "scroll",
  },
}));

const MiniCards = ({ p_title, p_date, p_participants, p_post_id, p_link }) => {
  const user = useSelector(selectUsers);
  const { id, token } = user;

  const [sidebar, setsidebar] = useState(false);
  const history = useHistory();
  const [modalStyle] = React.useState(getModalStyle);
  const classes = useStyles();
  const [openModal, setOpenModal] = useState(false);
  const [participants, setparticipants] = useState("");
  const [state, setstate] = useState({
    title: p_title,
    date: p_date,
    formData: new FormData(),
    error: "",
    link: p_link,
    redirect: false,
  });

  const { title, date, link, formData, redirect } = state;

  const toggleDrawer = (open, post_id) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    if(post_id){
      participantsofEvent(id, token, post_id).then((data) => {
        if (data.error) {
          console.log("Error fetching participants");
        } else {
          setparticipants(data);
        }
      });
    }
    setsidebar(open);
  };

  const handleChange = (name) => (e) => {
    formData.set(name, e.target.value);
    setstate({ ...state, [name]: e.target.value });
  };

  const updateChanges = (p_id) => {
    updatepost(id, p_id, token, formData).then((data) => {
      if (data.error) {
        console.log("Error Updating event");
      } else {
        setOpenModal(false);
        setstate({ ...state, title: data.title });
        setstate({ ...state, date: data.date });
        setstate({ ...state, link: data.link });
        notification("success", "Post Updated Successfully");
      }
    });
  };

  const delPost = (p_id) => {
    const res = window.confirm("Are you sure to delete this post?");
    if (res) {
      deletepost(id, p_id, token).then((data) => {
        if (data.error) {
          console.log("Error Deleting Post");
        } else {
          console.log("Deleted Successfully");
          notification("success", "Post Deleted Successfully");
          window.location.reload();
        }
      });
    }
  };

  const notification = (mode, field) => {
    if (mode == "error") {
      return NotificationManager.error(field, "", 500);
    } else if (mode == "success") {
      return NotificationManager.success(field + " 🙌", "", 500);
    }
  };

  return (
    <div>
      <Modal
        open={openModal}
        className={classes.modalStyle1}
        onClose={() => setOpenModal(false)}
      >
        <div style={modalStyle} className={classes.paper}>
          <div className="col">
            <div className="containerx">
              <p className="signin_head">Update Your Event</p>
              <p className="form_label">Update Title</p>
              <input
                type="text"
                className="form_input"
                placeholder="Enter Event Title"
                value={title}
                onChange={handleChange("title")}
                required
              />
              <p className="form_label">Update Event date</p>
              <input
                type="date"
                className="form_input"
                placeholder="Enter Event Date"
                value={date}
                onChange={handleChange("date")}
                required
              />
              <p className="form_label">update Joining Link</p>
              <input
                type="text"
                className="form_input"
                placeholder="Enter Joining link"
                value={link || ""}
                onChange={handleChange("link")}
              />
              <button
                className="signin_btn"
                onClick={() => updateChanges(p_post_id)}
              >
                Update Changes
              </button>
            </div>
          </div>
        </div>
      </Modal>

      <Drawer anchor="right" open={sidebar} onClose={toggleDrawer(false)}>
        <List>
          {participants &&
            participants.map((part, index) => (
              <ListItem key={index}>
                <ListItemText primary={part.email} />
              </ListItem>
            ))}
        </List>
      </Drawer>

      <div className="miniCards_container">
        <p className="miniCards_title">{title}</p>
        <div className="mini_sec_cont">
          <p className="mini_event_data">
            <FontAwesomeIcon icon={faCalendarAlt} /> {date}
          </p>
          <p className="mini_event_participants">
            <FontAwesomeIcon icon={faUser} /> {p_participants}
          </p>
        </div>
        <div className="btn_cont">
          <button
            className="post_btn_minievent"
            onClick={() => history.push(`/post/${p_post_id}`)}
          >
            View Details
          </button>
          <button
            className="uppost_btn_minievent"
            onClick={() => setOpenModal(true)}
          >
            Update Details
          </button>
          <button
            className="edpost_btn_minievent"
            onClick={toggleDrawer(true, p_post_id)}
          >
            View Participants
          </button>
          <button
            className="delpost_btn_minievent"
            onClick={() => {
              delPost(p_post_id);
            }}
          >
            {" "}
            <FontAwesomeIcon icon={faTrashAlt} />
          </button>
        </div>
      </div>
      <NotificationContainer />
    </div>
  );
};

export default MiniCards;
