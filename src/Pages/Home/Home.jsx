import Banner from "./Banner/Banner";
import Events from "./Events/Events";
import MyContests from "./MyContests/MyContests";
import Stats from "./Stats/Stats";
import TopEvent from "./TopEvent/TopEvent";
import Winners from "./Winners/Winners";

const Home = () => {
  return (
    <div className="space-y-20">
      <Banner />
      <MyContests />
      <TopEvent />
      <Events />
      <Winners />
      <Stats />
    </div>
  );
};

export default Home;
