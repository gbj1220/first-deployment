import { useState } from "react";
import { isAlphanumeric } from "validator";

function useVerifyInput() {
  const [input, setInput] = useState("");
  const [inputError, setInputError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const handleInput = (e) => {
    setInput(e.target.value);
    if (isAlphanumeric(input)) {
      setInputError(false);
      setErrorMessage("");
    } else if (!isAlphanumeric(input)) {
      setInputError(true);
      setErrorMessage(`Username must contain ONLY letters and numbers`);
    }
  };
  return [input, handleInput, inputError, errorMessage];
}

export default useVerifyInput;
