import { createContext, useState } from "react";

export const FormContext = createContext();

export const FormProvide = ({ children }) => {
  const [formData, setFormData] = useState({});
  const [step, setStep] = useState(1);
  const nextStep = () => setStep(step + 1);
  const backStep = () => setStep(step - 1);
  const [errorCount, setErrorCount] = useState(0);
  const [error, setError] = useState({});
  const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const validPhone = /^[89]\d{7}$/;

  const handleVal = () => {
    console.log(!validEmail.test(formData.email));
    if (!validEmail.test(formData.email)) {
      setError((prev) => ({
        ...prev,
        email: "Please provide a valid email address.",
      }));
    } else {
      setError({ ...error, email: "" });
      setErrorCount(errorCount + 1);
    }
    if (!validPhone.test(formData.phone)) {
      setError((prev) => ({
        ...prev,
        phone: "Please enter a valid phone number.",
      }));
    } else {
      setError({ ...error, phone: "" });
      setErrorCount(errorCount + 1);
    }
    if (errorCount === 2) {
      return true;
    } else {
      return false;
    }
  };
  const handleChange = (input) => (e) => {
    setFormData({ ...formData, [input]: e.target.value });
  };

  return (
    <FormContext.Provider
      value={{
        formData,
        setFormData,
        handleChange,
        step,
        nextStep,
        backStep,
        error,
        handleVal,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};
