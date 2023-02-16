import Footer from "../components/Footer/Footer";
import ReactPlayer from "react-player";
import iconArrow from "../assets/iconback.svg";

type Props = {};

const HomePage = (props: Props) => {
  return (
    <>
      <section className="flex flex-col">
        <div className="bg-red px-10 py-10">
          <h1 className="text-white font-bold text-3xl text-center">
            Discover the best chefs & recipes from around the world.
          </h1>
          <h2 className="text-white text-xl text-center">
            The social network that connects people through food.
          </h2>
        </div>
        <ReactPlayer
          url="videos/cook.mp4"
          className="react-player"
          playing
          loop
          muted
          width="100%"
          height="100%"
        />
        <button className="bg-red cursor-pointer px-24 py-3 flex gap-8 rounded-sm text-white absolute bottom-24">
          Bon Appétit <img className="" src={iconArrow} alt="arrow" />
        </button>
        <Footer />
      </section>
    </>
  );
};

export default HomePage;
