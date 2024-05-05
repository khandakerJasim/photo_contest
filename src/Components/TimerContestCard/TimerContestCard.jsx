const TimerContestCard = ({ id, name, image, category, time }) => {
  return (
    <div>
      <div className="p-2 group border border-primary  border-opacity-30 hover:border-opacity-100 duration-300 shadow hover:shadow-lg rounded-md">
        <img src={image} alt="" className="w-full h-72 rounded-md" />
        <div className="flex items-center justify-between p-2">
          <h1 className="text-2xl font-semibold py-5">{name}</h1>
          <span className="bg-primary text-white px-3 rounded-full">
            {category}
          </span>
        </div>
        <h1 className="font-semibold pb-5">
          End time: <span className="md:group-hover:text-primary">{time}</span>
        </h1>
        <button className=" uppercase bottom-16 lg:bottom-28 lg:left-64 md:left-32 left-10 bg-secondary px-8 py-2 rounded-md group-hover:bg-primary group-hover:text-white duration-300">
          Join Now
        </button>
      </div>
    </div>
  );
};

export default TimerContestCard;
