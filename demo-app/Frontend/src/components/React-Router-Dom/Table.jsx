import React, { useState, useEffect } from "react";
import { Box } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { Data } from "./UserDetail";
import Navbar from "./Navbar";

const Table = () => {
  const [array, setArray] = useState(Data);

  useEffect(() => {
    const fetchData = () => {
      setArray(Data);
    };

    const intervalId = setInterval(fetchData, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const columns = [
    {field: "id", headerName: "ID"},
    { field: "firstname", headerName: "First Name", flex:1 },
    { field: "lastname", headerName: "last Name", flex: 1 },
    { field: "email", headerName: "Email", flex: 1 },
    { field: "password", headerName: "Password", flex: 1 },
  ];

  return (
    <Box m="20px">
      <Navbar/>
      <h1>REACT MUI TABLE</h1>
      <Box m="40px 0 0 0" height="75vh">
        <DataGrid rows={Data} columns={columns} checkboxSelection />
      </Box>
    </Box>
  );
};

export default Table;
