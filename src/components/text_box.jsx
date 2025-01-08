/* eslint-disable react/prop-types */
const Text_Box = ({title, text}) => {
  return (
    <div className="bg-white p-4 md-p-5 lg:p-6 rounded-xl">
      <div>
        <p className="text-black text-2xl md:text-3xl lg:text-4xl font-bold pb-3 md:pb-5 whitespace-nowrap">{title}</p>
      </div>
      <div>
        <p className="text-gray">
          {text}
        </p>
      </div>
    </div>
  );
};

export default Text_Box;
