import { useContext } from "react";
import { FormContext } from "./_providers/FormContext";
import { FormProvider } from "./_providers/FormProvider";
import StepOne from "./components/step-one";
import StepTwo from "./components/step-two";
import StepThree from "./components/step-three";
import Success from "./components/success";
// eslint-disable-next-line no-unused-vars
import { AnimatePresence, motion } from "framer-motion";

const Content = () => {
  const { step } = useContext(FormContext);

  const steps = {
    1: { component: StepOne, key: "step1" },
    2: { component: StepTwo, key: "step2" },
    3: { component: StepThree, key: "step3" },
    4: { component: Success, key: "success" },
  };

  const CurrentStepComponent = steps[step]?.component;
  const currentKey = steps[step]?.key;

  const variants = {
    initial: { opacity: 0, x: 50 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -50 },
  };

  return (
    <div className="w-screen h-screen flex items-center justify-center bg-[#F4F4F4] relative overflow-hidden">
      <AnimatePresence mode="wait">
        {CurrentStepComponent && (
          <motion.div
            key={currentKey}
            variants={variants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="absolute"
          >
            <CurrentStepComponent />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

function App() {
  return (
    <FormProvider>
      <Content />
    </FormProvider>
  );
}

export default App;
