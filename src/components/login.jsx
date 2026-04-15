import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import VisibilityIcon from "@mui/icons-material/Visibility";
import Link from "@mui/material/Link";
import { useNavigate } from "react-router-dom";
import {useDetails} from "../customhooks/usedetails"
import { validateForm } from "../helper/helper"
import Requirment from "../components/requirment"

export default function Login() {
    const {
      userName,
      password,
      showPassword,
      error,
      setUrUserName,
      setUrPassword,
      setUrShowPassword,
      setUrError,
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
      return
    }
    setUrError("");
  };
  return (
    <div className="min-h-screen w-full bg-[#E597E6] flex items-center justify-center">
      <div className="bg-white w-full max-w-lg rounded-2xl shadow-xl p-8">
        <h2 className="text-3xl font-bold mb-4">Login</h2>
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
          <Button
            type="submit"
            sx={{ fontSize: "8px" }}
            variant="contained"
            color="primary"
          >
            Login
          </Button>
          <div className="flex mt-4 gap-1">
            <span>Don't have an account?</span>
            <Link onClick={() => navigate("/signin")}>Sign In</Link>
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
