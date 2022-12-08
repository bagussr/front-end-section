const DateTimeDisplay = ({
    value,
    type,
}) => {
  return (
    <div className="flex flex-col items-center justify-center  rounded-lg w-24 h-24">
      <p className="md:text-7xl text-4xl font-bold">{value}</p>
      <p className="text-base">{type}</p>
    </div>
  );
};

export default DateTimeDisplay;
