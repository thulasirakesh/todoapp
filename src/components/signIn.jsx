import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";

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
      setUrAge
    } = useDetails();
  return (
    <div className="min-h-screen w-full bg-[#E597E6] flex items-center justify-center">
      <div className="bg-white w-full max-w-lg rounded-2xl shadow-xl p-8">
        <h2 className="text-3xl font-bold mb-4">Sign In</h2>
        <form>
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
              onChange={(e) => setUrAge(e.target.value)}
            />
          </div>
          <TextField
            fullWidth
            label="Password"
            id="fullWidth"
            onChange={(e) => setUrPassword(e.target.value)}
          />
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
        </form>
      </div>
    </div>
  );
}
