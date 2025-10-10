import { useContext } from "react";
import { FormContext, FormProvide } from "./components/formContext";
import StepOne from "./components/step-one";
import StepTwo from "./components/step-two";
import StepThree from "./components/step-three";
import Success from "./components/success";

const Content = () => {
  const { step } = useContext(FormContext);
  return (
    <div className="w-screen h-screen flex items-center justify-center bg-[#F4F4F4]">
      {step === 1 && <StepOne />}
      {step === 2 && <StepTwo />}
      {step === 3 && <StepThree />}
      {step === 4 && <Success />}
    </div>
  );
};
function App() {
  return (
    <FormProvide>
      <Content />
    </FormProvide>
  );
}
export default App;
