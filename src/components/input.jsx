function Input({ label }) {
  return (
    <div className="flex flex-col gap-2">
      <p className="font-[Inter] tracking-[-0.14px] text-[14px] font-semibold">
        {label} <span className="text-[#E14942]">*</span>
      </p>
      <input
        placeholder="Placeholder"
        className="font-[Inter] tracking-[-0.14px] text-[14px] w-full h-[44px] p-3 rounded-[8px] border border-[#CBD5E1] border-solid"
      />
    </div>
  );
}
export default Input;
