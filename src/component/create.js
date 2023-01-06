import React, { useState } from "react";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export function Create() {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [checkBox, setCheckbox] = useState(false);

  const sendDataToAPI = (e) => {
    e.preventDefault();
    axios
    .post(`https://63b430b09f50390584a98736.mockapi.io/UserData`, {
      firstName:firstName,
      lastName:lastName,
      checkBox:checkBox
    }).then(() => {
      navigate.push('/read')
    })
  }

  return (
    <div className="crud-form">
      <form>
        <div>
          <label>First Name</label>
          <input
          value={firstName}
            placeholder="First Name"
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div>
          <label>Last Name</label>
          <input
          value={lastName}
            placeholder="Last Name"
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <div>
          <Checkbox label="" onChange={() => setCheckbox(!checkBox)} />I agree
          to the Terms and Conditions
        </div>
        <Link to={"/read"}>
        <Button className="form-button" type="submit" variant="contained" onClick={sendDataToAPI} >
          Submit
        </Button>
        </Link>
      </form>
    </div>
  );
}
