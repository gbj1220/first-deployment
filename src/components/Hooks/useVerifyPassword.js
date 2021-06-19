import { useState } from "react";
import { isStrongPassword } from "validator";
function useVerifyPassword() {
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState(false);
  const [passwordErrorMessage, setPasswordErrorMessage] = useState("");

  const handlePasswordOnChange = (e) => {
    setPassword(e.target.value);

    if (isStrongPassword(password)) {
      setPasswordError(false);
      setPasswordErrorMessage("");
    } else {
      setPasswordError(true);
      setPasswordErrorMessage(
        `Password must include at least 8 characters, 1 lowercase letter, 1 uppercase letter, and 1 symbol. `
      );
    }
  };

  return [
    password,
    handlePasswordOnChange,
    passwordError,
    passwordErrorMessage,
  ];
}

export default useVerifyPassword;
