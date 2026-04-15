import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import VisibilityIcon from "@mui/icons-material/Visibility";
import Link from "@mui/material/Link";
import { useNavigate } from "react-router-dom";
import {useDetails} from "../customhooks/usedetails"
import {validateForm} from "../"

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
  const validateForm = ({ userName, password, validations, userNameRegex }) => {
    if (!userName) return "Please enter user name";

    if (!userNameRegex.test(userName)) return "Invalid UserName";

    if (!password) return "Please enter Password";

    if (!Object.values(validations).every(Boolean)) {
      return "Password needs to match requirements";
    }

    return null;
  };
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
          <div className="mt-4 bg-gray-100 p-4 rounded-lg">
            <p className="font-semibold mb-2">Username Requirement</p>

            <ul className="space-y-1 text-sm">
              <li
                className={
                  userNameRegex.test(userName)
                    ? "text-green-600"
                    : "text-red-500"
                }
              >
                {userNameRegex.test(userName) ? "✔" : "✖"} Min 3 & Max 20
                Characters
              </li>
            </ul>
          </div>
          <div className="mt-4 bg-gray-100 p-4 rounded-lg">
            <p className="font-semibold mb-2">Password Requirements</p>

            <ul className="space-y-1 text-sm">
              <li
                className={
                  validations.capital ? "text-green-600" : "text-red-500"
                }
              >
                {validations.capital ? "✔" : "✖"} One uppercase letter
              </li>

              <li
                className={
                  validations.small ? "text-green-600" : "text-red-500"
                }
              >
                {validations.small ? "✔" : "✖"} One lowercase letter
              </li>

              <li
                className={
                  validations.number ? "text-green-600" : "text-red-500"
                }
              >
                {validations.number ? "✔" : "✖"} One number
              </li>

              <li
                className={
                  validations.special ? "text-green-600" : "text-red-500"
                }
              >
                {validations.special ? "✔" : "✖"} One special character
                (!@#$%&*?)
              </li>

              <li
                className={
                  validations.length ? "text-green-600" : "text-red-500"
                }
              >
                {validations.length ? "✔" : "✖"} Minimum 8 characters
              </li>
            </ul>
          </div>
        </form>
      </div>
    </div>
  );
}
