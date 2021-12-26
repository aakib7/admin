import jwtDecode from "jwt-decode";

const Logout = () => {
    localStorage.removeItem("token");
  };
const IsLoggedIn = () => {
    return localStorage.getItem("token") ? true : false;
  };
  
const getLoggedInUser = () => {
    try {
      const jwt = localStorage.getItem("token");
      return jwtDecode(jwt);
    } catch (ex) {
      return null;
    }
  };
const IsAdmin = () => {
    if (IsLoggedIn) {
      if (getLoggedInUser.role === "admin") return true;
      else return false;
    } else return false;
  };



module.exports.Logout = Logout;
module.exports.IsLoggedIn = IsLoggedIn;