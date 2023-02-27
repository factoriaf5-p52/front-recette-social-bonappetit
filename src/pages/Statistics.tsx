import pasta from "../assets/pasta.svg";
import dessert from "../assets/dessert.svg";
import meatballs from "../assets/meatballs.svg";
import meat from "../assets/meat.svg";
import tarta from "../assets/tarta.svg";
import cake from "../assets/cake.svg";
import dip from "../assets/dip.svg";
import burguer from "../assets/burguer.svg";
import salad from "../assets/salad.svg";
import salmon from "../assets/salmon.svg";
import Footer from "../components/Footer/Footer"

type Props = {};

const StatisticsPage = (props: Props) => {
  return (
    <>
    <div className=" flex flex-col justify-center items-center">
      <h1 className="font-bold text-center p-4 font-bold text-2xl mb-4">Statistics</h1>
      <div>
        <p className="font-bold text-left">Best rated recipes</p>
        <div className="grid grid-cols-3 gap-4 p-3 mb-3">
          <img src={pasta} alt="pasta" />
          <img src={dessert} alt="dessert" />
          <img src={meatballs} alt="meatballs" />
        </div>
        <p className="font-bold">The most viewed</p>
        <div className="grid grid-cols-3 gap-4 p-3 mb-3">
          <img src={meat} alt="meat" />
          <img src={tarta} alt="tarta" />
          <img src={tarta} alt="tarta2" />
        </div>
        <p className="font-bold">Trending recipes</p>
        <div className="grid grid-cols-3 gap-4 p-3 mb-3">
          <img src={dip} alt="dips2" />
          <img src={cake} alt="cake" />
          <img src={dip} alt="dips" />
        </div>
        <p className="font-bold">Chef's recommendations</p>
        <div className="grid grid-cols-3 gap-4 p-3 mb-3">
          <img src={burguer} alt="burguer" />
          <img src={salad} alt="salad" />
          <img src={cake} alt="cake" />
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default StatisticsPage;
