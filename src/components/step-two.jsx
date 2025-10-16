import { useContext } from "react";
import Input from "./input";
import { FormContext } from "../_providers/FormContext";
import SvgComponent from "../icons/ContinueIcon";
import BackIcon from "../icons/BackIcon";
function StepTwo() {
  const { handleChange, backStep, nextStep, step, error, handleVal, formData } =
    useContext(FormContext);
  return (
    <div className="w-[480px] h-auto bg-white p-8 flex flex-col justify-between rounded-lg">
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
          <Input
            label="Email"
            onChange={handleChange("email")}
            value={formData.email}
            className={`${
              error.email
                ? "border-[#E14942] text-[#E14942]"
                : "border-[#CBD5E1] text-[#121316]"
            }`}
          />
          <div className="text-[#E14942] font-[Inter] text-[14px] font-normal tracking-[-0.28px] leading-[20px]">
            {error.email}
          </div>
          <Input
            label="Phone number"
            onChange={handleChange("phone")}
            value={formData.phone}
            className={`${
              error.phone
                ? "border-[#E14942] text-[#E14942]"
                : "border-[#CBD5E1] text-[#121316]"
            }`}
          />
          <div className="text-[#E14942] font-[Inter] text-[14px] font-normal tracking-[-0.28px] leading-[20px]">
            {error.phone}
          </div>
          <Input
            label="Password"
            onChange={handleChange("pass")}
            value={formData.pass}
            className={`${
              error.pass
                ? "border-[#E14942] text-[#E14942]"
                : "border-[#CBD5E1] text-[#121316]"
            }`}
            type="password"
          />
          <div className="text-[#E14942] font-[Inter] text-[14px] font-normal tracking-[-0.28px] leading-[20px]">
            {error.pass}
          </div>
          <Input
            label="Confirm password"
            onChange={handleChange("confirmPass")}
            value={formData.confirmPass}
            className={`${
              error.confirmPass
                ? "border-[#E14942] text-[#E14942]"
                : "border-[#CBD5E1] text-[#121316]"
            }`}
            type="password"
          />
          <div className="text-[#E14942] font-[Inter] text-[14px] font-normal tracking-[-0.28px] leading-[20px]">
            {error.confirmPass}
          </div>
        </div>
      </div>
      <div className="flex gap-2 pt-[24px]">
        <button
          className="w-[128px] h-[44px] rounded-[8px] border flex items-center justify-center gap-1 cursor-pointer  hover:bg-gray-50 transition-colors  duration-300"
          onClick={backStep}
        >
          <BackIcon />
          <p>Back</p>
        </button>
        <button
          onClick={() => {
            const validationResponse = handleVal();
            if (validationResponse) {
              nextStep();
            }
          }}
          className="w-[280px] h-[44px] bg-[#121316] rounded-[8px] flex items-center justify-center gap-1 cursor-pointer  hover:bg-[#2A2B2F] transition-colors  duration-300"
        >
          <p className="text-[#FFFFFF]">Continue {step}/3</p>
          <SvgComponent />
        </button>
      </div>
    </div>
  );
}
export default StepTwo;
