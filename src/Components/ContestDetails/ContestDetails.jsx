import { useState } from "react";
import PictureCard from "../PictureCard/PictureCard";

const ContestDetails = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [seeMore, setSeeMore] = useState(false);

  const rules1 = (
    <div>
      <p>
        1. Eligibility: Clearly define who can participate in the contest,
        including age restrictions or any other specific requirements.
      </p>
      <p>
        2. Theme: Specify the theme or subject matter for the contest. This
        helps guide participants and ensures consistency in judging.
      </p>
      <p>
        3. Submission Guidelines: Clearly outline how participants can submit
        their photographs. Specify the format, file size, resolution, and any
        other technical requirements.
      </p>
      <p>
        4. Originality: State that submitted photographs must be original works
        created by the participants. Prohibit the use of copyrighted material or
        images created by others.
      </p>
      <p>
        5. Number of Entries: Define the maximum number of entries per
        participant, if applicable. This helps prevent excessive submissions and
        ensures fairness.
      </p>
      <p>
        6. Submission Deadline: Set a deadline for submitting entries. Make it
        clear that submissions received after the deadline will not be
        considered.
      </p>
      <p>
        7. Judging Criteria: Clearly communicate the criteria upon which the
        photographs will be judged. Common criteria include creativity,
        composition, technical proficiency, and adherence to the contest theme.
      </p>
      <p>
        8. Rights and Usage: Specify the rights and usage of the submitted
        photographs. For example, mention whether the contest organizers have
        the right to use the photographs for promotional purposes.
      </p>
    </div>
  );

  const pictureDetails = [
    {
      id: 300,
      name: "john wick",
      vote: "223",
      image:
        "https://img.freepik.com/free-photo/amazing-bengal-tiger-nature_475641-1189.jpg?size=626&ext=jpg&uid=R102445781&ga=GA1.1.282190101.1684599001&semt=ais",
    },
    {
      id: 301,
      name: "Ron mike",
      vote: "223",
      image:
        "https://img.freepik.com/free-photo/male-female-lions-laying-sand-resting_181624-2237.jpg?size=626&ext=jpg&uid=R102445781&ga=GA1.2.282190101.1684599001&semt=ais",
    },
    {
      id: 302,
      name: "Miller james",
      vote: "223",
      image:
        "https://img.freepik.com/free-photo/amazing-bengal-tiger-nature_475641-1205.jpg?size=626&ext=jpg&uid=R102445781&ga=GA1.2.282190101.1684599001&semt=ais",
    },
    {
      id: 303,
      name: "Abul kasem",
      vote: "223",
      image:
        "https://img.freepik.com/free-photo/beautiful-shot-african-leopard-resting-rock-with-blurred-background_181624-12832.jpg?size=626&ext=jpg&uid=R102445781&ga=GA1.2.282190101.1684599001&semt=ais",
    },
    {
      id: 304,
      name: "Lily Right",
      vote: "223",
      image:
        "https://img.freepik.com/free-photo/mother-baby-zebra-savanna-field_181624-26209.jpg?size=626&ext=jpg&uid=R102445781&ga=GA1.2.282190101.1684599001&semt=sph",
    },
    {
      id: 305,
      name: "Shek Jamal",
      vote: "223",
      image:
        "https://img.freepik.com/free-photo/african-elephant-walking-through-tranquil-wilderness-area-generated-by-ai_188544-24156.jpg?size=626&ext=jpg&uid=R102445781&ga=GA1.2.282190101.1684599001&semt=sph",
    },
    {
      id: 306,
      name: "Danny more",
      vote: "223",
      image:
        "https://img.freepik.com/free-photo/view-lion-wild_23-2150374815.jpg?size=626&ext=jpg&uid=R102445781&ga=GA1.2.282190101.1684599001&semt=sph",
    },
  ];

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };
  const handlePayButtonClick = () => {
    // Perform the payment logic here
    // This function will be called when the "Pay" button is clicked
  };
  return (
    <div>
      <h1 className="text-2xl text-center mt-10 font-semibold uppercase">
        Contest DeadLine : <span className="text-primary">12/12/2023</span>
      </h1>
      <div className="grid lg:grid-cols-12 gap-5 lg:gap-10 px-4">
        <div className="lg:col-span-8">
          <h1 className="text-primary text-center text-2xl font-bold my-10">
            Contest rules
          </h1>
          <div className="leading-loose">{rules1}</div>
        </div>
        <div className="lg:col-span-4">
          <h1 className="text-primary text-center text-2xl font-bold my-10">
            Payments
          </h1>
          <h1>Select an Payment Option:</h1>
          <div className="grid grid-cols-3 gap-3 my-10">
            <img
              className="w-full h-20 border cursor-pointer"
              src="https://seeklogo.com/images/B/bkash-logo-835789094A-seeklogo.com.png"
              alt=""
            />
            <img
              className="w-full h-20 border cursor-pointer"
              src="https://download.logo.wine/logo/Nagad/Nagad-Logo.wine.png"
              alt=""
            />
            <img
              className="w-full h-20 border cursor-pointer"
              src="https://seeklogo.com/images/D/dutch-bangla-rocket-logo-B4D1CC458D-seeklogo.com.png"
              alt=""
            />
          </div>
          <div className="flex justify-end font-semibold pb-5">
            <p>Amount need to pay : 300 BDT</p>
          </div>
          <div className="flex items-center justify-end ">
            <input
              type="checkbox"
              id="termsAndConditions"
              checked={isChecked}
              onChange={handleCheckboxChange}
              className="mr-2"
            />
            <label
              htmlFor="termsAndConditions"
              className="text-sm font-medium text-gray-700"
            >
              I have read and agree to the Terms and Conditions
            </label>
          </div>
          <div className="flex justify-end mt-5">
            <button
              onClick={handlePayButtonClick}
              disabled={!isChecked}
              className={`ml-4 py-2 px-8 rounded-md text-white ${
                isChecked
                  ? "bg-blue-500 hover:bg-blue-600 text-white"
                  : " bg-primary opacity-70 text-gray-500 cursor-not-allowed"
              }`}
            >
              Pay
            </button>
          </div>
        </div>
      </div>
      <div className="grid sm:grid-col-2 lg:grid-cols-4 gap-5 mt-10 md:mt-5">
        {pictureDetails.map(({ id, name, vote, image }) => (
          <PictureCard key={id} name={name} vote={vote} image={image} />
        ))}
      </div>
    </div>
  );
};

export default ContestDetails;
