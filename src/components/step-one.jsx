import { useContext } from "react";
import Input from "./input";
import { FormContext } from "./formContext";
function StepOne() {
  const { handleChange, nextStep } = useContext(FormContext);
  return (
    <div className="w-[480px] h-[655px] bg-white p-8 flex flex-col justify-between">
      <div className="flex flex-col gap-7">
        <div className="flex flex-col gap-2">
          <div className="bg-[url(./assets/Logo.svg)] w-[60px] h-[60px]"></div>
          <p className="font-[Inter] text-[26px] not-italic font-semibold tracking-[-0.78px] text-shadow-sm">
            Join Us! 😎
          </p>
          <p className="font-[Inter] text-[18px] text-[#8E8E8E] font-normal">
            Please provide all current information accurately.
          </p>
        </div>
        <div className="flex flex-col gap-3">
          <Input label="First name" onChange={handleChange("firstname")} />
          <Input label="Last name" onChange={handleChange("lastname")} />
          <Input label="Username" onChange={handleChange("username")} />
        </div>
      </div>
      <button
        onClick={nextStep}
        className="w-full h-[44px] bg-[#121316] rounded-[8px]"
      >
        <p className="text-[#FFFFFF]">Continue</p>
      </button>
    </div>
  );
}
export default StepOne;
