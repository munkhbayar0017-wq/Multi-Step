import { useContext } from "react";
import Input from "./input";
import { FormContext } from "./formContext";
const validName = /^[A-Za-zА-Яа-яӨөҮүЁё]+$/;
function StepOne() {
  const { handleChange, nextStep, step, formData, setError, error } =
    useContext(FormContext);

  const handleVal2 = () => {
    let newErrors = {};

    if (!(validName.test(formData.firstname) && formData.firstname)) {
      newErrors.firstname = "Please use letters only.";
    }

    if (!(validName.test(formData.lastname) && formData.lastname)) {
      newErrors.lastname = "Please use letters only.";
    }

    if (!(validName.test(formData.username) && formData.username)) {
      newErrors.username = "Please use letters only.";
    }

    setError(newErrors);
    return Object.keys(newErrors).length === 0;
  };

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
          <Input
            label="First name"
            onChange={handleChange("firstname")}
            value={formData.firstname}
          />
          <div className="text-[#E14942] font-[Inter] text-[14px] font-normal tracking-[-0.28px] leading-[20px]">
            {error.firstname}
          </div>

          <Input
            label="Last name"
            onChange={handleChange("lastname")}
            value={formData.lastname}
          />
          <div className="text-[#E14942] font-[Inter] text-[14px] font-normal tracking-[-0.28px] leading-[20px]">
            {error.lastname}
          </div>
          <Input
            label="Username"
            onChange={handleChange("username")}
            value={formData.username}
          />
          <div className="text-[#E14942] font-[Inter] text-[14px] font-normal tracking-[-0.28px] leading-[20px]">
            {error.username}
          </div>
        </div>
      </div>
      <button
        onClick={() => {
          const validationResponse = handleVal2();
          if (validationResponse) {
            nextStep();
          }
        }}
        className="w-full h-[44px] bg-[#121316] rounded-[8px]"
      >
        <p className="text-[#FFFFFF]">Continue {step}/3</p>
      </button>
    </div>
  );
}
export default StepOne;
