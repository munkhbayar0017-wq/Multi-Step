import { useContext } from "react";
import Input from "./input";
import { FormContext } from "./formContext";
function StepOne() {
  const { handleChange, backStep, nextStep, step, error, handleVal, formData } =
    useContext(FormContext);
  return (
    <div className="w-[480px] h-[655px] bg-white p-8 flex flex-col justify-between rounded-lg">
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
          <Input label="Email" onChange={handleChange("email")} />
          <div className="text-[#E14942] font-[Inter] text-[14px] font-normal tracking-[-0.28px] leading-[20px]">
            {error.email}
          </div>
          <Input label="Phone number" onChange={handleChange("phone")} />
          <div className="text-[#E14942] font-[Inter] text-[14px] font-normal tracking-[-0.28px] leading-[20px]">
            {error.phone}
          </div>
          <Input label="Password" />
          <Input label="Confirm password" />
        </div>
      </div>
      <div className="flex gap-2">
        <button
          className="w-[128px] h-[44px] rounded-[8px] border"
          onClick={backStep}
        >
          <p>Back</p>
        </button>
        <button
          onClick={() => {
            const validationResponse = handleVal();
            console.log(validationResponse);

            if (validationResponse) {
              nextStep();
            }
          }}
          className="w-[280px] h-[44px] bg-[#121316] rounded-[8px]"
        >
          <p className="text-[#FFFFFF]">Continue {step}/3</p>
        </button>
      </div>
    </div>
  );
}
export default StepOne;
