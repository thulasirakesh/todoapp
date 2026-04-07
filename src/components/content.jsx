import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import Mock from '../mock.json'
import { useState } from 'react';

export default function Content () {
    const [button, setButton] = useState("All");
    return (
      <>
        <div>
          <h4 className="text-2xl font-serif">My Tasks</h4>
        </div>
        {Mock.map((user) => (
          <div className="mt-1 mb-4 p-2 rounded-2xl shadow-xl h-15 bg-[#FFF5EE] flex items-center justify-start">
            <FormGroup>
              <FormControlLabel
                control={<Checkbox checked ={user.status === "Complete"} color="success" />}
                label={user.taskname}
                sx={{
                  ".MuiFormControlLabel-label": {
                    fontFamily: "font-serif",
                    fontSize: "20px",
                  },
                }}
              />
            </FormGroup>
          </div>
        ))}
        <Divider />
        <div classname="flex">
          <div className="flex mt-4 gap-4 items-center justify-start">
            <Button
              sx={{ fontSize: "8px" }}
              variant={button === "All" ? "contained" : ""}
              color="primary"
              onClick={() => {setButton("All")}}
            >
              All
            </Button>
            <Button
              sx={{ fontSize: "8px" }}
              variant={button === "Active" ? "contained" : ""}
              color="primary"
                onClick={() => {setButton("Active")}}
            >
              Active
            </Button>
            <Button
              sx={{ fontSize: "8px" }}
              variant={button === "Completed" ? "contained" : ""}
              color="primary"
              onClick={() => {setButton("Completed")}}
            >
              Completed
            </Button>
            <span style={{fontSize: "13px", paddingLeft: "50px"}}>Tasks remaining</span>
          </div>
        </div>
      </>
    );
}