import { useState } from "react";
import { matches } from "validator";

function useVerifyInput() {
  const [input, setInput] = useState("");
  const [inputError, setInputError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleInput = (e) => {
    let inputValue = e.target.value;
    let inputName = e.target.name;
    setInput(inputValue);

    let checkNameWithRegEx;
    let errMessage;

    if (inputName === "First Name" || inputName === "Last Name") {
      checkNameWithRegEx = /[!@#$%^&*()[\],.?":;{}|<>1234567890]/g;
      errMessage = `${inputName} cannot have any numbers or special characters.`;
    } else {
      checkNameWithRegEx = /[!@#$%^&*()[\],.?":;{}|<>]/g;
      errMessage = `${inputName} cannot have any numbers.`;
    }

    if (matches(inputValue, checkNameWithRegEx)) {
      setInputError(true);
      setErrorMessage(errMessage);
    } else {
      setInputError(false);
      setErrorMessage("");
    }
  };
  return [input, handleInput, inputError, errorMessage];
}

export default useVerifyInput;
