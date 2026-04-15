import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField";
import { useDispatch, useSelector } from "react-redux";
import { popupHandleClose, addTask } from "../feature/todoSlice";
import Button from "@mui/material/Button";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { useState } from "react";

export default function Modal() {
  const dispatch = useDispatch();
  const { popup } = useSelector((state) => state.todo);
  const [taskName, setTaskName] = useState("");
  const [category, setcategory] = useState("work");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!taskName.trim()) {
      alert("Task name is required");
      return;
    }
    dispatch(
      addTask({
        id: Date.now(),
        taskName: taskName,
        category: category,
        status: "Active",
      }),
    );
    setTaskName("");
    setcategory("work");
    dispatch(popupHandleClose());
  };

  return (
    <Dialog
      fullWidth
      maxWidth="sm"
      open={popup}
      onClose={() => dispatch(popupHandleClose())}
    >
      <form onSubmit={handleSubmit}>
        <DialogTitle>Add Task</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            value={taskName}
            onChange={(e) => setTaskName(e.target.value)}
            margin="dense"
            id="Task Name"
            name="Task Name"
            label="Task Name"
            fullWidth
            variant="standard"
            sx={{ marginBottom: "15px" }}
          />
          <FormControl>
            <FormLabel id="demo-row-radio-buttons-group-label">
              Category
            </FormLabel>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
              value={category}
              onChange={(e) => setcategory(e.target.value)}
            >
              <FormControlLabel value="work" control={<Radio />} label="Work" />
              <FormControlLabel
                value="personal"
                control={<Radio />}
                label="Personal"
              />
            </RadioGroup>
          </FormControl>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => dispatch(popupHandleClose())}>Cancel</Button>
          <Button type="submit">Confirm</Button>
        </DialogActions>
      </form>
    </Dialog>
  );
}
