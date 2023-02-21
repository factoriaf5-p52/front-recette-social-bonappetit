import ReactPlayer from "react-player";
import iconArrow from "../assets/iconback.svg";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

type Props = {};

const HomePage = (props: Props) => {
  const [isMobile, setIsMobile] = useState(false);

  const handleResize = () => {
    if (window.innerWidth < 720) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
  });

  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/recipes");
  };

  return (
    <>
      <section className="flex flex-col items-center">
        <div className="bg-red md:bg-white px-10 py-8 ">
          <h1 className="text-white md:text-gray-dark font-bold text-2xl md:text-3xl text-center mb-4">
            Discover the best chefs & recipes from around the world.
          </h1>
          <h2 className="text-white md:text-gray-dark text-md md:text-xl text-center">
            The social network that connects people through food.
          </h2>
        </div>
        <ReactPlayer
          url={
            isMobile ? "videos/cookPortrait450.mp4" : "videos/cookLandscape.mp4"
          }
          className="react-player"
          playing
          loop
          muted
          width="100%"
          height="100%"
        />
        <button
          onClick={handleClick}
          type="button"
          className="bg-red hover:bg-green cursor-pointer px-24 py-3 flex gap-8 rounded-sm text-white absolute bottom-20"
        >
          Bon Appétit <img className="" src={iconArrow} alt="arrow" />
        </button>
      </section>
    </>
  );
};

export default HomePage;
