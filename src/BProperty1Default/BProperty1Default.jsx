export const BProperty1Default = ({
  property1 = "clicked",
  className,
  ...props
}) => {
  const variantsClassName = "property-1-" + property1;

  return (
    <div
      className={
        "rounded-md border-solid border-lite-teal border h-[53px] relative overflow-hidden " +
        className +
        " " +
        variantsClassName
      }
    >
      <div className="pt-2 pb-2 w-[1023px] h-[53px] absolute left-0 top-0">
        <div className="pt-2.5 pr-7 pb-2.5 pl-7 flex flex-row gap-2.5 items-center justify-center absolute left-0 top-2">
          <div className="text-teal text-left font-['LucidaBright-Demibold',_sans-serif] text-base font-normal relative">
            Is it safe to use for health conditions like asthma or anxiety?{" "}
          </div>
        </div>
        <img
          className="w-[1.26%] h-[42.03%] absolute right-[1.55%] left-[97.19%] bottom-[20.78%] top-[37.19%] overflow-visible"
          style={{ transform: "translate(-22.27px, 0px)" }}
          src="vector0.svg"
        />
      </div>
      <div className="text-[#3c3c3c] text-left font-['Nunito-Regular',_sans-serif] text-base font-normal absolute left-6 top-[74px] w-[970px]">
        Yes, it’s ideal for understanding and improving breathing habits that
        exacerbate these conditions. Consult your healthcare provider if you
        have specific concerns.{" "}
      </div>
    </div>
  );
};
