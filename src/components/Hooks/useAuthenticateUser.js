import jwtDecode from "jwt-decode";

function useAuthenticateUser() {
  const getLocalStorageJwt = () => {
    return localStorage.getItem("jwtToken");
  };

  const setLocalStorageJwt = (jwtToken) => {
    return localStorage.setItem("jwtToken", jwtToken);
  };

  const removeToken = () => {
    localStorage.removeItem("jwtToken");
  };

  const checkToken = () => {
    let token = getLocalStorageJwt();

    if (token) {
      let decodedToken = jwtDecode(token);
      const currentTime = Date.now() / 1000;
      if (decodedToken.exp < currentTime) {
        removeToken();
        return false;
      } else {
        setLocalStorageJwt(token);
        return true;
      }
    } else {
      return false;
    }
  };

  return [checkToken, removeToken, getLocalStorageJwt];
}

export default useAuthenticateUser;
