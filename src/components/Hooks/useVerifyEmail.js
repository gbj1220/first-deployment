import React, { useState, useContext } from "react";
import { isEmail } from "validator";
import { UserAuthorizationContext } from "../../components/context/AuthenticateUser";

function useVerifyEmail() {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [emailErrorMessage, setEmailErrorMessage] = useState("");

  const userAuthContext = useContext(UserAuthorizationContext);

  const handleEmail = (e) => {
    let emailValue = e.target.value;
    setEmail(emailValue);

    if (isEmail(emailValue)) {
      setEmailError(false);
      setEmailErrorMessage("");
    } else if (!isEmail(emailValue)) {
      setEmailError(true);
      setEmailErrorMessage(
        "Email is not valid. Please register in order to access site."
      );
    } else if (userAuthContext.state.user.email) {
      setEmailError(true);
      setEmailErrorMessage("Email already exists. Please Sign In.");
    }

    return [email, handleEmail, emailError, emailErrorMessage];
  };
}
export default useVerifyEmail;
