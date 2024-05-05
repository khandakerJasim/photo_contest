import { Icon } from "@iconify/react";

const PictureCard = ({ image, name, vote }) => {
  return (
    <div className="relative inline-block overflow-hidden">
      <div className="group cursor-pointer">
        <img
          src={image}
          alt=""
          className="rounded w-full h-80 group-hover:opacity-100 opacity-80 group-hover:scale-110 duration-300"
        />
        <div>
          <h1 className="absolute group-hover:opacity-100 md:opacity-0 top-4 left-4 ease-linear duration-300 bg-opacity-10 rounded-md py-2 px-4 bg-gray text-primary font-bold text-4xl">
            {name}
          </h1>
        </div>
        <div className="absolute group-hover:opacity-100 group-hover:shadow-2xl duration-300 md:opacity-0 right-4 ease-linear bottom-3 text-4xl text-secondary">
          <button>
            <Icon icon="bi:share" />
          </button>
        </div>
        <button className="absolute md:opacity-0 bottom-3 group-hover:opacity-100 ease-linear duration-300 text-4xl flex items-center space-x-2 justify-center">
          <Icon icon="ph:heart" className="text-gray" />{" "}
          <span className="text-gray">{vote}</span>
        </button>
      </div>
    </div>
  );
};

export default PictureCard;
