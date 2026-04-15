import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import VisibilityIcon from "@mui/icons-material/Visibility";
import Requirment from "../components/requirment";
import { useDetails } from "../customhooks/usedetails";
import Link from "@mui/material/Link";
import { useNavigate } from "react-router-dom";
import { validateForm } from "../helper/helper";

export default function SignIn() {
  const {
    userName,
    password,
    showPassword,
    error,
    age,
    setUrUserName,
    setUrPassword,
    setUrShowPassword,
    setUrError,
    setUrAge,
  } = useDetails();
  const navigate = useNavigate();
  const validations = {
    length: password.length >= 8,
    capital: /[A-Z]/.test(password),
    small: /[a-z]/.test(password),
    number: /[0-9]/.test(password),
    special: /[!@#$%&*?]/.test(password),
  };
  const userNameRegex = /^(?=.*[A-Za-z])[A-Za-z_0-9]{3,20}$/;
  const handleSubmit = (e) => {
    e.preventDefault();
    const errorMsg = validateForm({
      userName,
      password,
      validations,
      userNameRegex,
    });
    if (errorMsg) {
      setUrError(errorMsg);
      return;
    }
    if (!age) {
      setUrError("Please provide your age");
      return;
    }
    setUrError("");
  };
  return (
    <div className="min-h-screen w-full bg-[#E597E6] flex items-center justify-center">
      <div className="bg-white w-full max-w-lg rounded-2xl shadow-xl p-8">
        <h2 className="text-3xl font-bold mb-4">Sign In</h2>
        <form onSubmit={handleSubmit}>
          {error && (
            <p className="my-4 text-md font-bold text-red-500">{error}</p>
          )}
          <TextField
            fullWidth
            label="User Name"
            id="fullWidth"
            onChange={(e) => setUrUserName(e.target.value)}
          />
          <div className="my-4">
            <TextField
              fullWidth
              label="Age"
              id="fullWidth"
              type="number"
              onChange={(e) => setUrAge(e.target.value)}
            />
          </div>
          <div className="flex my-4">
            <TextField
              fullWidth
              label="Password"
              id="fullWidth"
              type={showPassword ? "text" : "password"}
              onChange={(e) => setUrPassword(e.target.value)}
            />
            <IconButton onClick={() => setUrShowPassword(!showPassword)}>
              <VisibilityIcon />
            </IconButton>
          </div>
          <div className="my-4">
            <Button
              type="submit"
              sx={{ fontSize: "8px" }}
              variant="contained"
              color="primary"
            >
              Sign In
            </Button>
          </div>
          <div className="flexgap-1">
            <span>Already have an account?</span>
            <Link onClick={() => navigate("/")}>Log In</Link>
          </div>
          <Requirment
            validations={validations}
            userNameRegex={userNameRegex}
            userName={userName}
          />
        </form>
      </div>
    </div>
  );
}
