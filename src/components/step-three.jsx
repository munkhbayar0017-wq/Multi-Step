import { useContext, useState, useRef } from "react";
import Input from "./input";
import { FormContext } from "../_providers/FormContext";
import UploadPhotoIcon from "../icons/UploadPhotoIcon";
import SvgComponent from "../icons/ContinueIcon";
import BackIcon from "../icons/BackIcon";

function StepThree() {
  const { handleChange, nextStep, step, backStep, formData, setError, error } =
    useContext(FormContext);
  const [selectedImage, setSelectedImage] = useState(null);
  const fileInputRef = useRef(null);

  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      setSelectedImage(file);
      handleChange("image")(file);
      setError((prev) => ({ ...prev, image: null }));
    }
  };

  const handleIconClick = () => {
    fileInputRef.current.click();
  };

  const handleVal3 = () => {
    let newErrors = {};
    if (!formData.dob) {
      setError((prev) => ({ ...prev, dob: "Please select your date" }));
      newErrors.dob = "Please select your date";
    }

    if (!selectedImage) {
      setError((prev) => ({ ...prev, image: "Image cannot be blank" }));
      newErrors.image = "Image cannot be blank";
    }

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
            type="date"
            label="Date of birth"
            onChange={handleChange("dob")}
            placeholder="--/--/--"
            error={error.dob}
            value={formData.dob}
            className={`${
              error.dob
                ? "border-[#E14942] text-[#E14942]"
                : "border-[#CBD5E1] text-[#121316]"
            }`}
          />
          {error.dob && <p className="text-[#E14942] text-sm">{error.dob}</p>}
          <p className="font-[Inter] tracking-[-0.14px] text-[14px] font-semibold">
            Profile image <span className="text-[#E14942]">*</span>
          </p>
          <div className="relative h-[180px] w-full bg-[#7F7F800D] rounded-md flex flex-col items-center justify-center gap-2">
            {!selectedImage ? (
              <>
                <div
                  className="bg-[#FFFFFF] rounded-[999px] h-[28px] w-[28px] flex justify-center items-center cursor-pointer"
                  onClick={handleIconClick}
                >
                  <UploadPhotoIcon />
                </div>
                <p className="font-[Inter] tracking-[-0.14px] text-[14px] font-semibold">
                  Add image
                </p>
              </>
            ) : (
              <div className="relative w-full h-full">
                <img
                  src={URL.createObjectURL(selectedImage)}
                  alt="preview"
                  className="w-full h-full object-cover rounded-md"
                />
                <button
                  onClick={() => {
                    setSelectedImage(null);
                    handleChange("image")(null);
                    if (fileInputRef.current) fileInputRef.current.value = "";
                  }}
                  className="absolute top-2 right-2 bg-white rounded-full w-6 h-6 flex items-center justify-center shadow-md hover:bg-gray-100"
                >
                  ✕
                </button>
              </div>
            )}
            <input
              type="file"
              accept="image/*"
              ref={fileInputRef}
              onChange={onImageChange}
              className="hidden"
            />
          </div>
          {error.image && (
            <p className="text-[#E14942] text-sm">{error.image}</p>
          )}
        </div>
      </div>
      <div className="flex gap-2">
        <button
          className="w-[128px] h-[44px] rounded-[8px] border hover:bg-gray-50 flex items-center justify-center gap-1 cursor-pointer transition-colors  duration-300"
          onClick={backStep}
        >
          <BackIcon />
          <p>Back</p>
        </button>
        <button
          onClick={() => {
            const isValid = handleVal3();
            if (isValid) {
              nextStep();
            }
          }}
          className="w-[280px] h-[44px] bg-[#121316] rounded-[8px]  flex items-center justify-center gap-1 cursor-pointer  hover:bg-[#2A2B2F] transition-colors  duration-300"
        >
          <p className="text-[#FFFFFF]">Submit {step}/3</p>
          <SvgComponent />
        </button>
      </div>
    </div>
  );
}

export default StepThree;
