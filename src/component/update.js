import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button, Checkbox } from "@mui/material";
import axios from "axios";

export function Update() {
  const navigate = useNavigate();
  const [id, setID] = useState(null);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [checkBox, setCheckbox] = useState(false);

  useEffect(() => {
    setID(localStorage.getItem("id"));
    setFirstName(localStorage.getItem("firstName"));
    setLastName(localStorage.getItem("lastName"));
    setCheckbox(localStorage.getItem("checkBox"));
  }, []);

  const updateAPIData = (e) => {
    e.preventDefault();
    console.log("Id...", id);
    axios
      .put(`https://63b430b09f50390584a98736.mockapi.io/UserData/${id}`, { 
        firstName:firstName,
        lastName:lastName,
        checkBox:checkBox
      })
      .then(() => {
        navigate.push("/read");
      });
      console.log(id)
  };
  return (
    <div className="crud-form">
      <form onSubmit={updateAPIData}>
        <div>
          <label>First Name</label>
          <input
          value={firstName}
            placeholder="Update First Name"
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div>
          <label>Last Name</label>
          <input
          value={lastName}
            placeholder="Update Last Name"
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <div>
          <Checkbox label="" onChange={() => setCheckbox(!checkBox)} checked={checkBox} />I agree
          to the Terms and Conditions
        </div>
        <Button type="submit" variant="contained" className="form-button" onClick={updateAPIData}>
          Update
        </Button>
<Link to={"/read"}>
<Button variant="contained" className="form-button">Back</Button>
</Link>

      </form>
    </div>
  );
}
