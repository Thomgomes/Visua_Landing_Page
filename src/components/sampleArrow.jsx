/* eslint-disable react/prop-types */
const SampleArrow = ({ onClick, left = false }) => {
  return (
    <div
      className={`h-16 w-16 rounded-full bg-white flex justify-center items-center absolute top-[40%] cursor-pointer z-10
      ${left ? "left-6 lg:left-20" : "right-6 lg:right-20 rotate-180"}`}
      onClick={onClick}
    >
      <img src="/Arrow.svg" alt="seta" />
    </div>
  );
};

export default SampleArrow;