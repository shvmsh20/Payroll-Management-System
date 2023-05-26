import React, { useState } from "react";
import logo from "../Assets/Logo.png";
import "../StyleSheets/Welcome.css";
import "../StyleSheets/AdminOptions.css";
import Modal from "react-modal";
import { Redirect } from "react-router-dom";
import ReactDOM from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faPen } from "@fortawesome/free-solid-svg-icons";
import { useHistory } from "react-router-dom";

const AdminDashboard = () => {
  const [showId, setShowid] = useState(0);
  const [adminModal, setAdminmodal] = useState(false);
  const [userModal, setUsermodal] = useState(false);
  // console.log("Value set to ", showId);
  let history = useHistory();

  return (
    <div className="App">
      <header>
        <h1>Payroll Management System</h1>
        <hr className="Underline" />
        <img src={logo} alt="logo"></img>
      </header>
      <div
        className="Login"
        style={{
          justifyContent: "center",
          alignItems: "center",
          alignContent: "center",
          alignSelf: "center",
          display: "flex",
          flexDirection: "row",
          // width: "80%",
          // backgroundColor: "grey",
        }}
      >
        <div
          className="Login-button"
          onClick={() => history.push("/adminAddInfo")}
        >
          <FontAwesomeIcon icon={faPlus} />
          <h4>Add Info</h4>
        </div>
        <div className="Login-button"
            onClick={() => history.push("/adminUpdateInfo")}>
          <FontAwesomeIcon icon={faPen} />
          <h4>Update Info</h4>
        </div>
      </div>

      <div className="Film"></div>
    </div>
  );
};
const styles = {
  content: {
    // align:"center",
    // width: "20%",
  },
};
export default AdminDashboard;
