import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import axios from "axios";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

export function Read() {
  const [APIData, setAPIData] = useState([]);
  useEffect(() => {
    axios
      .get(`https://63b430b09f50390584a98736.mockapi.io/UserData`)
      .then((response) => {
        console.log(response.data);
        setAPIData(response.data);
      });
  }, []);

  const setData = (id, firstName, lastName, checkBox) => {
    localStorage.setItem("id", id);
    localStorage.setItem("firstName", firstName);
    localStorage.setItem("lastName", lastName);
    localStorage.setItem("checkBox", checkBox);
  };

  const getData = () => {
    axios
      .get(`https://63b430b09f50390584a98736.mockapi.io/UserData`)
      .then((getData) => {
        setAPIData(getData.data);
      });
  };

  const onDelete = (id) => {
    axios
      .delete(`https://63b430b09f50390584a98736.mockapi.io/UserData/${id}`)
      .then(() => {
        getData();
      });
  };

  return (
    <div className="read-table">
      <TableContainer component={Paper}>
        <Table  aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>FirstName</TableCell>
              <TableCell>LastName</TableCell>
              <TableCell>CheckBox</TableCell>
              <TableCell>Update</TableCell>
              <TableCell>Delete</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {APIData.map((data) => {
              return (
                <TableRow>
                  <TableCell> {data.firstName}</TableCell>
                  <TableCell>{data.lastName}</TableCell>
                  <TableCell>
                    {data.checkBox ? "Checked" : "Unchecked"}
                  </TableCell>

                  <Link to="/update">
                    <TableCell>
                      <Button
                      variant="contained"
                      className="form-button"
                        onClick={() =>
                          setData(
                            data.id,
                            data.firstName,
                            data.lastName,
                            data.checkBox
                          )
                        }
                      >
                        Update
                      </Button>
                    </TableCell>
                  </Link>
                  <TableCell>
                    <Button
                    variant="contained"
                    className="form-button"
                      onClick={() =>
                        onDelete(
                          data.id,
                          data.firstName,
                          data.lastName,
                          data.checkBox
                        )
                      }
                    >
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
