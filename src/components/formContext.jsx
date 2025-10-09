import { createContext, useState } from "react";
export const FormContext = createContext();
export const FormProvide = ({ children }) => {
  const [formData, setFormData] = useState({});
  const [step, setStep] = useState(1);
  const nextStep = () => setStep(step + 1);
  const backStep = () => setStep(step - 1);
  const handleChange = (input) => (e) => {
    setFormData({ ...formData, [input]: e.target.value });
  };

  return (
    <FormContext.Provider
      value={{ formData, setFormData, handleChange, step, nextStep, backStep }}
    >
      {children}
    </FormContext.Provider>
  );
};
