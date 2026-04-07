import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField";
import { useDispatch, useSelector } from "react-redux";
import { popupHandleClose } from "../feature/todoSlice";
import Button from "@mui/material/Button";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

export default function Modal() {
  const dispatch = useDispatch();
  const { popup } = useSelector((state) => state.todo);
  return (
    <Dialog
      fullWidth
      maxWidth="sm"
      open={popup}
      onClose={() => dispatch(popupHandleClose())}
    >
      <DialogTitle>Add Task</DialogTitle>
      <DialogContent>
        <form>
            <TextField
              autoFocus
              margin="dense"
              id="Task Name"
              name="Task Name"
              label="Task Name"
              fullWidth
              variant="standard"
              sx={{marginBottom: '15px'}}
            />
            <FormControl>
              <FormLabel id="demo-row-radio-buttons-group-label">
                Category
              </FormLabel>
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
                defaultValue="work"
              >
                <FormControlLabel
                  value="work"
                  control={<Radio />}
                  label="Work"
                />
                <FormControlLabel
                  value="personal"
                  control={<Radio />}
                  label="Personal"
                />
              </RadioGroup>
            </FormControl>
        </form>
      </DialogContent>
      <DialogActions>
        <Button onClick={() => dispatch(popupHandleClose())}>Cancel</Button>
        <Button type="submit">Confirm</Button>
      </DialogActions>
    </Dialog>
  );
}
