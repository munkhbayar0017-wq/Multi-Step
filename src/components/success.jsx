function StepOne() {
  return (
    <div className="w-[480px] h-[193px] bg-white p-8 flex flex-col justify-between rounded-lg">
      <div className="flex flex-col gap-7">
        <div className="flex flex-col gap-2">
          <div className="bg-[url(./assets/Logo.svg)] w-[60px] h-[60px]"></div>
          <p className="font-[Inter] text-[26px] not-italic font-semibold tracking-[-0.78px] text-shadow-sm">
            You're All Set 🔥
          </p>
          <p className="font-[Inter] text-[18px] text-[#8E8E8E] font-normal">
            We have received your submission. Thank you!
          </p>
        </div>
      </div>
    </div>
  );
}
export default StepOne;
