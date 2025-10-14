import { useContext, useState, useRef } from "react";
import Input from "./input";
import { FormContext } from "./formContext";
import UploadPhotoIcon from "../icons/UploadPhotoIcon";
function StepOne() {
  const { handleChange, nextStep, step, backStep, formData } =
    useContext(FormContext);
  const [selectedImage, setSelectedImage] = useState(null);
  const [error, setError] = useState({});
  const fileInputRef = useRef(null);

  console.log(selectedImage);

  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      setSelectedImage(file);
      setError((prev) => ({ ...prev, image: null }));
    }
  };
  const handleIconClick = () => {
    fileInputRef.current.click();
  };

  const handleVal3 = () => {
    let newErrors = {};

    if (!formData.dob) {
      newErrors.dob = "Please select a date.";
    }

    if (!selectedImage) {
      newErrors.image = "Image cannot be blank";
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
            type="date"
            label="Date of birth"
            onChange={handleChange("dob")}
            placeholder="--/--/--"
          />
          <p className="font-[Inter] tracking-[-0.14px] text-[14px] font-semibold">
            Profile image <span className="text-[#E14942]">*</span>
          </p>
          <div className="h-[180px] w-full bg-[#7F7F800D] rounded-md flex flex-col items-center justify-center gap-2">
            <div
              className="bg-[#FFFFFF] rounded-[999px] h-[28px] w-[28px] flex justify-center items-center "
              onClick={handleIconClick}
            >
              <UploadPhotoIcon />
            </div>
            <p className="font-[Inter] tracking-[-0.14px] text-[14px] font-semibold">
              Add image
            </p>
            <input
              type="file"
              accept="image/*"
              ref={fileInputRef}
              onChange={onImageChange}
              className="hidden"
            />
            {error.image && (
              <img
                src={URL.createObjectURL(selectedImage)}
                alt="preview"
                className="w-full h-[180px] object-cover"
              />
            )}
          </div>
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
            const isValid = handleVal3();
            if (isValid) {
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
