import { useState, useEffect } from "react";
import { FormContext } from "./FormContext";

export const FormProvider = ({ children }) => {
  const [step, setStep] = useState(() => {
    const savedStep = localStorage.getItem("currentStep");
    return savedStep ? Number(savedStep) : 1;
  });

  const [formData, setFormData] = useState(() => {
    const savedData = localStorage.getItem("formData");
    return savedData ? JSON.parse(savedData) : {};
  });

  const [error, setError] = useState({});
  useEffect(() => {
    localStorage.setItem("currentStep", step);
  }, [step]);

  useEffect(() => {
    localStorage.setItem("formData", JSON.stringify(formData));
  }, [formData]);

  const nextStep = () => setStep((prev) => prev + 1);
  const backStep = () => setStep((prev) => prev - 1);

  const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const validPhone = /^[89]\d{7}$/;
  const validPass = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;

  const handleVal = () => {
    let newErrors = {};
    let errorCount = 0;

    if (!validEmail.test(formData.email)) {
      newErrors.email = "Please provide a valid email address.";
    } else {
      errorCount++;
    }

    if (!validPhone.test(formData.phone)) {
      newErrors.phone = "Please enter a valid phone number.";
    } else {
      errorCount++;
    }

    if (!validPass.test(formData.pass)) {
      newErrors.pass = "Password must include letters and numbers.";
    } else {
      errorCount++;
    }

    if (formData.pass !== formData.confirmPass) {
      newErrors.confirmPass = "Passwords do not match. Please try again.";
    } else {
      errorCount++;
    }

    setError(newErrors);

    return errorCount === 4;
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
        setError,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};
