import "./App.css";
import { Create } from "./component/create";
import { Read } from "./component/read";
import { Update } from "./component/update";
import { Routes , Route, useNavigate } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import { Button, Toolbar } from "@mui/material";
import { Home } from "./component/home";

function App() {
  const naviagte = useNavigate();
  return (
      <div className="App">
        
      <AppBar>
        <Toolbar>
          <Button onClick={()=> naviagte("/")} color="inherit">Home</Button>
          <Button onClick={()=> naviagte("/create")} color="inherit">Create</Button>
          <Button onClick={() => naviagte("/read")} color="inherit">Read</Button>
          <Button onClick={() => naviagte("/update")} color="inherit">Update</Button>
        </Toolbar>
      </AppBar>
      
      <Routes>
        <Route path="/" element={<Home/>}/>
          <Route path="/create" element={<Create/>} />
          <Route path="/read" element={<Read/>} />
          <Route path="/update" element={<Update/>} />
          </Routes>
         
      </div>
  );
}

export default App;
