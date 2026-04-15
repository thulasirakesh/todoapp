  export const validateForm = ({ userName, password, validations, userNameRegex }) => {
    if (!userName) return "Please enter user name";

    if (!userNameRegex.test(userName)) return "Invalid UserName";

    if (!password) return "Please enter Password";

    if (!Object.values(validations).every(Boolean)) {
      return "Password needs to match requirements";
    }

    return null;
  };