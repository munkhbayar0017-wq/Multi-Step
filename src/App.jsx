import { useContext } from "react";
import { FormContext, FormProvide } from "./components/formContext";
import StepOne from "./components/step-one";
import StepTwo from "./components/step-two";

const Content = () => {
  const { step } = useContext(FormContext);
  return (
    <div className="w-screen h-screen flex items-center justify-center bg-[#F4F4F4]">
      {step === 1 && <StepOne />}
      {step === 2 && <StepTwo />}
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
